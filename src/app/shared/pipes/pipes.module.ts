import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoublePipe } from './double/double.pipe';



@NgModule({
  declarations: [
    DoublePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoublePipe
  ]
})
export class PipesModule { }
