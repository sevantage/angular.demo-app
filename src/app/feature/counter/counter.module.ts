import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterWithSignalsComponent } from './counter-with-signals/counter-with-signals.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent,
    CounterDemoComponent,
    CounterWithSignalsComponent,
  ],
  imports: [CommonModule, SharedModule, CounterRoutingModule],
  exports: [CounterComponent],
})
export class CounterModule {}
