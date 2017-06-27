import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { WeatherchartComponent } from './weatherchart/weatherchart.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherchartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
