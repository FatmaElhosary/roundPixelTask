import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Countries } from 'src/app/interfaces/countries';
import { MyApisService } from 'src/app/services/my-apis.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { identityRevealedValidator } from 'src/app/shared/cross-validators-password.service';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-name.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  defaultCountry: string = '';
  userIp: string = '';
  nationalities: Countries[] = [];
   subscription: any;
  constructor(
    private _FormBuilder: FormBuilder,
    private _MyApisService: MyApisService,
    private _router: Router,
    private _SharedDataService:SharedDataService
  ) {}

  ngOnInit(): void {
    this.getCountries();
    this.getUserIp();
    this.getUsergeolocation();
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  //name accept english alpabets only
  userForm = this._FormBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]*$'),
          forbiddenNameValidator(/[\u0600-\u06FF]/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          forbiddenNameValidator(/[\u0600-\u06FF]/),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
    },
    { validators: identityRevealedValidator }
  );
  ////////////////////////////////////////////////
  ///handling errors///////////////
  getEmailErrorMessage() {
    let errMse = '';
    if (this.email?.hasError('required')) {
      errMse = 'You must enter a value';
    }
    if (this.email?.hasError('email')) {
      errMse = 'Not a valid email';
    }

    return errMse;
  }
  getNameErrorMessage() {
    let errMse = '';
    if (this.name?.hasError('required')) {
      errMse = 'You must enter a name';
    }
    if (this.name?.hasError('pattern')) {
      errMse = 'you must enter English char and no special characters allowed';
    }
    if (this.name?.hasError('forbiddenNameValidator')) {
      errMse = 'you must enter English char';
    }
    return errMse;
  }
  getPasswordErrorMessage() {
    let errMse = '';
    if (this.password?.hasError('required')) {
      errMse = 'You must enter a password';
    }
    if (this.password?.hasError('minLength')) {
      errMse = 'Password Length >= 8';
    }
    if (this.password?.hasError('containArabic')) {
      errMse = 'No Arabic Char Allowed ';
    }
    return errMse;
  }
  /////////////////////////////////////////////////

  onSubmit() {
    console.log('form data is ', this.userForm.value);
    this._SharedDataService.sharedUserName=this.name?.value;
    console.log(this._SharedDataService.sharedUserName);
    
     this._router.navigateByUrl('/welcome');
  }
  ///////////////////////////////////////////////////
  getCountries() {
    this.subscription = this._MyApisService.getAllCountries().subscribe(
      (country) => {
        this.nationalities = country;
        console.log(country);
      },
      (e) => {
        console.log(e);
      },
      () => {}
    );
  }
  getUserIp() {
    this._MyApisService.getUserIp().subscribe(
      (ip) => {
        this.userIp = ip.ip;
        console.log(ip.ip);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }
  //get user geolocation
  getUsergeolocation() {
    this._MyApisService.getGeoLocation(this.userIp).subscribe(
      (data) => {
        console.log(data.country_name);
        this.defaultCountry = data.country_name;
        // this.userForm.get('nationality')?.setValue(data.country_name);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  removeArabic(event: any) {
    let req = /[\u0600-\u06FF]/;
    if (req.test(event.key)) {
       const test = this.userForm.controls['name'];
      console.log("a",test.value);
      const a = test.value.slice(0,-1);
      console.log("b",a);
      this.userForm.controls['name'].setValue(a);
    }else{

    }
  }
  ////////////////////////////

   /////////////////////////////////////////////////////////////
  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }
  get nationality() {
    return this.userForm.get('nationality');
  }
}
