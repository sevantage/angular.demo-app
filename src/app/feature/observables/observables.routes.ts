import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ChainedObservablesComponent } from './chained-observables/chained-observables.component';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { ScenariosComponent } from './scenarios/scenarios.component';

export const observablesRoutes: Routes = [
  { path: '', component: ObservablesDemoComponent},
  { path: 'chained', component: ChainedObservablesComponent},
  { path: 'scenarios', component: ScenariosComponent},
];
