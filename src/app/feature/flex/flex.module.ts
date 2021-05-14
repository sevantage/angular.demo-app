import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexRoutingModule } from './flex-routing.module';



@NgModule({
  declarations: [
    FlexDemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexRoutingModule,
  ]
})
export class FlexModule { }
