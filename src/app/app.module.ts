import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';
//Se cargan los modulos

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdquirirVuelosComponent } from './adquirir-vuelos/adquirir-vuelos.component';
import { MisVuelosComponent } from './mis-vuelos/mis-vuelos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdquirirVuelosComponent,
    MisVuelosComponent
  ],
  imports: [
    BrowserModule, 
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
