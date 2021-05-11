import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: '', component: PipesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
