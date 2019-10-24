import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EnviromentURLService } from './shared/services/enviroment-url.service';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,// Httpclientmodule bunun sayesinde ortadan kalkmıstır.
  ],
  providers: [EnviromentURLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
