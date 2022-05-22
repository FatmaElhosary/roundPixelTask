import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';



export function PasswordMatchValidator(formGroup: AbstractControl):{[key: string]:boolean} |null  {
const password=formGroup.get('password');
const confirmPassword=formGroup.get('confirmPassword');
  return password && confirmPassword&& password?.value != confirmPassword?.value?
  {'misMatch':true}:null;
}
