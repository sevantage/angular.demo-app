import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';

const routes: Routes = [
  { path: '', component: CounterDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterRoutingModule {}
