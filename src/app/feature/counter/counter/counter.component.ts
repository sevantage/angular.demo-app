import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() value: number = 0;
  @Output() increased = new EventEmitter<number>();
  @Output() decreased = new EventEmitter<number>();
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrease() {
    this.value += 1;
    this.increased.next(this.value);
    this.valueChange.next(this.value);
  }

  onDecrease() {
    this.value -= 1;
    this.decreased.next(this.value);
    this.valueChange.next(this.value);
  }

  /*
  value = 123;

  onCounterChanged(value: number) {
    console.log(value);
  }
  */
}
