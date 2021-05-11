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

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(this.env.apiUrl + `/tasks/${id}`);
  }
}
