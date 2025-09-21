import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class CustomValidators {
  static floatMin(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value > min ? null : { min: true };
    };
  }
}