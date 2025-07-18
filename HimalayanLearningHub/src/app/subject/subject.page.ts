import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SubjectPageComponent implements OnInit {
  className: string | null = null;
  subjectName: string | null = null;
  topics: Observable<string[]> = of([]);

  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  ngOnInit() {
    this.className = this.route.snapshot.paramMap.get('className');
    this.subjectName = this.route.snapshot.paramMap.get('subjectName');
    if (this.className && this.subjectName) {
      this.topics = this.dataService.getSubjectData(this.className, this.subjectName).pipe(
        map(subjectData => Object.keys(subjectData.topics))
      );
    }
  }
}