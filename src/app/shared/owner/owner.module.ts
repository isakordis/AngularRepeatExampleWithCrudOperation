import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { SharedModule } from '../shared.module';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { OwnerDeleteComponent } from './owner-delete/owner-delete.component';
 
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerCreateComponent,
    OwnerUpdateComponent,
    OwnerDeleteComponent
  ]
})
export class OwnerModule { }