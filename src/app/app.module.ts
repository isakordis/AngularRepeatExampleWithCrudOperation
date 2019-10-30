import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EnviromentURLService } from './shared/services/enviroment-url.service';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { OwnerListComponent } from "../app/shared/owner/owner-list/owner-list.component";
import { OwnerDetailsComponent } from "./shared/owner/owner-details/owner-details.component";
import { OwnerCreateComponent } from './shared/owner/owner-create/owner-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OwnerDetailsComponent,
    OwnerListComponent,
    OwnerCreateComponent
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
