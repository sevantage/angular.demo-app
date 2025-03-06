import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss'],
})
export class LoggingComponent implements OnInit, OnDestroy {
  @Input({required: true}) value = '';

  ngOnInit(): void {
    console.log(this.value, 'init');
  }

  ngOnDestroy(): void {
    console.log(this.value, 'destroy');
  }
}
