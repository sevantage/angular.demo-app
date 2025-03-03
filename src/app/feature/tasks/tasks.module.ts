import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksRoutingModule } from './tasks-routing.module';




@NgModule({
    imports: [
    CommonModule,
    TasksRoutingModule,
    TasksListComponent,
    TaskDetailsComponent,
]
})
export class TasksModule { }
