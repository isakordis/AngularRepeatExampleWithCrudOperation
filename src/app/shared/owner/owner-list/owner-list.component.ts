import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner.model';
import { RepoService } from 'src/app/shared/services/Repository/repo.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  
  public owner:Owner[];
  constructor( public router:Router,public Repo :RepoService) { }
ownert:Owner[];
 

  ngOnInit() {
    this.getAllOwners();
  }
  getAllOwners(){
    let apiAdress="owner";
    this.Repo.getData(apiAdress).subscribe(res=>{
      this.owner=res as Owner[];
    });
  }
  getOwnerDetails(id){
    let detailsUrl:string = `owner/details/${id}`
    this.router.navigate([detailsUrl]);
    
  }

}
