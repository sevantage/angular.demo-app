import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksService } from 'src/app/core/tasks/tasks.service';

import { ChainedObservablesComponent } from './chained-observables.component';

describe('ChainedObservablesComponent', () => {
  let component: ChainedObservablesComponent;
  let fixture: ComponentFixture<ChainedObservablesComponent>;
  let tasksSvcSpy: any;

  beforeEach(async () => {
    tasksSvcSpy = jasmine.createSpyObj(TasksService, ['getTaskById']);
    await TestBed.configureTestingModule({
    imports: [ChainedObservablesComponent],
    providers: [{ provide: TasksService, useValue: tasksSvcSpy }],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainedObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
