import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { samaAsValidator } from '../validators/customValidatorsReactiveForm';

@Directive({
  selector: '[appSameAs]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SameAsDirective,
      multi: true,
    },
  ],
})
export class SameAsDirective implements Validator {
  @Input('appSameAs') controls!: string[];

  constructor() {}
  validate(control: FormGroup): ValidationErrors | null {
    const x =
      this.controls && this.controls.length === 2
        ? samaAsValidator(this.controls)(control)
        : null;
    return x;
  }
}
