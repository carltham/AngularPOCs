import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-forms-home",
  templateUrl: "./demo-forms-home.component.html",
  styleUrls: ["./demo-forms-home.component.css"],
})
export class DemoFormsHomeComponent implements OnInit {
  city = new FormControl(" ");
  city2 = new FormControl("New York", [
    Validators.required,
    Validators.minLength(2),
  ]);
  myFormModel: FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      userName: new FormControl(""),
      ssn: new FormControl(""),
      passwordGroup: new FormGroup({
        password: new FormControl(""),
        pconfirm: new FormControl(""),
      }),
    });
  }

  ngOnInit(): void {}
}
