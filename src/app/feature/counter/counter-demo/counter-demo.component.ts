import { Component } from '@angular/core';
import { CounterWithSignalsComponent } from '../counter-with-signals/counter-with-signals.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-demo',
  templateUrl: './counter-demo.component.html',
  styleUrls: ['./counter-demo.component.scss'],
  imports: [CounterComponent, CounterWithSignalsComponent],
})
export class CounterDemoComponent {
  value = 123;

  onCounterChanged(value: number) {
    console.log(value);
  }
}
