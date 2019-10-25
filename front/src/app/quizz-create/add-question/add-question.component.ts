import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';
import { Question } from 'src/app/question';
import { QuizzValidators } from 'src/app/widget/quizz-validators';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    label: new FormControl('Quelle est la capitale de la Belgique ?', [Validators.required, QuizzValidators.maxLength(200)]),
    answerA: new FormControl('Paris', [Validators.required, QuizzValidators.maxLength(100)]),
    answerB: new FormControl('Bruxelles', [Validators.required, QuizzValidators.maxLength(100)]),
    answerC: new FormControl('Rome', [Validators.required, QuizzValidators.maxLength(100)]),
    answerD: new FormControl('Bucarest', [Validators.required, QuizzValidators.maxLength(100)]),
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
