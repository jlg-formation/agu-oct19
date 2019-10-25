import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  @Input() duration: number;

  constructor() { }

  ngOnInit() {
  }

}
