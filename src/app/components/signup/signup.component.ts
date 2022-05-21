import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Countries } from 'src/app/interfaces/countries';
import { MyApisService } from 'src/app/services/my-apis.service';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-name.directive';
import { PasswordValidator } from 'src/app/shared/password.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  selectedValue: string="";
  nationalities:Countries[]=[];
  constructor(private _FormBuilder: FormBuilder, private _MyApisService:MyApisService,_router:Router) {}


   ngOnInit(): void {
    this.getCountries();
  }

//name accept english alpabets only
  userForm = this._FormBuilder.group({
    name: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),forbiddenNameValidator(/[\u0600-\u06FF]/)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8),forbiddenNameValidator(/[\u0600-\u06FF]/)]],
    confirmPassword: ['',[Validators.required]],
    nationality: ['',[Validators.required]]
  },{Validator:PasswordValidator});
 ////////////////////////////////////////////////
  onSubmit() {
   console.log('form data is ', this.userForm.value);
   // this.router.navigateByUrl('/');
  }
///////////////////////////////////////////////////
  getCountries(){
    this._MyApisService.getAllCountries().subscribe(
      (country)=>{this.nationalities=country
      console.log(country);
      }
      ,
      (e)=>{console.log(e.error.data);
      },
      ()=>{
        
      }

    );
  }
  /////////////////////////////////////////////////////////////
  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get nationality() { return this.userForm.get('nationality'); }
}
