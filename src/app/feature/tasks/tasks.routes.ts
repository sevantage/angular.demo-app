import { Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

export const tasksRoutes: Routes = [
  { path: ':id', component: TaskDetailsComponent },
  { path: '', component: TasksListComponent },
];
