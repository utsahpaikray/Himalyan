import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule], 
})
export class QuizPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);

  className: string = '';
  subjectName: string = '';
  topicName: string = '';
  currentQuiz: any[] = [];
  currentQuestionIndex: number = 0;
  userAnswers: number[] = [];
  selectedAnswer: number | null = null;
  quizStarted: boolean = false;
  quizCompleted: boolean = false;
  correctAnswersCount: number = 0;
  percentage: number = 0;
  scoreMessage: string = '';

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.className = params.get('className') || '';
      this.subjectName = params.get('subjectName') || '';
      this.topicName = params.get('topicName') || '';
      this.startQuiz();
    });
  }

  startQuiz() {
    this.dataService.getTopicData(this.className, this.subjectName, this.topicName).subscribe((topicData) => {
      const mcqsForQuiz = topicData?.multipleChoiceQuestions;

      if (mcqsForQuiz && mcqsForQuiz.length > 0) {
        this.currentQuiz = mcqsForQuiz.map((mcq: any) => ({
          question: mcq.question,
          options: mcq.options,
          correct: mcq.correct, // Ensure this is 0-indexed
        }));
      } else {
        alert('Quiz not available for this topic yet, and no MCQs found to generate a quiz.');
        this.goBackToContent(); // Go back if no quiz data
        return;
      }

      this.currentQuestionIndex = 0;
      this.userAnswers = [];
      this.selectedAnswer = null;
      this.quizCompleted = false;
      this.quizStarted = true;
      this.loadQuestion();
    });
  }

  loadQuestion() {
    if (this.currentQuestionIndex >= this.currentQuiz.length) {
      this.showResults();
      return;
    }
    this.selectedAnswer = null; // Reset selection for new question
  }

  

  nextQuestion() {
    if (this.selectedAnswer === null) {
      alert('Please select an option before proceeding.');
      return;
    }
    this.userAnswers.push(this.selectedAnswer);
    this.currentQuestionIndex++;
    this.loadQuestion();
  }

  submitQuiz() {
    if (this.selectedAnswer === null) {
      alert('Please select an option before submitting.');
      return;
    }
    this.userAnswers.push(this.selectedAnswer);
    this.showResults();
  }

  showResults() {
    this.correctAnswersCount = 0;
    for (let i = 0; i < this.userAnswers.length; i++) {
      if (this.userAnswers[i] === this.currentQuiz[i].correct) {
        this.correctAnswersCount++;
      }
    }

    this.percentage = Math.round(
      (this.correctAnswersCount / this.currentQuiz.length) * 100
    );

    if (this.percentage >= 90) {
      this.scoreMessage = 'Excellent work! 🌟';
    } else if (this.percentage >= 70) {
      this.scoreMessage = 'Good job! 👍';
    } else if (this.percentage >= 50) {
      this.scoreMessage = 'Not bad, keep practicing! 📚';
    } else {
      this.scoreMessage = 'Keep studying and try again! 💪';
    }

    this.quizCompleted = true;
    this.quizStarted = false;
  }

  restartQuiz() {
    this.startQuiz();
  }

  goBackToContent() {
    this.router.navigate([
      '/content',
      this.className,
      this.subjectName,
      this.topicName,
    ]);
  }
}