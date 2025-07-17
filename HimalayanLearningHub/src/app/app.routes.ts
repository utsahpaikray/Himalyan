import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'class/:className',
    loadComponent: () => import('./class/class.page').then( m => m.ClassPageComponent)
  },
  {
    path: 'class/:className',
    loadComponent: () => import('./class/class.page').then( m => m.ClassPageComponent)
  },
  {
    path: 'subject/:className/:subjectName',
    loadComponent: () => import('./subject/subject.page').then( m => m.SubjectPageComponent)
  },
  {
    path: 'content/:className/:subjectName/:topicName',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'quiz/:className/:subjectName/:topicName',
    loadComponent: () => import('./quiz/quiz.page').then( m => m.QuizPage)
  },
  {
    path: 'parse',
    loadComponent: () => import('./content-mapper/content-mapper.component').then( m => m.ContentMapperComponent)
  },
];