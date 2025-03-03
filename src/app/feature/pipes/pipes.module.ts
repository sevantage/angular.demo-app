import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';

import { PipesRoutingModule } from './pipes-routing.module';



@NgModule({
    imports: [
    CommonModule,
    PipesRoutingModule,
    PipesComponent,
]
})
export class PipesModule { }
