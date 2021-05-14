import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';

const routes: Routes = [
  { path: '', component: ObservablesDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesRoutingModule {}
