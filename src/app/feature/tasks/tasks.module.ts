import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TasksListComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule,
  ]
})
export class TasksModule { }
