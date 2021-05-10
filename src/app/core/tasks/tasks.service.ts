import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class Task {
  id!: number;
  description!: string;
  isDone!: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  env = environment;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.env.apiUrl + '/tasks');
  }

  /*

<button (click)="onLoadTasks()">Load tasks</button>
<ul>
  <li *ngFor="let task of tasks">{{ task.description }}</li>
</ul>

  */

  /*
  tasks: Task[] = [];

  constructor(private tasksSvc: TasksService) {}

  onLoadTasks() {
    this.tasksSvc.getTasks().subscribe(t => this.tasks = t);
  }
  */
}
