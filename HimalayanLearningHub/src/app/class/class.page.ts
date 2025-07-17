import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-page',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ClassPageComponent implements OnInit {
  className: string | null = null;
  subjects: Observable<string[]> = of([]);

  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  ngOnInit() {
    this.className = this.route.snapshot.paramMap.get('className');
    if (this.className) {
      this.subjects = this.dataService.getSubjectsForClass(this.className);
    }
  }
}
