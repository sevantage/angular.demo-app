import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksService } from 'src/app/core/tasks/tasks.service';

import { ScenariosComponent } from './scenarios.component';

describe('ScenariosComponent', () => {
  let component: ScenariosComponent;
  let fixture: ComponentFixture<ScenariosComponent>;
  let tasksSvcSpy: any;

  beforeEach(async () => {
    tasksSvcSpy = jasmine.createSpyObj(TasksService, ['getTaskById']);
    await TestBed.configureTestingModule({
    imports: [ScenariosComponent],
    providers: [{ provide: TasksService, useValue: tasksSvcSpy }],
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
