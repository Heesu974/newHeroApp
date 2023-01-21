import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonPageHeaderComponent } from './common-page-header/common-page-header.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CommonPageHeaderComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterLink],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
