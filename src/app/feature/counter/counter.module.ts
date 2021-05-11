import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';
import { CounterRoutingModule } from './counter-routing.module';



@NgModule({
  declarations: [
    CounterComponent,
    CounterDemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CounterRoutingModule,
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
