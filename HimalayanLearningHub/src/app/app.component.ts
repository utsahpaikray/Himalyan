import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterModule, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonButtons, IonButton, IonIcon]
})
export class AppComponent {
  constructor() {
    addIcons({ home });
  }
}
