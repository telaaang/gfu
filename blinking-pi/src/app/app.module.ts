import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { LedListComponent } from './led-list/led-list.component';
import { ColorInputComponent } from './color-input/color-input.component';
import { LedService } from 'app/shared/led.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { PiColorPipe } from './shared/pi-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent,
    ColorInputComponent,
    DashboardComponent,
    PageNotFoundComponent,
    DetailComponent,
    PiColorPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
