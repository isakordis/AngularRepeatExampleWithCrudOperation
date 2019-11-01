import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner.model';
import { RepoService } from "../../services/Repository/repo.service";
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {} from 'jquery';
@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})

export class OwnerUpdateComponent implements OnInit {
  
  public owner: Owner;
  public ownerForm: FormGroup;
  constructor(private repo: RepoService, private router: Router,
              private activeRouter: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {

    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.minLength(3)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100), , Validators.minLength(3)])
    });

    this.getOwnerById();
  }

  getOwnerById() {
    var ownerId: string = this.activeRouter.snapshot.params['id'];
    var ownerByIdUrl: string = `owner/${ownerId}`;

    this.repo.getData(ownerByIdUrl)
      .subscribe(res => {
        this.owner = res as Owner;
        this.ownerForm.patchValue(this.owner);
        $('#dateOfBirth').val('dd/MM/yyyy');

      },
        (error) => {
          console.log(error);
        })

  }
  public validateControl(controlName: string) {
    if (this.ownerForm.controls[controlName].invalid && this.ownerForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.ownerForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public executeDatePicker(event) {
    this.ownerForm.patchValue({ 'dateOfBirth': event });
  }

  public redirectToOwnerList() {
    this.router.navigate(['/owner/list']);
  }

  public updateOwner(ownerFormValue) {
    if (this.ownerForm.valid) {
      this.executeOwnerUpdate(ownerFormValue);
    }
  }

  private executeOwnerUpdate(ownerFormValue) {

    this.owner.name = ownerFormValue.name;
    this.owner.dateOfBirth = ownerFormValue.dateOfBirth;
    this.owner.address = ownerFormValue.address;

    var apiUrl = `owner/${this.owner.id}`;

    this.repo.Update(apiUrl, this.owner).subscribe(res => {
      console.log(res)
    },(error)=>{
      console.log(error);
    })

  }


}
