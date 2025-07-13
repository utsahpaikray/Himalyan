import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class HomePage implements OnInit {
  private dataService = inject(DataService);
  private router = inject(Router);

  classes: string[] = [];

  ngOnInit() {
    this.dataService.getSchoolData().subscribe(classes => {
      if (classes) {
        this.classes = classes;
      }
    });
  }

  selectClass(className: string) {
    this.router.navigate(['/subject', className]);
  }
}
