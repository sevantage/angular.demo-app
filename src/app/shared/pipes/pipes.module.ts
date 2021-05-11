import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoublePipe } from './double/double.pipe';
import { CommonImportsModule } from '../common-imports/common-imports.module';



@NgModule({
  declarations: [
    DoublePipe
  ],
  imports: [
    CommonModule,
    CommonImportsModule,
  ],
  exports: [
    DoublePipe
  ]
})
export class PipesModule { }
