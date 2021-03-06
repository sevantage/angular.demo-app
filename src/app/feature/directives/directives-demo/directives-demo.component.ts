import { Component, OnInit } from '@angular/core';

export interface Item {
  value: number;
}

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss'],
})
export class DirectivesDemoComponent implements OnInit {
  color = 'red';
  items: Item[];

  constructor() {
    this.items = [1, 2, 3, 4, 5].map(x => ({ value: x }));
  }

  ngOnInit(): void {}

  trackByItem(idx: number, item: Item) {
    return item.value;
  }

  onAssignNewItems() {
    this.items = this.items.map((x) => ({ value: x.value + 2}));
  }
}
