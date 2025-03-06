import { Component } from '@angular/core';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { FlexModule } from '@angular/flex-layout/flex';
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
    FlexModule,
    ExtendedModule,
    LoggingComponent,
    ToggleClassDirective,
  ],
})
export class DirectivesDemoComponent {
  items: Item[];

  constructor() {
    this.items = [1, 2, 3, 4, 5].map((x) => ({ value: x }));
  }

  onAssignNewItems() {
    this.items = this.items.map((x) => ({ value: x.value + 2 }));
  }
}
