import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObservablesRoutingModule } from './observables-routing.module';



@NgModule({
  declarations: [
    ObservablesDemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ObservablesRoutingModule,
  ]
})
export class ObservablesModule { }
