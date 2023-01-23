import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import {WireCuttingComponent} from "./components/wire-cutting/wire-cutting.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {AditionalServicesComponent} from "./components/aditional-services/aditional-services.component";
import {MatCarouselModule} from "ng-mat-carousel";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    WireCuttingComponent,
    AboutUsComponent,
    ContactUsComponent,
    AditionalServicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
