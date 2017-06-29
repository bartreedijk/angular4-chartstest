import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weatherchart',
  templateUrl: './weatherchart.component.html',
  styleUrls: ['./weatherchart.component.css'],
  providers: [WeatherService]
})
export class WeatherchartComponent implements OnInit {
  errorMessage: string;

  multi: any[] = [
    {
      'name': '',
      'series': []
    }];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Temperature';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private weatherService: WeatherService) {
  }

  onSelect(event) {
    console.log(event);
  }

  onUpdate() {

  }

  ngOnInit() {
    this.weatherService.doRequest()
      .subscribe(
        data => {
          console.log('after subscribe:');
          console.log(data.list);
          this.multi[0].name = data.city.name;
          for (let v = 0; v < data.list.length; v++) {
            this.multi[0].series[v] = {
              name: data.list[v].dt_txt,
              value: data.list[v].main.temp
            };
          }
          console.log(this.multi);
        },
        error =>  this.errorMessage = <any>error,
      );
  }

}

 /*
[
  {
  'name': 'Temperature',
  'series': [
      {
        'name': '2017-06-28 15:00:00',
        'value': 18.52
      },
      {
        'name': '2017-06-28 18:00:00',
        'value': 18.53
      },
      {
        'name': '2017-06-28 21:00:00',
        'value': 18.13
      },
      {
        'name': '2017-06-29 00:00:00',
        'value': 17.19
      },
      {
        'name': '2017-06-29 03:00:00',
        'value': 15.25
      },
      {
        'name': '2017-06-29 06:00:00',
        'value': 16.58
      },
      {
        'name': '2017-06-29 09:00:00',
        'value': 19.62
      },
      {
        'name': '2017-06-29 12:00:00',
        'value': 21.23
      },
      {
        'name': '2017-06-29 15:00:00',
        'value': 21.9
      },
      {
        'name': '2017-06-29 18:00:00',
        'value': 20.93
      },
      {
        'name': '2017-06-29 21:00:00',
        'value': 18.84
      },
      {
        'name': '2017-06-30 00:00:00',
        'value': 17.81
      },
      {
        'name': '2017-06-30 03:00:00',
        'value': 17.13
      },
      {
        'name': '2017-06-30 06:00:00',
        'value': 17.3
      },
      {
        'name': '2017-06-30 09:00:00',
        'value': 19.11
      },
      {
        'name': '2017-06-30 12:00:00',
        'value': 19.47
      },
      {
        'name': '2017-06-30 15:00:00',
        'value': 19.39
      },
      {
        'name': '2017-06-30 18:00:00',
        'value': 19.35
      },
      {
        'name': '2017-06-30 21:00:00',
        'value': 17.81
      },
      {
        'name': '2017-07-01 00:00:00',
        'value': 15.33
      },
      {
        'name': '2017-07-01 03:00:00',
        'value': 13.92
      },
      {
        'name': '2017-07-01 06:00:00',
        'value': 13.53
      },
      {
        'name': '2017-07-01 09:00:00',
        'value': 13.63
      },
      {
        'name': '2017-07-01 12:00:00',
        'value': 13.83
      },
      {
        'name': '2017-07-01 15:00:00',
        'value': 15.25
      },
      {
        'name': '2017-07-01 18:00:00',
        'value': 14.93
      },
      {
        'name': '2017-07-01 21:00:00',
        'value': 11.9
      },
      {
        'name': '2017-07-02 00:00:00',
        'value': 11.58
      },
      {
        'name': '2017-07-02 03:00:00',
        'value': 13.42
      },
      {
        'name': '2017-07-02 06:00:00',
        'value': 16.53
      },
      {
        'name': '2017-07-02 09:00:00',
        'value': 17.01
      },
      {
        'name': '2017-07-02 12:00:00',
        'value': 17.11
      },
      {
        'name': '2017-07-02 15:00:00',
        'value': 17.7
      },
      {
        'name': '2017-07-02 18:00:00',
        'value': 16.97
      },
      {
        'name': '2017-07-02 21:00:00',
        'value': 13.15
      },
      {
        'name': '2017-07-03 00:00:00',
        'value': 10.99
      },
      {
        'name': '2017-07-03 03:00:00',
        'value': 11.97
      },
      {
        'name': '2017-07-03 06:00:00',
        'value': 15.58
      },
      {
        'name': '2017-07-03 09:00:00',
        'value': 19.04
      },
      {
        'name': '2017-07-03 12:00:00',
        'value': 20.05
      }
    ]
  }
]
*/
