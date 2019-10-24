import { Injectable } from '@angular/core';
import { Quizz } from './quizz';
import { Question } from './question';
import { Store } from './store';
import { ScoreProgress } from './score-progress';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {



  current = this.getCurrent();
  store = this.getStore();
  scoreProgress = this.getScoreProgress();

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


  saveStore() {
    localStorage.setItem('store', JSON.stringify(this.store));
  }

  getStore(): Store {
    const str = localStorage.getItem('store');
    if (!str) {
      return {};
    }
    const store = JSON.parse(str);
    for (const quizz of Object.values(store)) {
      Object.setPrototypeOf(quizz, Quizz.prototype);
    }
    return store;
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.saveCurrent();
  }

  addQuizz() {
    this.store[this.current.name] = this.current;
    this.saveStore();
  }

  hasQuizz(): boolean {
    return Object.keys(this.store).length > 0;
  }

  getStoreAsArray(): Quizz[] {
    return Object.values(this.store);
  }

  initScoreProgress() {
    this.scoreProgress = {
      score: 0,
      questionIndex: 0,
    };
    this.saveScoreProgress();
  }

  saveScoreProgress() {
    localStorage.setItem('progress', JSON.stringify(this.scoreProgress));
  }

  getScoreProgress(): ScoreProgress {
    const str = localStorage.getItem('progress');
    if (!str) {
      return undefined;
    }
    return JSON.parse(str);
  }
}
