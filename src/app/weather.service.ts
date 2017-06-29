import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WeatherService {

  private URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Breda,NL&units=metric&lang=nl&APPID=cf977452681e43b2caca170a492b4657';

  constructor(private http: Http) { }

  doRequest(): Observable<any> {
    return this.http.get(this.URL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body: any;
    body = res.json();

    console.log('response:');
    console.log(body);

    if (body.cod !== '200') {
      console.log('---------------------------');
      this.handleError(Response);
    }

    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

