import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';
import { Question } from 'src/app/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    label: new FormControl('Quelle est la capitale de la Belgique ?', Validators.required),
    answerA: new FormControl('Paris', Validators.required),
    answerB: new FormControl('Bruxelles', Validators.required),
    answerC: new FormControl('Rome', Validators.required),
    answerD: new FormControl('Bucarest', Validators.required),
    correctAnswer: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private quizz: QuizzService) { }

  ngOnInit() {
  }

  submit() {
    this.quizz.addQuestion(this.f.value as Question);
    this.router.navigateByUrl('/setup');
  }

}
