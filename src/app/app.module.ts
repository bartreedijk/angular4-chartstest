import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

// de imports van de WeatherService, de WeatherChartComponent en de NgxChartsModule
import { WeatherService } from './weather.service';
import { WeatherchartComponent } from './weatherchart/weatherchart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    // de declaratie van de WeatherChartComponent
    WeatherchartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // de import van de NgxChartsModule binnen NgModule
    NgxChartsModule,
    HttpModule
  ],
  // het aangeven van de WeatherService als een provider
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
