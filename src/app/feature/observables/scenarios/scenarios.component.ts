import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, merge, Subject, Subscription, zip } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { TasksService } from 'src/app/core/tasks/tasks.service';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss'],
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
      .pipe(tap((x) => console.log(x)))
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
        tap((tasks) => console.log(tasks)),
        switchMap((tasks) => this.tasksSvc.getTaskById(tasks[0].id))
      )
      .subscribe((task) => console.log(task));
  }

  onReload() {
    this.unsubscribe();
    this.reloadSubs = merge(interval(2000), this.changeTrigger)
      .pipe(switchMap(() => this.tasksSvc.getTasks()))
      .subscribe();
  }

  onChange() {
    this.changeTrigger.next();
  }
}
