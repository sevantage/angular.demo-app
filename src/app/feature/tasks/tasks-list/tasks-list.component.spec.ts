import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TasksService } from 'src/app/core/tasks/tasks.service';

import { TasksListComponent } from './tasks-list.component';

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let tasksSvcSpy: any;

  beforeEach(async () => {
    tasksSvcSpy = jasmine.createSpyObj(TasksService, ['getTasks']);
    tasksSvcSpy.getTasks.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      imports: [TasksListComponent],
      providers: [{ provide: TasksService, useValue: tasksSvcSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
