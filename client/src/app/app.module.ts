import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
