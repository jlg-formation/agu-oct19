import { Injectable } from '@angular/core';
import { QuizzService } from './quizz.service';
import { HttpClient } from '@angular/common/http';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class HttpQuizzService extends QuizzService {

  constructor(private http: HttpClient) {
    super();
    console.log('http service');
    this.http.get<Store>('http://localhost:8000/ws/quizz')
      .subscribe(store => {
        console.log('store: ', store);
        this.store = store;
        this.saveStore();
      }, err => console.error('http get error', err));
  }

  addQuizz() {
    super.addQuizz();
    this.http.post('http://localhost:8000/ws/quizz', this.store)
      .subscribe(
        () => console.log('store pushed with success'),
        err => console.error('http post error', err)
      );
  }
}
