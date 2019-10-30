import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RepoService } from '../../services/Repository/repo.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

  public owner:Owner;
  constructor(private router:Router,private activeRoute:ActivatedRoute,private repo:RepoService) { }

  ngOnInit() {
    this.getOwnerDetails();
  }
  getOwnerDetails(){
    let id:string=this.activeRoute.snapshot.params['id'];
    let apiUrl:string=`api/owner/${id}/account`;
    this.repo.getData(apiUrl).subscribe(res=>{
      this.owner=res as Owner
    },(error)=>{
      console.log(error);
    })
  }

}
