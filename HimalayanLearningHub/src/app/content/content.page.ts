import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class ContentPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);

  className: string = '';
  subjectName: string = '';
  topicName: string = '';
  topicData: any;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.className = params.get('className') || '';
      this.subjectName = params.get('subjectName') || '';
      this.topicName = params.get('topicName') || '';

      if (this.className && this.subjectName && this.topicName) {
        this.dataService.getTopicData(this.className, this.subjectName, this.topicName).subscribe((topicData) => {
          this.topicData = topicData;
        });
      }
    });
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

  // Implementation of toggleAnswer based on script.js logic
  toggleAnswer(item: any, selectedOptIndex: number | null, targetElement: EventTarget | null) {
    if (item.answer) { // This is a short question (Q&A)
      const answerElement = (targetElement as HTMLElement)?.nextElementSibling;
      if (answerElement && answerElement.classList.contains('question-answer')) {
        answerElement.classList.toggle('hidden');
      }
    } else if (item.options) { // This is an MCQ
      const mcqItemElement = (targetElement as HTMLElement)?.closest('.mcq-item');
      if (!mcqItemElement) return;

      // Remove previous selection highlight from this MCQ item only
      mcqItemElement.querySelectorAll('.mcq-option').forEach((opt: Element) => {
        opt.classList.remove('selected', 'correct', 'incorrect');
      });

      const optionElement = targetElement as HTMLElement;
      optionElement.classList.add('selected');

      if (selectedOptIndex === item.correct) {
        optionElement.classList.add('correct');
      } else {
        optionElement.classList.add('incorrect');
        // Highlight correct answer
        const correctOptionDiv = mcqItemElement.querySelector(`.mcq-option[data-option-index="${item.correct}"]`);
        if (correctOptionDiv) {
          correctOptionDiv.classList.add('correct');
        }
      }

      // Display answer and explanation
      const answerContainer = mcqItemElement.querySelector('.mcq-answer');
      if (answerContainer) {
        const correctOptionTextSpan = answerContainer.querySelector('.correct-option-text');
        const explanationTextSpan = answerContainer.querySelector('.explanation-text');

        if (correctOptionTextSpan) {
          correctOptionTextSpan.textContent = item.options[item.correct];
        }
        if (explanationTextSpan) {
          explanationTextSpan.textContent = item.explanation;
        }
        answerContainer.classList.remove('hidden');
      }
    }
  }
}