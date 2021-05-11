import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './block/block.component';
import { CommonImportsModule } from '../common-imports/common-imports.module';



@NgModule({
  declarations: [
    BlockComponent,
  ],
  imports: [
    CommonModule,
    CommonImportsModule,
  ],
  exports: [
    BlockComponent,
  ]
})
export class PartialsModule { }
