import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Owner } from '../owner.model';
import { RepoService } from '../../services/Repository/repo.service';
import {} from 'jquery'


@Component({
  selector: 'app-owner-delete',
  templateUrl: './owner-delete.component.html',
  styleUrls: ['./owner-delete.component.css']
})
export class OwnerDeleteComponent implements OnInit {

  public owner: Owner;
  constructor(private repo: RepoService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {


  }
  private getOwnerById() {
    let ownerId: string = this.activeRouter.snapshot.params['id'];
    let ownerByIdUrl: string = `owner/${ownerId}`;

    this.repo.getData(ownerByIdUrl).subscribe(res => {
      this.owner = res as Owner;
    },
      (error) => {
        console.log(error);
      })
  }


  public redirectToOwnerList() {
    this.router.navigate(['/owner/list']);
  }

  public deleteOwner() {
    let deleteUrl: string = `api/owner/${this.owner.id}`;
    this.repo.Delete(deleteUrl)
      .subscribe(res => {
        console.log('Success');
      },
      (error) => {
        console.log(error);
      })
  }
}
