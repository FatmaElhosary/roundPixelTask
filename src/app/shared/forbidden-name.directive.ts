import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


////////////////////custom validation that accept only english alphabets ///////////////////////////
//if validation is true return null
/** A user's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value.trim());
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}