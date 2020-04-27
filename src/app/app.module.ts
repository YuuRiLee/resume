import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PipesModule } from './pipes/pipes.module';
import { Router, Event, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PortfolioComponent,
    DetailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter((e: Event): e is Scroll => e instanceof Scroll)
    ).subscribe(e => {
      if (e.position) {
        // backward navigation
        setTimeout(() => {
          viewportScroller.scrollToPosition(e.position);
        }, 100);
        viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        // anchor navigation
        viewportScroller.scrollToAnchor(e.anchor);
      } else {
        // forward navigation
        // viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
