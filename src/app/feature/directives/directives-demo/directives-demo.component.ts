import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout/flex';
import { NgClass } from '@angular/common';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { LoggingComponent } from '../logging/logging.component';
import { ToggleClassDirective } from '../../../shared/directives/toggle-class/toggle-class.directive';

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
export class DirectivesDemoComponent implements OnInit {
  color = 'red';
  items: Item[];

  constructor() {
    this.items = [1, 2, 3, 4, 5].map((x) => ({ value: x }));
  }

  ngOnInit(): void {}

  onAssignNewItems() {
    this.items = this.items.map((x) => ({ value: x.value + 2 }));
  }
}
