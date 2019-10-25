import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-max-length',
  templateUrl: './show-max-length.component.html',
  styleUrls: ['./show-max-length.component.scss']
})
export class ShowMaxLengthComponent implements OnInit {

  @Input() max: number;
  @Input() length: number;

  constructor() { }

  ngOnInit() {
    console.log('max', this.max);
  }

}
