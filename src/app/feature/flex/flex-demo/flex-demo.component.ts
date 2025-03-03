import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
  selector: 'app-flex-demo',
  templateUrl: './flex-demo.component.html',
  styleUrls: ['./flex-demo.component.scss'],
  imports: [FlexModule],
})
export class FlexDemoComponent {
  colors = ['red', 'green', 'blue', 'yellow', 'pink', 'silver', 'black'];
}
