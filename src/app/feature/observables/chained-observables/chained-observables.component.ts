import { Component, OnInit } from '@angular/core';
import { from, interval, range } from 'rxjs';
import { concatMap, mergeMap, switchMap } from 'rxjs/operators';
import { TasksService } from 'src/app/core/tasks/tasks.service';

@Component({
  selector: 'app-chained-observables',
  templateUrl: './chained-observables.component.html',
  styleUrls: ['./chained-observables.component.scss'],
})
export class ChainedObservablesComponent implements OnInit {
  constructor(private tasksSvc: TasksService) {}

  ngOnInit(): void {}

  onConcatMap() {
    const higherOrderObs = range(1, 3);
    higherOrderObs
      .pipe(concatMap((i) => this.tasksSvc.getTaskById(i)))
      .subscribe();
  }

  onMergeMap() {
    const higherOrderObs = range(1, 3);
    higherOrderObs
      .pipe(mergeMap((i) => this.tasksSvc.getTaskById(i)))
      .subscribe();
  }

  onSwitchMap() {
    const higherOrderObs = range(1, 3);
    higherOrderObs
      .pipe(switchMap((i) => this.tasksSvc.getTaskById(i)))
      .subscribe();
  }
}
