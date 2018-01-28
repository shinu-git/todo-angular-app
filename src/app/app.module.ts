import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CreateComponent } from './create/create.component';
import { AppRouter } from './app.router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRouter
   
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
