import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface ItemsResponse {
  develop: any[];
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public datas;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void { // Make the HTTP request:
    this.http.get<ItemsResponse>('./assets/data/data.json', { observe: 'response' })
      .subscribe(
        resp => {
          console.log('성공', resp.body);
          this.datas = resp.body;
        },
        err => { console.log('error' + err.error); }
      );
  }
}
