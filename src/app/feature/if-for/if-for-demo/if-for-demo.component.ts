import { Component } from '@angular/core';
import { LoggingComponent } from '../logging/logging.component';

export interface Item {
  value: number;
}

@Component({
  selector: 'app-for-demo',
  imports: [LoggingComponent],
  templateUrl: './if-for-demo.component.html',
  styleUrl: './if-for-demo.component.scss',
})
export class ForDemoComponent {
  isVisible = true;
  items: Item[] = [];

  onAssignNewItems() {
    if (!this.items.length)
      this.items = [1, 2, 3, 4, 5].map((x) => ({ value: x }));
    else this.items = this.items.map((x) => ({ value: x.value + 2 }));
  }
}
