import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

export function samaAsValidator(controls: string[]): any {
  return (control: FormGroup): ValidationErrors | null => {
    const compare1 = control.get(controls[0])?.value;
    const compare2 = control.get(controls[1])?.value;

    if (compare1 !== compare2) {
      return { sameAs: { value: control.value } };
    } else {
      return null;
    }
  };
}
