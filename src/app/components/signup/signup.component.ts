import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {


  selectedValue: string="";



  constructor(private _FormBuilder: FormBuilder) {}

  ngOnInit(): void {}

/*   siginupForm:FormGroup=new FormGroup({
    first:new FormControl(null,[Validators.required,Validators.maxLength(8),Validators.minLength(3)]),
    'last':new FormControl(null,[Validators.required,Validators.maxLength(8),Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    'repassword':new FormControl(null,[Validators.required])




  }) */


  userForm = this._FormBuilder.group({
    name: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required]],
    nationality: ['',[Validators.required]]
  },{updateOn:'blur'});
 

/*   userForm = new FormGroup({
    name:new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    email:new FormControl ('',[Validators.required]),
    password:new FormControl ( '',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl ( '',[Validators.required]),
    nationality:new FormControl ( '',[Validators.required])
  },{updateOn:'blur'}); */

  onSubmit() {
   console.log('form data is ', this.userForm.value);
  }
  get name() { return this.userForm.get('name'); }

  get email() { return this.userForm.get('email'); }
}
