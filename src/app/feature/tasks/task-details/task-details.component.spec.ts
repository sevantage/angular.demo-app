import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TasksService } from 'src/app/core/tasks/tasks.service';

import { TaskDetailsComponent } from './task-details.component';

describe('TaskDetailsComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let tasksSvcSpy: any;

  beforeEach(async () => {
    tasksSvcSpy = jasmine.createSpyObj(TasksService, ['getTaskById']);
    tasksSvcSpy.getTaskById.and.returnValue(
      of({ id: 123, description: '', isDone: false })
    );
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule, TaskDetailsComponent],
    providers: [
        { provide: TasksService, useValue: tasksSvcSpy },
        {
            provide: ActivatedRoute,
            useValue: {
                snapshot: {
                    params: {
                        id: 123,
                    },
                },
            },
        },
    ],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsComponent);
    fixture.componentRef.setInput("id", "123")
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
