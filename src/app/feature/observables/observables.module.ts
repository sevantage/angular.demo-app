import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ChainedObservablesComponent } from './chained-observables/chained-observables.component';
import { ScenariosComponent } from './scenarios/scenarios.component';



@NgModule({
    imports: [
    CommonModule,
    ObservablesRoutingModule,
    ObservablesDemoComponent,
    ChainedObservablesComponent,
    ScenariosComponent,
]
})
export class ObservablesModule { }
