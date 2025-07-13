import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataMap: { [className: string]: { [subjectName: string]: () => Promise<any> } } = {
    'class10': {
      'math': () => import('../../assets/data/class10/math').then(m => m.Math),
      'life-science': () => import('../../assets/data/class10/life-science').then(m => m.lifeScience),
      'physical-science': () => import('../../assets/data/class10/physical-science').then(m => m.physicalScience),
    },
    'class9': {
      'math': () => import('../../assets/data/class9/math').then(m => m.math),
      'science': () => import('../../assets/data/class9/science').then(m => m.science),
    }
  };

  constructor() { }

  getSchoolData(): Observable<string[]> {
    return of(Object.keys(this.dataMap));
  }

  getSubjectsForClass(className: string): Observable<string[]> {
    if (this.dataMap[className]) {
      return of(Object.keys(this.dataMap[className]));
    }
    return of([]);
  }

  getSubjectData(className: string, subjectName: string): Observable<any> {
    if (this.dataMap[className] && this.dataMap[className][subjectName]) {
      return from(this.dataMap[className][subjectName]());
    }
    return of(null);
  }

  getTopicData(className: string, subjectName: string, topicName: string): Observable<any> {
    return this.getSubjectData(className, subjectName).pipe(
      map(subjectData => {
        if (subjectData && subjectData.topics && subjectData.topics[topicName]) {
          return subjectData.topics[topicName];
        }
        return null;
      })
    );
  }

  getQuizData(): Observable<any> {
    // This method needs to be updated based on how quiz data will be structured.
    // For now, it returns an empty observable.
    return of({});
  }
}

