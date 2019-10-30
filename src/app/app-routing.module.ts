import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../app/menu/menu.component';
import { OwnerListComponent } from './shared/owner/owner-list/owner-list.component';
import { OwnerDetailsComponent } from './shared/owner/owner-details/owner-details.component';
import { OwnerCreateComponent } from './shared/owner/owner-create/owner-create.component';
export const routes: Routes = [

  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'owner', component: OwnerListComponent
  },

  { path: 'owner/details/:id', component: OwnerDetailsComponent }
  ,
  {
    path:'owner/create',component:OwnerCreateComponent
  },
  {
    path:'owner/list',component:OwnerListComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
