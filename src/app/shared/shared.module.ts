import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from './partials/partials.module';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    PartialsModule,
    PipesModule,
  ],
  exports: [
    PartialsModule,
    FormsModule,
    PipesModule,
  ]
})
export class SharedModule { }
