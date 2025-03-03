import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  env = environment;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.env.apiUrl + '/tasks');
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(this.env.apiUrl + `/tasks/${id}`);
  }

  search(searchTerm: string): Observable<Task[]> {
    // Filters on client
    return this.getTasks().pipe(
      map((tasks) =>
        tasks.filter((t) =>
          t.description.toLocaleLowerCase().includes(searchTerm)
        )
      )
    );
  }
}
