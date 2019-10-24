import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current: Quizz;

  constructor() { }

  setCurrent(q: Quizz) {
    this.current = q;
    localStorage.setItem('current', JSON.stringify(q));
  }
}
