import { Component, computed, model, output } from '@angular/core';

@Component({
    selector: 'app-counter-with-signals',
    templateUrl: './counter-with-signals.component.html',
    styleUrl: './counter-with-signals.component.scss',
})
export class CounterWithSignalsComponent {
  value = model(0);
  // Zusätzliche Events
  increased = output<number>();
  decreased = output<number>();
  // Computed value
  computedValue = computed(() => this.value() * 2);

  constructor() {}

  ngOnInit(): void {}

  onIncrease() {
    this.value.update((oldValue) => oldValue + 1);
    this.increased.emit(this.value());
  }

  onDecrease() {
    this.value.update((oldValue) => oldValue - 1);
    this.decreased.emit(this.value());
  }
}
