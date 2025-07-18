import { Injectable } from '@angular/core';

interface Note {
  title: string;
  content: string;
}

interface Question {
  question: string;
  answer: string;
}

interface MultipleChoiceQuestion {
  question: string;
  options: string[];
  answer: string;
  correct: number;
}

interface MediaItem {
  title: string;
  description: string;
  src: string;
}

interface Topic {
  notes: Note[];
  longQuestions: Question[];
  shortQuestions: Question[];
  multipleChoiceQuestions: MultipleChoiceQuestion[];
  audio: MediaItem[];
  video: MediaItem[];
}

interface Topics {
  [key: string]: Topic;
}

@Injectable({ providedIn: 'root' })
export class MarkdownParserService {
  /**
   * Convert raw markdown into the exact JSON shape used in sampleformat.ts.
   * Groups all content under a single topic with separate logic for each section.
   */
  parse(markdown: string) {
    const topics: Topics = {};
    const lines = markdown.split(/\r?\n/);

    // Extract topic title from first **bold** line
    const topicTitle = this.extractTopicTitle(lines);
    if (!topicTitle) {
      throw new Error('No topic title found in markdown');
    }

    // Initialize topic
    topics[topicTitle] = {
      notes: [],
      longQuestions: [],
      shortQuestions: [],
      multipleChoiceQuestions: [],
      audio: [],
      video: []
    };

    // Extract different sections
    const sections = this.extractSections(lines);

    // Process each section with dedicated logic
    if (sections.notes.length > 0) {
      this.processNotesSection(sections.notes, topics[topicTitle].notes);
    }

    if (sections.mcq.length > 0) {
      this.processMCQSection(sections.mcq, topics[topicTitle].multipleChoiceQuestions);
    }

    if (sections.shortQuestions.length > 0) {
      this.processShortQuestionsSection(sections.shortQuestions, topics[topicTitle].shortQuestions);
    }

    if (sections.longQuestions.length > 0) {
      this.processLongQuestionsSection(sections.longQuestions, topics[topicTitle].longQuestions);
    }

    return { topics };
  }

