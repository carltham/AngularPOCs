import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class FormsReactiveComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  isValid(fieldName: string) {
    let field = this.registerForm.get(fieldName);
    return field && field.valid;
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
        userName: [""],
        fullName: ["", [Validators.required, Validators.minLength(4)]],
      }),
      contactDetails: this.formBuilder.group({
        address: ["", [Validators.required, Validators.minLength(2)]],
        city: [""],
      }),
      loginDetails: this.formBuilder.group({
        email: [""],
        password: ["", [Validators.required, Validators.minLength(4)]],
        confirmPassword: [""],
      }),
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
}
