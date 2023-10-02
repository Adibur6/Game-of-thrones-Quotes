// quote.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Quote {
  sentence: string;
  character: {
    name: string;
  };
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getQuotes(5);
  }

  getQuotes(numberOfQuotes: number): void {
    this.http.get<Quote[]>(`https://api.gameofthronesquotes.xyz/v1/random/${numberOfQuotes}`)
      .subscribe((data) => {
        this.quotes = data;
      });
  }

}
