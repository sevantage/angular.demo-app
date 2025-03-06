import { Component } from '@angular/core';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { FlexModule } from '@angular/flex-layout/flex';
import { ToggleClassDirective } from '../../../shared/directives/toggle-class/toggle-class.directive';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss'],
  imports: [FlexModule, ExtendedModule, ToggleClassDirective],
})
export class DirectivesDemoComponent {}
