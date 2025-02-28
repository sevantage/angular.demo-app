import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

@Component({
  selector: 'app-home',
  template: '<div>Home</div>',
  standalone: false,
})
export class HomeComponent {}

@Component({
  selector: 'app-not-found',
  template: '<div>Not found</div>',
  standalone: false,
})
export class NotFoundComponent {}

@Component({
  template: '<div>Not authorized</div>',
  standalone: false,
})
export class UnauthorizedComponent {}

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () =>
      import('./feature/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'notifier',
    loadChildren: () =>
      import('./feature/notifier/notifier.module').then(
        (m) => m.NotifierModule
      ),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./feature/tasks/tasks.module').then((m) => m.TasksModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./feature/pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'observables',
    loadChildren: () =>
      import('./feature/observables/observables.module').then(
        (m) => m.ObservablesModule
      ),
  },
  {
    path: 'flex',
    loadChildren: () =>
      import('./feature/flex/flex.module').then((m) => m.FlexModule),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./feature/directives/directives.module').then(
        (m) => m.DirectivesModule
      ),
  },
  {
    path: 'reactive-forms',
    loadChildren: () =>
      import('./feature/reactive-forms-demo/reactive-forms-demo.module').then(
        (m) => m.ReactiveFormsDemoModule
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

@NgModule({
  declarations: [NotFoundComponent, UnauthorizedComponent],
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
