import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () =>
      import('./feature/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'notifier',
    loadChildren: () =>
      import('./feature/notifier/notifier.module').then((m) => m.NotifierModule),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./feature/tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./feature/pipes/pipes.module').then((m) => m.PipesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
