import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { range } from 'rxjs';
import { concatMap, mergeMap, switchMap } from 'rxjs/operators';
import { TasksService } from 'src/app/core/tasks/tasks.service';

@Component({
  selector: 'app-chained-observables',
  templateUrl: './chained-observables.component.html',
  styleUrls: ['./chained-observables.component.scss'],
  imports: [FlexModule],
})
export class ChainedObservablesComponent {
  constructor(private tasksSvc: TasksService) {}

  onConcatMap() {
    const higherOrderObs = range(1, 3);
    higherOrderObs
      .pipe(concatMap((i) => this.tasksSvc.getTaskById(i.toFixed(0))))
      .subscribe();
  }

  onMergeMap() {
    const higherOrderObs = range(1, 3);
    higherOrderObs
      .pipe(mergeMap((i) => this.tasksSvc.getTaskById(i.toFixed(0))))
      .subscribe();
  }

  onSwitchMap() {
    const higherOrderObs = range(1, 3);
    higherOrderObs
      .pipe(switchMap((i) => this.tasksSvc.getTaskById(i.toFixed(0))))
      .subscribe();
  }
}
