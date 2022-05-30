import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsDemoRoutingModule } from './reactive-forms-demo-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsDemoRoutingModule,
    FlexLayoutModule,
  ]
})
export class ReactiveFormsDemoModule { }
