import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { FlexModule } from '@angular/flex-layout/flex';
import { FormsModule } from '@angular/forms';
import { ToggleClassDirective } from '../../../shared/directives/toggle-class/toggle-class.directive';
import { LoggingComponent } from '../logging/logging.component';

export interface Item {
  value: number;
}

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss'],
  imports: [
    FormsModule,
    FlexModule,
    NgClass,
    ExtendedModule,
    LoggingComponent,
    ToggleClassDirective,
  ],
})
export class DirectivesDemoComponent {
  color = 'red';
  items: Item[];

  constructor() {
    this.items = [1, 2, 3, 4, 5].map((x) => ({ value: x }));
  }

  onAssignNewItems() {
    this.items = this.items.map((x) => ({ value: x.value + 2 }));
  }
}
