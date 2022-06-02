import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleClassDirective } from './toggle-class/toggle-class.directive';



@NgModule({
  declarations: [
    ToggleClassDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleClassDirective,
  ]
})
export class DirectivesModule { }
