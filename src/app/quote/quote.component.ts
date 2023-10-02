import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getQuotes(5); // You can set the initial number of quotes here
  }

  getQuotes(numberOfQuotes: number): void {
    this.http.get<any[]>(`https://api.gameofthronesquotes.xyz/v1/random/${numberOfQuotes}`)
      .subscribe((data) => {
        this.quotes = data.map(item => item.sentence);
      });
  }
}
