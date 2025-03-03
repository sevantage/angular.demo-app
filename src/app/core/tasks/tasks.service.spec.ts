import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Task } from './task';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj(HttpClient, ['get']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy,
        },
      ],
    });
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tasks', (doneFn: DoneFn) => {
    const tasks: Task[] = [];
    httpClientSpy.get.and.returnValue(of(tasks));
    const actual = service.getTasks();
    actual.subscribe((actualTasks) => {
      expect(actualTasks).toBe(tasks);
      doneFn();
    });
  });
});
