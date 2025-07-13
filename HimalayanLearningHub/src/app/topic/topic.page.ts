import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
  imports: [CommonModule, IonicModule,  CommonModule,
    FormsModule,],
  standalone: true,
})
export class TopicPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);

  className: string = '';
  subjectName: string = '';
  topics: string[] = [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.className = params.get('className') || '';
      this.subjectName = params.get('subjectName') || '';

      if (this.className && this.subjectName) {
        this.dataService.getSubjectData(this.className, this.subjectName).subscribe((subjectData) => {
          if (subjectData && subjectData.topics) {
            this.topics = Object.keys(subjectData.topics);
          }
        });
      }
    });
  }

  selectTopic(topicName: string) {
    this.router.navigate([
      '/content',
      this.className,
      this.subjectName,
      topicName,
    ]);
  }

  goBack() {
    this.router.navigate(['/subject', this.className]);
  }
}