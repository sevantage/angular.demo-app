import { AsyncPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  firstValueFrom,
  fromEvent,
  interval,
  lastValueFrom,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss'],
  imports: [AsyncPipe],
})
export class ObservablesDemoComponent implements OnDestroy, AfterViewInit {
  obsInterval$ = interval(1000);
  subscription?: Subscription;
  value = -1;
  @ViewChild('search') input!: ElementRef;
  obsInput$!: Observable<string>;

  ngAfterViewInit(): void {
    this.obsInput$ = fromEvent(this.input.nativeElement, 'keydown').pipe(
      debounceTime(1000), // Wait until no event for a second
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((ev: any) => (ev.target as HTMLInputElement)!.value as string), // Map to value of control
      tap((txt: string) => console.log(txt)) // Do not change the value, just use it to perform a side task
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  subscribe() {
    this.unsubscribe();
    this.subscription = this.obsInterval$.subscribe(
      (x) => {
        this.value = x;
        console.log(x);
      },
      null,
      () => console.log('completed')
    );
  }

  unsubscribe() {
    this.subscription?.unsubscribe();
  }

  private obs = of(1, 2, 3);
  public firstValue$ = firstValueFrom(this.obs);
  public lastValue$ = lastValueFrom(this.obs);
  public promise$ = new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolved'), 5000);
  });
}
