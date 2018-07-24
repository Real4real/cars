import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import { My2Component } from './my2/my2.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    My2Component,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
