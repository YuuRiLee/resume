import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})


export class MainComponent implements OnInit {
  public data;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<any>('./assets/data/resume.json', { observe: 'response' })
      .subscribe(
        resp => {
          this.data = resp.body;
        },
        err => { console.log('error' + err.error); }
      );
  }
}
