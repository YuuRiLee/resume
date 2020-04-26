import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public backFlag: boolean;
  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (!this.backFlag) {
        this.backFlag = event.url && event.url.indexOf('detail') !== -1 ? true : false;
      }
    });
  }

  back(): void {
    this.backFlag = false;
    this.location.back();
  }
}
