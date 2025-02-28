import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter-demo',
    templateUrl: './counter-demo.component.html',
    styleUrls: ['./counter-demo.component.scss'],
    standalone: false
})
export class CounterDemoComponent implements OnInit {
  value = 123;

  constructor() {}

  onCounterChanged(value: number) {
    console.log(value);
  }

  ngOnInit(): void {}
}
