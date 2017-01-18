import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InnerPageComponent } from './inner-page/inner-page.component';
import { HeaderComponent } from './home/header.component';
import { FooterComponent } from './home/footer.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './routers/app-routing.module';

import { InnerOneComponent } from './inner-page/inner-one.component';
import { InnerTwoComponent } from './inner-page/inner-two.component';
import { InnerThreeComponent } from './inner-page/inner-three.component';
import { InnerFourComponent } from './inner-page/inner-four.component';
import { InnerFiveComponent } from './inner-page/inner-five.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './inner-page/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InnerPageComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    InnerOneComponent,
    InnerTwoComponent,
    InnerThreeComponent,
    InnerFourComponent,
    InnerFiveComponent,
    PageNotFoundComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
