import { Component, OnInit } from "@angular/core";
import { Route } from "src/app/domain/local/configuration/Route";
import { URL_PATH } from "../../support/url-paths";

@Component({
  selector: "app-forms",
  templateUrl: "./demo-validation.component.html",
  styleUrls: ["./demo-validation.component.css"],
})
export class DemoValidationComponent implements OnInit {
  routes: Route[] = [
    { path: URL_PATH.HOME, text: "Home", options: "" },
    { path: URL_PATH.BY_TEMPLATE, text: "By Template", options: "" },
    { path: URL_PATH.BY_REACTIVE, text: "By Reactive", options: "" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
