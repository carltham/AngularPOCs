import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven",
  templateUrl: "./demo-validation-template.component.html",
  styleUrls: ["./demo-validation-template.component.css"],
})
export class DemoValidationTemplateComponent implements OnInit {
  model: any = {};
  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model, null, 4));
  }

  constructor() {}

  ngOnInit() {}
}
