import { Injectable } from '@angular/core';
import { Quizz } from './quizz';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current = this.getCurrent();

  constructor() {
  }

  setCurrent(q: Quizz) {
    this.current = q;
    this.saveCurrent();
  }

  saveCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  getCurrent(): Quizz {
    const str = localStorage.getItem('current');
    if (!str) {
      return undefined;
    }
    const q = JSON.parse(str);
    Object.setPrototypeOf(q, Quizz.prototype);
    return q;
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.saveCurrent();
  }
}
