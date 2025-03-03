import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { interval, merge, Subject, Subscription, zip } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Task } from 'src/app/core/tasks/task';
import { TasksService } from 'src/app/core/tasks/tasks.service';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss'],
  imports: [FlexModule],
})
export class ScenariosComponent implements OnInit, OnDestroy {
  reloadSubs?: Subscription;
  changeTrigger = new Subject();

  constructor(private tasksSvc: TasksService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.unsubscribe();
  }

  onZip() {
    this.unsubscribe();
    zip(
      this.tasksSvc.getTaskById(1),
      this.tasksSvc.getTaskById(2),
      this.tasksSvc.getTaskById(3)
    )
      .pipe(tap((x: Task[]) => console.log(x)))
      .subscribe();
  }

  public unsubscribe() {
    this.reloadSubs?.unsubscribe();
    this.reloadSubs = undefined;
  }

  onDependent() {
    this.unsubscribe();
    this.tasksSvc
      .getTasks()
      .pipe(
        tap((tasks: Task[]) => console.log(tasks)),
        switchMap((tasks: Task[]) => this.tasksSvc.getTaskById(tasks[0].id))
      )
      .subscribe((task: Task) => console.log(task));
  }

  onReload() {
    this.unsubscribe();
    this.reloadSubs = merge(interval(2000), this.changeTrigger)
      .pipe(switchMap(() => this.tasksSvc.getTasks()))
      .subscribe();
  }

  onChange() {
    this.changeTrigger.next(undefined);
  }
}
