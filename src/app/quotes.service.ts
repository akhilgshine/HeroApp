import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(public http: HttpClient) { }


  public getRandomQuote() {

    return this.http.get('http://quotes.stormconsultancy.co.uk/random.json');

    $interval( 5000);

  }
}
