import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObservablesRoutingModule } from './observables-routing.module';
import { ChainedObservablesComponent } from './chained-observables/chained-observables.component';
import { ScenariosComponent } from './scenarios/scenarios.component';



@NgModule({
  declarations: [
    ObservablesDemoComponent,
    ChainedObservablesComponent,
    ScenariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ObservablesRoutingModule,
  ]
})
export class ObservablesModule { }
