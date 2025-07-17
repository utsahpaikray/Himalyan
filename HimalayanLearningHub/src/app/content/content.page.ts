import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from '../safe-html.pipe'; // Import the SafeHtmlPipe

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SafeHtmlPipe], // Add SafeHtmlPipe to imports
})
export class ContentPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);

  className: string = '';
  subjectName: string = '';
  topicName: string = '';
  topicData: any;
  contentItems: any[] = [];
  hasQuiz: boolean = false;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.className = params.get('className') || '';
      this.subjectName = params.get('subjectName') || '';
      this.topicName = params.get('topicName') || '';

      if (this.className && this.subjectName && this.topicName) {
        this.dataService.getTopicData(this.className, this.subjectName, this.topicName).subscribe((topicData) => {
          this.topicData = topicData;
          console.log(this.topicData)
          this.processTopicData();
        });
      }
    });
  }

  processTopicData() {
    this.contentItems = [
      { title: 'Notes', type: 'notes', show: true, items: [] },
      { title: 'Multiple Choice Questions', type: 'mcqs', show: false, items: [] },
      { title: 'Short Questions', type: 'shortQuestions', show: false, items: [] },
      { title: 'Medium Questions', type: 'mediumQuestions', show: false, items: [] },
      { title: 'Long Questions', type: 'longQuestions', show: false, items: [] },
      { title: 'Media', type: 'media', show: false, items: [] }
    ];

    const notesSection = this.contentItems.find(s => s.type === 'notes');
    const mcqsSection = this.contentItems.find(s => s.type === 'mcqs');
    const shortQuestionsSection = this.contentItems.find(s => s.type === 'shortQuestions');
    const mediumQuestionsSection = this.contentItems.find(s => s.type === 'mediumQuestions');
    const longQuestionsSection = this.contentItems.find(s => s.type === 'longQuestions');
    const mediaSection = this.contentItems.find(s => s.type === 'media');
console.log(shortQuestionsSection)
    if (this.topicData.notes) {
      notesSection.items = this.topicData.notes.map((note: any) => ({ type: 'note', ...note }));
    }
    if (this.topicData.multipleChoiceQuestions) {
      mcqsSection.items = this.topicData.multipleChoiceQuestions.map((mcq: any) => ({
        type: 'mcq',
        ...mcq,
        showAnswer: false,
        selectedOption: null,
        isAnswered: false,
        answer: mcq.options[mcq.correct] // Ensure answer is the value of the correct option
      }));
    }
    if (this.topicData.shortQuestions) {
      shortQuestionsSection.items = this.topicData.shortQuestions.map((sq: any) => ({ type: 'short-question', ...sq, showAnswer: false }));
    }
    if (this.topicData.mediumQuestions) {
      mediumQuestionsSection.items = this.topicData.mediumQuestions.map((mq: any) => ({ type: 'medium-question', ...mq, showAnswer: false }));
    }
    if (this.topicData.longQuestions) {
      longQuestionsSection.items = this.topicData.longQuestions.map((lq: any) => ({ type: 'long-question', ...lq, showAnswer: false }));
    }
    if (this.topicData.audio) {
      mediaSection.items.push(...this.topicData.audio.map((audio: any) => ({ type: 'media', mediaType: 'audio', ...audio })));
    }
    if (this.topicData.video) {
      mediaSection.items.push(...this.topicData.video.map((video: any) => ({ type: 'media', mediaType: 'video', ...video })));
    }
    console.log(this.contentItems)

    // Filter out empty sections
    this.contentItems = this.contentItems.filter(section => section.items.length > 0);

    this.hasQuiz = this.topicData.quiz && this.topicData.quiz.length > 0;
  }

  toggleSection(section: any) {
    section.show = !section.show;
  }

  startQuiz() {
    this.router.navigate([
      '/quiz',
      this.className,
      this.subjectName,
      this.topicName,
    ]);
  }

  goBack() {
    this.router.navigate(['/topic', this.className, this.subjectName]);
  }

  toggleAnswer(item: any) {
    item.showAnswer = !item.showAnswer;
  }

  selectOption(mcqItem: any, selectedOption: string) {
    if (mcqItem.isAnswered) {
      return; // Prevent changing answer after it's been submitted
    }
    mcqItem.selectedOption = selectedOption;
    mcqItem.isAnswered = true;
    mcqItem.showAnswer = true; // Reveal answer when an option is selected

    // Logic to mark correct/incorrect
    if (mcqItem.selectedOption === mcqItem.answer) {
      // Correct
    } else {
      // Incorrect
    }
  }
}