import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LocalEqualValidator } from "src/app/directives/confirm-equal-validator.directive";
import { Constants } from "src/app/support/constants";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive-validation.component.html",
  styleUrls: ["./reactive-validation.component.css"],
})
export class ValidationReactiveComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  isVisible(componentName: string) {
    let field = this.registerForm.get(componentName);
    return field && field;
  }
  isValid(fieldName: string, expectedError: string = "") {
    if (expectedError === "min") {
      expectedError = "minlength";
    }
    let field = this.registerForm.get(fieldName);
    let hasExpectedError = field?.getError(expectedError);
    let errors = field?.errors;
    let result = hasExpectedError
      ? false
      : expectedError !== ""
      ? true
      : field?.valid;
    if (fieldName === "contactDetails.telephone" && expectedError === "") {
      console.log("fieldName = ", fieldName);
      console.log("errors = ", errors);
      console.log(
        "expectedError, hasExpectedError = ",
        expectedError,
        hasExpectedError
      );
      console.log("field?.valid) = ", field?.valid);
      console.log("field, result = ", field, result);
    }
    return result;
  }
  isInValid(fieldName: string, expectedError: string = "") {
    return !this.isValid(fieldName, expectedError);
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("this.registerForm.invalid = ", this.registerForm.invalid);
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        userName: ["", Validators.required],
        fullName: ["", [Validators.required, Validators.minLength(4)]],
      }),
      contactDetails: this.formBuilder.group({
        address: ["", [Validators.required, Validators.minLength(2)]],
        telephone: [
          "",
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern(Constants.PATTERNS.NUMERIC),
          ],
        ],
        city: ["", Validators.required],
      }),
      loginDetails: this.formBuilder.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(4)]],
        confirmPassword: [
          "",
          [
            Validators.required,
            new LocalEqualValidator("loginDetails.password"),
          ],
        ],
      }),
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
}
