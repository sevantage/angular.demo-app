import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { firstValueFrom, from, fromEvent, interval, lastValueFrom, Observable, of, Subscription } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-observables-demo',
    templateUrl: './observables-demo.component.html',
    styleUrls: ['./observables-demo.component.scss'],
    imports: [AsyncPipe]
})
export class ObservablesDemoComponent implements OnInit, OnDestroy, AfterViewInit {
  obsInterval$ = interval(1000);
  subscription?: Subscription;
  value: number = -1;
  @ViewChild('search') input!: ElementRef;
  obsInput$!: Observable<string>;

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.obsInput$ = fromEvent(this.input.nativeElement, "keydown")
      .pipe(
        debounceTime(1000), // Wait until no event for a second
        map((ev: any) => <string>(<HTMLInputElement>ev.target)!.value), // Map to value of control
        tap((txt: string) => console.log(txt)), // Do not change the value, just use it to perform a side task
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  subscribe() {
    this.unsubscribe();
    this.subscription = this.obsInterval$.subscribe(x => {
      this.value = x;
      console.log(x);
    }, null, () => console.log("completed"));
  }

  unsubscribe() {
    this.subscription?.unsubscribe();
  }

  private obs = of(1, 2, 3);
  public firstValue$ = firstValueFrom(this.obs);
  public lastValue$ = lastValueFrom(this.obs);
  public promise$ = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved"), 5000);
  });
}
