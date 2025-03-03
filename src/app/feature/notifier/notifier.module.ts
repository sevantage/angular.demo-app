import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierComponent } from './notifier/notifier.component';
import { FormsModule } from '@angular/forms';

import { NotifierRoutingModule } from './notifier-routing.module';

@NgModule({
    imports: [CommonModule, NotifierRoutingModule, NotifierComponent],
})
export class NotifierModule {}
