import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SubjectPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);

  className: string = '';
  subjects: string[] = [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.className = params.get('className') || '';
      if (this.className) {
        this.dataService.getSubjectsForClass(this.className).subscribe((subjects) => {
          this.subjects = subjects;
        });
      }
    });
  }

  selectSubject(subjectName: string) {
    this.router.navigate(['/topic', this.className, subjectName]);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