  /**
   * Extract the main topic title from the first **bold** line
   */
  private extractTopicTitle(lines: string[]): string {
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('**') && trimmed.endsWith('**') && 
          !this.isAnswerLine(trimmed)) { // Removed isSectionHeader check
        return this.cleanTitle(trimmed);
      }
    }
    return 'Default Topic';
  }

  /**
   * Extract different sections from the markdown based on delimiters
   */
  private extractSections(lines: string[]) {
    const sections = {
      notes: [] as string[],
      mcq: [] as string[],
      shortQuestions: [] as string[],
      longQuestions: [] as string[]
    };

    let currentSectionName: keyof typeof sections | null = null;
    let inExplicitSection = false;

    // Skip the first line which is the main topic title
    let skipFirstLine = true;

    for (const line of lines) {
      const trimmed = line.trim();

      if (skipFirstLine) {
        skipFirstLine = false;
        continue;
      }

      if (this.isSectionDelimiter(trimmed)) {
        if (trimmed.includes('starts')) {
          currentSectionName = this.getSectionNameFromDelimiter(trimmed);
          inExplicitSection = true;
        } else if (trimmed.includes('End')) {
          inExplicitSection = false;
          currentSectionName = null;
        }
        continue;
      }

      if (inExplicitSection && currentSectionName) {
        sections[currentSectionName].push(line);
      } else if (!inExplicitSection && trimmed.length > 0) {
        // If not in an explicit section, and line is not empty, it's a note
        sections.notes.push(line);
      }
    }

    return sections;
  }

  /**
   * Process notes section with dedicated logic
   */
  private processNotesSection(lines: string[], output: Note[]): void {
    const cleanedLines = lines.filter(line => line.trim());
    if (cleanedLines.length === 0) return;

    // Assume all lines in notes section are part of one general note
    output.push({
      title: '',
      content: cleanedLines.join('\n').trim()
    });
  }

  /**
   * Process MCQ section with dedicated logic
   */
  private processMCQSection(lines: string[], output: MultipleChoiceQuestion[]): void {
    const cleanedLines = lines.filter(line => line.trim() && !line.trim().startsWith('###')); // Ignore ### lines
    if (cleanedLines.length === 0) return;

    let currentQuestion: MultipleChoiceQuestion | null = null;
    let questionLines: string[] = [];
    let questionNumber = 0;

    const saveCurrentQuestion = () => {
      if (currentQuestion && questionLines.length > 0) {
        const questionText = questionLines.join(' ')
          .replace(/^\d+\.\s*/, '')
          .replace(/\*\*/g, '')
          .trim();
        
        currentQuestion.question = questionText;
        
        // Ensure we have 4 options
        while (currentQuestion.options.length < 4) {
          currentQuestion.options.push('');
        }
        
        output.push(currentQuestion);
      }
    };

    for (const line of cleanedLines) {
      const trimmed = line.trim();
      
      // Detect new question (starts with number)
      if (/^\d+\.\s/.test(trimmed)) {
        saveCurrentQuestion();
        questionNumber++;
        currentQuestion = {
          question: '',
          options: [],
          answer: '',
          correct: 0
        };
        questionLines = [trimmed];
      }
      // Detect options (a), (b), (c), (d) or a., b., c., d.
      else if (/^\s*\(([a-dA-D])\)/.test(trimmed) || /^\s*([a-dA-D])[\.\)]\s/.test(trimmed)) {
        if (currentQuestion) {
          const optionText = trimmed
            .replace(/^\s*\(([a-dA-D])\)\s*/, '')
            .replace(/^\s*[a-dA-D][\.\)]\s*/, '')
            .trim();
          currentQuestion.options.push(optionText);
        }
      }
      // Detect answer line
      else if (trimmed.includes('ଉତ୍ତର:') || trimmed.includes('Answer:')) {
        if (currentQuestion) {
          this.extractMCQAnswer(trimmed, currentQuestion);
        }
      }
      // Continue question text
      else if (currentQuestion && questionLines.length > 0 && !trimmed.startsWith('**')) {
        questionLines.push(trimmed);
      }
    }

    saveCurrentQuestion();
  }

  /**
   * Process short questions section with dedicated logic
   */
  private processShortQuestionsSection(lines: string[], output: Question[]): void {
    const cleanedLines = lines.filter(line => line.trim() && !line.trim().startsWith('###')); // Ignore ### lines
    if (cleanedLines.length === 0) return;

    let currentQuestion: Question | null = null;
    let questionLines: string[] = [];
    let answerLines: string[] = [];
    let readingAnswer = false;

    const saveCurrentQuestion = () => {
      if (currentQuestion && questionLines.length > 0) {
        const questionText = questionLines.join(' ')
          .replace(/^\d+\.\s*/, '')
          .replace(/\*\*/g, '')
          .trim();
        
        const answerText = answerLines.join('\n').trim();
        
        currentQuestion.question = questionText;
        currentQuestion.answer = answerText;
        output.push(currentQuestion);
      }
    };

    for (const line of cleanedLines) {
      const trimmed = line.trim();
      
      // Detect new question
      if (/^\d+\.\s/.test(trimmed) || (trimmed.startsWith('**') && trimmed.endsWith('**') && !this.isAnswerLine(trimmed))) {
        saveCurrentQuestion();
        currentQuestion = { question: '', answer: '' };
        questionLines = [trimmed];
        answerLines = [];
        readingAnswer = false;
      }
      // Detect answer line
      else if (trimmed.includes('ଉତ୍ତର:') || trimmed.includes('Answer:')) {
        if (currentQuestion) {
          readingAnswer = true;
          const answerText = this.extractAnswerText(trimmed);
          answerLines = answerText ? [answerText] : [];
        }
      }
      // Continue reading content
      else if (currentQuestion && trimmed) {
        if (readingAnswer) {
          answerLines.push(line);
        } else {
          questionLines.push(trimmed);
        }
      }
    }

    saveCurrentQuestion();
  }

  /**
   * Process long questions section with dedicated logic
   */
  private processLongQuestionsSection(lines: string[], output: Question[]): void {
    const cleanedLines = lines.filter(line => line.trim() && !line.trim().startsWith('###')); // Ignore ### lines
    if (cleanedLines.length === 0) return;

    let currentQuestion: Question | null = null;
    let questionLines: string[] = [];
    let answerLines: string[] = [];
    let readingAnswer = false;

    const saveCurrentQuestion = () => {
      if (currentQuestion && questionLines.length > 0) {
        const questionText = questionLines.join(' ')
          .replace(/^\d+\.\s*/, '')
          .replace(/\*\*/g, '')
          .trim();
        
        const answerText = answerLines.join('\n').trim();
        
        currentQuestion.question = questionText;
        currentQuestion.answer = answerText;
        output.push(currentQuestion);
      }
    };

    for (const line of cleanedLines) {
      const trimmed = line.trim();
      
      // Detect new question (more flexible for long questions)
      if (/^\d+\.\s/.test(trimmed) || 
          (trimmed.startsWith('**') && trimmed.endsWith('**') && 
           !this.isAnswerLine(trimmed) && trimmed.includes('?'))) {
        saveCurrentQuestion();
        currentQuestion = { question: '', answer: '' };
        questionLines = [trimmed];
        answerLines = [];
        readingAnswer = false;
      }
      // Detect answer line
      else if (trimmed.includes('ଉତ୍ତର:') || trimmed.includes('Answer:')) {
        if (currentQuestion) {
          readingAnswer = true;
          const answerText = this.extractAnswerText(trimmed);
          answerLines = answerText ? [answerText] : [];
        }
      }
      // Continue reading content
      else if (currentQuestion && trimmed) {
        if (readingAnswer) {
          answerLines.push(line);
        } else {
          questionLines.push(trimmed);
        }
      }
    }

    saveCurrentQuestion();
  }

  /**
   * Helper method to extract answer text from answer lines
   */
  private extractAnswerText(line: string): string {
    // Remove the bold answer prefix and any leading/trailing whitespace
    return line
      .replace(/\*\*ଉତ୍ତର:\*\*\s*/, '') // For **ଉତ୍ତର:**
      .replace(/\*\*Answer:\*\*\s*/, '') // For **Answer:**
      .replace(/ଉତ୍ତର:\s*/, '') // For ଉତ୍ତର:
      .replace(/Answer:\s*/, '') // For Answer:
      .trim();
  }

  /**
   * Helper method to extract MCQ answer and set correct option
   */
  private extractMCQAnswer(line: string, mcq: MultipleChoiceQuestion): void {
    let answerText = this.extractAnswerText(line);
    
    // Extract correct option letter
    const letterMatch = answerText.match(/^\(([a-dA-D])\)/);
    if (letterMatch) {
      const letter = letterMatch[1].toLowerCase();
      mcq.correct = letter.charCodeAt(0) - 97; // Convert a,b,c,d to 0,1,2,3
      answerText = answerText.replace(/^\(([a-dA-D])\)\s*/, '').trim();
    } else {
      // Try to match answer with existing options
      const optionIndex = mcq.options.findIndex(opt => 
        opt.toLowerCase().includes(answerText.toLowerCase()) || 
        answerText.toLowerCase().includes(opt.toLowerCase())
      );
      if (optionIndex !== -1) {
        mcq.correct = optionIndex;
      }
    }
    
    mcq.answer = answerText;
  }

  /**
   * Helper method to check if line is a section delimiter
   */
  private isSectionDelimiter(line: string): boolean {
    return line.includes('---') && (line.includes('starts') || line.includes('End'));
  }

  /**
   * Helper method to get section name from delimiter line
   */
  private getSectionNameFromDelimiter(line: string): 'mcq' | 'shortQuestions' | 'longQuestions' | null {
    if (line.includes('MCQ section')) return 'mcq';
    if (line.includes('shortQuestions Section')) return 'shortQuestions';
    if (line.includes('longQuestions Section')) return 'longQuestions';
    return null;
  }

  /**
   * Helper method to check if line contains an answer
   */
  private isAnswerLine(line: string): boolean {
    return line.includes('ଉତ୍ତର:') || line.includes('Answer:');
  }

  /**
   * Helper method to clean title text
   */
  private cleanTitle(line: string): string {
    return line.replace(/\*\*/g, '').replace(/\([^)]*\)/, '').trim();
  }
}