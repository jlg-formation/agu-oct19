import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  id: number;
  f = new FormGroup({
    givenAnswer: new FormControl('', Validators.required),
  });
  constructor(
    private route: ActivatedRoute,
    public quizz: QuizzService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params: ', params);
      this.id = +params.id - 1;
    });
  }

  submit() {
    console.log('submit');
    const givenAnswer = this.f.value.givenAnswer;
    const correctAnswer = this.quizz.current.questions[this.quizz.scoreProgress.questionIndex]
      .correctAnswer;
    if (givenAnswer === correctAnswer) {
      this.quizz.scoreProgress.score++;
    }
    this.quizz.scoreProgress.questionIndex++;
    this.quizz.saveScoreProgress();
    const noMoreQuestion = this.quizz.current.questions.length <= this.quizz.scoreProgress.questionIndex;
    if (noMoreQuestion) {
      this.router.navigateByUrl('/score');
      return;
    }
    this.f.reset();
    this.router.navigateByUrl('/question/' + (this.quizz.scoreProgress.questionIndex + 1));
  }

}
