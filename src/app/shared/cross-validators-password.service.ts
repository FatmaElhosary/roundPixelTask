import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//cross validation with newpassword and confirm new password
//if validation is true return null

export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  ////to see erro message when pass and confirm-pass has touched
  //pristine: This property returns true if the element’s contents have not been changed.
  if(password?.pristine||confirmPassword?.pristine){
    return null;
  }
  // if(confirmPassword?.errors && !confirmPassword.errors['misMAtch']){
  //   return null;
  // }
  return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMAtch': true } : null;
};
