import { Component, OnInit } from "@angular/core";
import { Constants } from "src/app/support/constants";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-validation.component.html",
  styleUrls: ["./template-validation.component.css"],
})
export class ValidationTemplateComponent implements OnInit {
  constants: any = Constants;
  model: any = {};
  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model, null, 4));
  }
  constructor() {}

  ngOnInit(): void {}
}
