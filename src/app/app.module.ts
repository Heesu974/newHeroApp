import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonPageHeaderComponent } from './common-page-header/common-page-header.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonPageHeaderComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterLink, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
