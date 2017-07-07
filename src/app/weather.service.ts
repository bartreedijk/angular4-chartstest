import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class WeatherService {

  // de stad en het land waarvan de weersvoorspelling opgehaald moet worden. Standaard is dit Breda, NL.
  private City = 'Breda';
  private CountryCode = 'NL';

  // de API key die verkregen wordt door een account aan te maken op openweathermap.org
  private appid = 'cf977452681e43b2caca170a492b4657';

  // de URL van openweathermap (de rest wordt later bijgevoegd).
  private prefixURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  constructor(private http: Http) {
  }

  // de request methode. hierin wordt een HTTP GET request gedaan. Als input kan een alternatieve stad binnen NL gekozen worden.
  doRequest(city: string): Observable<any> {
    // In eerste instantie niet nodig, maar handig als er van een andere stad de weersvoorspelling opgehaald moet worden.
    if (!(city === '')) {
      console.log('Request on: ' + city);
      this.City = city;
    }

    // de HTTP GET request methode zelf van de @angular/http library.
    return this.http.get(
      this.prefixURL + this.City + ',' + this.CountryCode + '&units=metric&lang=nl&APPID=' + this.appid)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // de verwerking van de ontvangen data n.a.v. de HTTP GET request.
  private extractData(res: Response) {
    let body: any;
    body = res.json();

    console.log('response:');
    console.log(body);

    // dit is een extra error-afhandeling op basis van een JSON-object.
    // De body.cod is een number die openweathermap meegeeft als HTTP response code.
    if (body.cod !== '200') {
      console.log('---------------------------');
      this.handleError(Response);
    }

    return body || {};
  }

  // handel alle problemen af, handig voor debugging. Methode is te vinden bij Tour of Heroes van angular.io
  private handleError(error: Response | any) {
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

