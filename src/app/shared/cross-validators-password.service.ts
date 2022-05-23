import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//cross validation with newpassword and confirm new password
//if validation is true return null

export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const name = control.get('password');
  const alterEgo = control.get('confirmPassword');
  ////to see erro message when pass and confirm-pass has touched
  if(name?.pristine||alterEgo?.pristine){
    return null;
  }
  return name && alterEgo && name.value !== alterEgo.value ? { identityRevealed: true } : null;
};
