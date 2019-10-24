import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log('submit coucou');
  }

}
