import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusstopComponent } from './busstop/busstop.component';
import { BusStopListComponent } from './bus-stop-list/bus-stop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BusstopComponent,
    BusStopListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
