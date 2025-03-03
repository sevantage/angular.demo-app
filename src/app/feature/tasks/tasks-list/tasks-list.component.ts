import { Component, OnInit } from '@angular/core';
import { Task, TasksService } from 'src/app/core/tasks/tasks.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss'],
    imports: [RouterLink]
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksSvc: TasksService) { }

  ngOnInit(): void {
    this.tasksSvc.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
