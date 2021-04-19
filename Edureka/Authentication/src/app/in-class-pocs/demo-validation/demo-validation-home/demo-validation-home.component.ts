import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-forms-home",
  templateUrl: "./demo-validation-home.component.html",
  styleUrls: ["./demo-validation-home.component.css"],
})
export class DemoValidationHomeComponent implements OnInit {
  city = new FormControl(" ");
  city2 = new FormControl("New York", [
    Validators.required,
    Validators.minLength(2),
  ]);
  myFormModel: FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      username: new FormControl(""),
      ssn: new FormControl(""),
      passwordGroup: new FormGroup({
        password: new FormControl(""),
        pconfirm: new FormControl(""),
      }),
    });
  }

  ngOnInit(): void {}
}
