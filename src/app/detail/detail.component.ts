import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public datas;

  private id: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('./assets/data/detail.json', { observe: 'response' })
      .subscribe(
        resp => {
          this.datas = resp.body[this.id];
        },
        err => { console.log('error' + err.error); }
      );
  }
}
