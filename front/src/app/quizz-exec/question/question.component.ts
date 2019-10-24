import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, public quizz: QuizzService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params: ', params);
      this.id = +params.id - 1;
    });
  }

}
