import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EnviromentURLService } from './shared/services/enviroment-url.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { OwnerDetailsComponent } from "./shared/owner/owner-details/owner-details.component";
import { OwnerCreateComponent } from './shared/owner/owner-create/owner-create.component';
import { OwnerUpdateComponent } from './shared/owner/owner-update/owner-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { OwnerListComponent } from './shared/owner/owner-list/owner-list.component';
import { OwnerDeleteComponent } from './shared/owner/owner-delete/owner-delete.component';

@NgModule({
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,// Httpclientmodule bunun sayesinde ortadan kalkmıstır.
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerCreateComponent,
    OwnerUpdateComponent,
    OwnerDeleteComponent
  ],

  providers: [EnviromentURLService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
