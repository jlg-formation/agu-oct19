import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';
import { Quizz } from 'src/app/quizz';
import { QuizzValidators } from 'src/app/widget/quizz-validators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  nameMaxLength = 40;

  f = new FormGroup({
    name: new FormControl('', [Validators.required, QuizzValidators.maxLength(this.nameMaxLength)])
  });

  constructor(private router: Router, private quizz: QuizzService) { }


  ngOnInit() {
  }

  submit() {
    console.log('submit', this.f.value.name);
    const q = new Quizz();
    q.name = this.f.value.name;
    this.quizz.setCurrent(q);
    this.router.navigateByUrl('/setup');
  }

}
