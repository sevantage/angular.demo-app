import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-demo',
  templateUrl: './flex-demo.component.html',
  styleUrls: ['./flex-demo.component.scss']
})
export class FlexDemoComponent implements OnInit {
  colors = ['red', 'green', 'blue', 'yellow', 'pink', 'silver', 'black'];

  constructor() { }

  ngOnInit(): void {
  }

}
