import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
  { path: ':id', component: TaskDetailsComponent  },
  { path: '', component: TasksListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
