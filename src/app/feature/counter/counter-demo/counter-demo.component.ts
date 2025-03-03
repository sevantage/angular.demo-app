import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CounterWithSignalsComponent } from '../counter-with-signals/counter-with-signals.component';

@Component({
    selector: 'app-counter-demo',
    templateUrl: './counter-demo.component.html',
    styleUrls: ['./counter-demo.component.scss'],
    imports: [CounterComponent, CounterWithSignalsComponent]
})
export class CounterDemoComponent implements OnInit {
  value = 123;

  constructor() {}

  onCounterChanged(value: number) {
    console.log(value);
  }

  ngOnInit(): void {}
}
