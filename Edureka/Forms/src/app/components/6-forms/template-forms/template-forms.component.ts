import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-forms.component.html",
  styleUrls: ["./template-forms.component.css"],
})
export class TemplateFormsComponent implements OnInit {
  model: any = {};
  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model, null, 4));
  }
  constructor() {}

  ngOnInit(): void {}
}
