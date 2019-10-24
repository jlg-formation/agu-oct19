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
    this.http.get<Store>('http://localhost:8000/ws/quizz').subscribe({
      next: data => {
        console.log('data: ', data);
      },
      error: err => console.error('http get error', err)
    });
  }
}
