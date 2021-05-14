import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss']
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
        map((ev: any) => (<HTMLInputElement>ev.target)!.value), // Map to value of control
        tap(txt => console.log(txt)), // Do not change the value, just use it to perform a side task
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

}
