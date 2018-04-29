import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import 'rxjs/add/observable/of';

@Injectable()
export class LedService {

  private readonly BASE_URL = 'http://192.168.50.32/api';

  constructor(private http: Http) { }

  /**
   * Returns a list of color strings.
   */
  getColors(): Observable<string[]> {
    return this.http.get(`${this.BASE_URL}/colors`)
      .do(res => console.debug(res))
      .map(res => res.json());
  }

  /**
   * Returns the color of the index.
   * @param index
   */
  getColor(index: number): Observable<string> {
    // Die REST-Api kann keine color zu einem index zurückgeben, daher hard coded.
    return Observable.of('goldenrod');
  }

  /**
   * @param color
   */
  setColor(color: string): Observable<string> {
    return this.http.put(`${this.BASE_URL}/colors`, { color })
    .do(res => console.debug(res))
    .map(res => res.text());
  }

}
