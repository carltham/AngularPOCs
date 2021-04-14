import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-validation.component.html",
  styleUrls: ["./template-validation.component.css"],
})
export class ValidationTemplateComponent implements OnInit {
  model: any = {};
  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model, null, 4));
  }
  constructor() {}

  ngOnInit(): void {}
}
