import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ChainedObservablesComponent } from './chained-observables/chained-observables.component';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { ScenariosComponent } from './scenarios/scenarios.component';

const routes: Routes = [
  { path: '', component: ObservablesDemoComponent},
  { path: 'chained', component: ChainedObservablesComponent},
  { path: 'scenarios', component: ScenariosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesRoutingModule {}
