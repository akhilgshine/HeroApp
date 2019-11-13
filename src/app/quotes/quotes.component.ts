import { Component, OnInit } from '@angular/core';

import {QuotesService} from '../quotes.service';

import {Quotes} from '../quotes';



@Component({

  selector: 'app-quotes',

  templateUrl: './quotes.component.html',

  styleUrls: ['./quotes.component.css']

})

export class QuotesComponent implements OnInit {

  public quote = new Quotes('', '')

  constructor(public quoteService: QuotesService) {}



  ngOnInit() {

    const timerId = setInterval(() =>  this.getQuote(), 5000);

  }

  public getQuote() {

    this.quoteService.getRandomQuote().subscribe((data: Quotes) => {

      this.quote = new Quotes(data.quote, data.author);

      console.log(this.quote);

    });

  }



}
