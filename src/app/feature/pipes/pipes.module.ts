import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesRoutingModule } from './pipes-routing.module';



@NgModule({
  declarations: [
    PipesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipesRoutingModule,
  ]
})
export class PipesModule { }
