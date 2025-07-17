import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class AppComponent implements OnInit {
  classes: string[] = [];
  private dataService = inject(DataService);

  constructor() { }

  ngOnInit() {
    this.dataService.getSchoolData().subscribe(classes => {
      if (classes) {
        this.classes = classes;
      }
    });
  }
}