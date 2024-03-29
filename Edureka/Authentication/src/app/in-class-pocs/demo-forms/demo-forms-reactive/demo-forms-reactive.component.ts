import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-reactive",
  templateUrl: "./demo-forms-reactive.component.html",
  styleUrls: ["./demo-forms-reactive.component.css"],
})
export class DemoFormsReactiveComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: [""],
      firstName: [""],
      lastName: [""],
      email: [""],
      password: [""],
      confirmPassword: [""],
      acceptTerms: [false],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
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
}
