import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';

const routes: Routes = [
  { path: '', component: FlexDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexRoutingModule {}
