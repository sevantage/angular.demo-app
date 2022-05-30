import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoggingComponent } from './logging/logging.component';



@NgModule({
  declarations: [
    DirectivesDemoComponent,
    LoggingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
