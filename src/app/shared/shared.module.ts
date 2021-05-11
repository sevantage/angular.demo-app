import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from './partials/partials.module';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from './common-imports/common-imports.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonImportsModule,
    FormsModule,
    PartialsModule,
    PipesModule,
  ],
  exports: [
    CommonImportsModule,
    PartialsModule,
    FormsModule,
    PipesModule,
  ]
})
export class SharedModule { }
