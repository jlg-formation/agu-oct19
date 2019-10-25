import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, map, take } from 'rxjs/operators';


@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  @Input() duration: number;

  @Output() dringdring = new EventEmitter<string>();

  counter: number;
  constructor() { }

  ngOnInit() {
    interval(1000).pipe(
      map(x => x + 1),
      startWith(0),
      take(this.duration + 1),
      map(x => this.duration - x),
    ).subscribe(x => {
      this.counter = x;
      if (x === 0) {
        this.dringdring.emit('dringdringdrangdrang !!!')
      }
    });
  }

}
