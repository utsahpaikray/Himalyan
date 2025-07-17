import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class AppComponent implements OnInit {
  isSidebarOpen = false;
  classes: Observable<string[]> = of([]);
  subjects: { [className: string]: Observable<string[]> } = {};
  topics: { [className: string]: { [subjectName: string]: Observable<string[]> } } = {};
  classVisibility: { [className: string]: boolean } = {};
  topicVisibility: { [className: string]: { [subjectName: string]: boolean } } = {};

  private dataService = inject(DataService);

  constructor() { }

  ngOnInit() {
    this.classes = this.dataService.getSchoolData();
  }

  toggleSubjects(className: string) {
    this.classVisibility[className] = !this.classVisibility[className];
    if (this.classVisibility[className] && !this.subjects[className]) {
      this.subjects[className] = this.dataService.getSubjectsForClass(className);
    }
  }

  toggleTopics(className: string, subjectName: string) {
    if (!this.topicVisibility[className]) {
      this.topicVisibility[className] = {};
    }
    this.topicVisibility[className][subjectName] = !this.topicVisibility[className][subjectName];
    if (this.topicVisibility[className][subjectName] && (!this.topics[className] || !this.topics[className][subjectName])) {
      if (!this.topics[className]) {
        this.topics[className] = {};
      }
      this.topics[className][subjectName] = this.dataService.getSubjectData(className, subjectName).pipe(
        map(subjectData => Object.keys(subjectData.topics))
      );
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
}