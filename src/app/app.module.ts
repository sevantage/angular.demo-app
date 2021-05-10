import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CounterModule } from './feature/counter/counter.module';
import { NotifierModule } from './feature/notifier/notifier.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CounterModule,
    NotifierModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
