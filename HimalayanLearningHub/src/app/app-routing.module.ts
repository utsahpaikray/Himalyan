import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'subject/:className',
    loadComponent: () => import('./subject/subject.page').then( m => m.SubjectPage)
  },
  {
    path: 'topic/:className/:subjectName',
    loadComponent: () => import('./topic/topic.page').then( m => m.TopicPage)
  },
  {
    path: 'content/:className/:subjectName/:topicName',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'quiz/:className/:subjectName/:topicName',
    loadComponent: () => import('./quiz/quiz.page').then( m => m.QuizPage)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
