import { Component, OnInit } from "@angular/core";
import { Route } from "src/app/domain/local/configuration/Route";
import { URL_PATH } from "src/app/routing/url-paths";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"],
})
export class FormsComponent implements OnInit {
  routes: Route[] = [
    { path: URL_PATH.HOME, text: "Home", options: "" },
    { path: URL_PATH.FORMS_TEMPLATE, text: "By Template", options: "" },
    { path: URL_PATH.FORMS_REACTIVE, text: "By Reactive", options: "" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
