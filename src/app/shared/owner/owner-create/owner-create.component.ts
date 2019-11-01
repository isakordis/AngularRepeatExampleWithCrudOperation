import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepoService } from './../../services/Repository/repo.service';
import { OwnerForCreation } from "../OwnerForCreation.model";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {
  public ownerForm: FormGroup;
  constructor(public repo: RepoService, public router: Router) { }

  ngOnInit() {

    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.minLength(1)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100), , Validators.minLength(1)])
    });

    console.log("success");
  }
  public validateControl(controlName: string) {
  

    if (this.ownerForm.controls[controlName].invalid && this.ownerForm.controls[controlName].touched) 
      if(controlName==("dateOfBirth")){
        console.log("asdasdasd")
      }
      return true;
    


  }
  public hasError(controlName: string, errorName: string) {
    if (this.ownerForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public executeDatePicker(event) {
    this.ownerForm.patchValue({ 'dateOfBirth': event });
  }

  public createOwner(ownerFormValue) {
    if (this.ownerForm.valid) {
      this.executeDatePicker(ownerFormValue);
    }
  }
  public executeOwnerCreation(ownerFormValue) {
    let owner: OwnerForCreation = {
      name: ownerFormValue.name,
      dateOfBirth: ownerFormValue.dateOfBirth,
      address: ownerFormValue.address
    }

    let apiUrl = 'api/owner';
    this.repo.Create(apiUrl, owner)
      .subscribe(res => {
        console.log(res)
      },
        (error => {
          console.error();

        })
      )
  }

  public redirectToOwnerList() {
    this.router.navigate(['/owner/list']);
  }





}
