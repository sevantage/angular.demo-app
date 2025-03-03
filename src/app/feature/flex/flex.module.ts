import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';

import { FlexRoutingModule } from './flex-routing.module';



@NgModule({
    imports: [
    CommonModule,
    FlexRoutingModule,
    FlexDemoComponent,
]
})
export class FlexModule { }
