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
    { path: URL_PATH.HOME, text: "Home", options: "{ exact: true }" },
    { path: URL_PATH.PRODUCTS, text: "Products", options: "{ exact: true }" },
    { path: URL_PATH.CONTACT, text: "Contact", options: "{ exact: true }" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
