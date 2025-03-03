import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/core/tasks/task';
import { TasksService } from 'src/app/core/tasks/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  id = input.required<string>();

  task: Task = { id: '', description: '', isDone: false };

  constructor(private tasksSvc: TasksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Alternative that can be used instead of the input: Read id from Activated Route:
    // const id: string = this.route.snapshot.params['id'];
    this.tasksSvc
      .getTaskById(this.id())
      .subscribe((task) => (this.task = task));
  }
}
