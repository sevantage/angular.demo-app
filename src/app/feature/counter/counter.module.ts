import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterDemoComponent } from './counter-demo/counter-demo.component';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterWithSignalsComponent } from './counter-with-signals/counter-with-signals.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
    imports: [CommonModule, CounterRoutingModule, CounterComponent,
    CounterDemoComponent,
    CounterWithSignalsComponent],
    exports: [CounterComponent],
})
export class CounterModule {}
