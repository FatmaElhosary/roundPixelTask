import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//cross validation with newpassword and confirm new password
//if validation is true return null

export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  ////to see erro message when pass and confirm-pass has touched
  if(password?.pristine||confirmPassword?.pristine){
    return null;
  }
  return password && confirmPassword && password.value !== confirmPassword.value ? { identityRevealed: true } : null;
};
