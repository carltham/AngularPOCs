import { Attribute, Directive, forwardRef, Input } from "@angular/core";
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[validateEqual]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ConfirmEqualValidatorDirective),
      multi: true,
    },
  ],
})
export class ConfirmEqualValidatorDirective {
  validator: any = null;
  constructor(@Attribute("validateEqual") private comparedControlName: string) {
    this.validator = new LocalEqualValidator(comparedControlName);
  }
  validate(thisControl: AbstractControl): { [key: string]: any } | null {
    return this.validator.validate(thisControl);
  }
}
export class LocalEqualValidator implements Validator {
  constructor(
    @Attribute("validateEqual") private comparedControlName: string
  ) {}
  validate(thisControl: AbstractControl): { [key: string]: any } | null {
    let thisControlValue = thisControl.value;

    let comparedControl = thisControl.root.get(this.comparedControlName);
    let comparedControlValue = comparedControl?.value;

    let result =
      thisControlValue !== comparedControlValue
        ? {
            validateEqual: { value: thisControlValue },
          }
        : null;
    console.log("validateEqual::result = ", result);
    return result;
  }
}
