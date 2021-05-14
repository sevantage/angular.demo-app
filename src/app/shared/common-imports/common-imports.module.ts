import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    RouterModule,
  ]
})
export class CommonImportsModule { }
