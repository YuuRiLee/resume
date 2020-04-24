import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void { // Make the HTTP request:
    this.http.get<ItemsResponse>('./assets/data/data.json', { observe: 'response' })
      .subscribe(
        resp => {
          this.datas = resp.body;
        },
        err => { console.log('error' + err.error); }
      );
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }
}
