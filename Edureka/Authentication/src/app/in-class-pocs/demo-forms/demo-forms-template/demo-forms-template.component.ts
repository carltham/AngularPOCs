import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven",
  templateUrl: "./demo-forms-template.component.html",
  styleUrls: ["./demo-forms-template.component.css"],
})
export class DemoFormsTemplateComponent implements OnInit {
  model: any = {};
  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model, null, 4));
  }
  constructor() {}

  ngOnInit(): void {}
}
