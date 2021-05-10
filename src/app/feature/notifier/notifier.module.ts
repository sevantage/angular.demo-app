import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierComponent } from './notifier/notifier.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NotifierComponent],
  imports: [CommonModule, SharedModule],
  exports: [NotifierComponent],
})
export class NotifierModule {}
