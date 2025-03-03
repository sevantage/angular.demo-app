import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

@Component({
  selector: 'app-home',
  template: '<div>Home</div>',
  
})
export class HomeComponent {}

@Component({
  selector: 'app-not-found',
  template: '<div>Not found</div>',
})
export class NotFoundComponent {}

@Component({ template: '<div>Not authorized</div>' })
export class UnauthorizedComponent {}

export const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () =>
      import('./feature/counter/counter.routes').then((m) => m.counterRoutes),
  },
  {
    path: 'notifier',
    loadChildren: () =>
      import('./feature/notifier/notifier.routes').then(
        (m) => m.notifierRoutes
      ),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./feature/tasks/tasks.routes').then((m) => m.tasksRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./feature/pipes/pipes.routes').then((m) => m.pipesRoutes),
  },
  {
    path: 'observables',
    loadChildren: () =>
      import('./feature/observables/observables.routes').then(
        (m) => m.observablesRoutes
      ),
  },
  {
    path: 'flex',
    loadChildren: () =>
      import('./feature/flex/flex.routes').then((m) => m.flexRoutes),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./feature/directives/directives.routes').then(
        (m) => m.directiveRoutes
      ),
  },
  {
    path: 'reactive-forms',
    loadChildren: () =>
      import('./feature/reactive-forms-demo/reactive-forms-demo.routes').then(
        (m) => m.reactiveFormsDemoRoutes
      ),
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
