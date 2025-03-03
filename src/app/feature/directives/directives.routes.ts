import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';

export const directiveRoutes: Routes = [
  { path: '', component: DirectivesDemoComponent},
];
