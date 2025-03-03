import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { NotifierComponent } from './notifier/notifier.component';

export const notifierRoutes: Routes = [
  { path: '', component: NotifierComponent},
];
