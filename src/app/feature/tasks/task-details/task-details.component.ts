import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TasksService } from 'src/app/core/tasks/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task = { id: 0, description: '', isDone: false };

  constructor(private tasksSvc: TasksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.tasksSvc.getTaskById(id).subscribe(task => this.task = task);
  }
}
