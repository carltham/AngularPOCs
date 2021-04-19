import { Component, OnInit } from "@angular/core";
import { Route } from "src/app/domain/local/configuration/Route";
import { URL_PATH } from "../support/url-paths";

@Component({
  selector: "app-forms",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"],
})
export class AuthenticationComponent implements OnInit {
  routes: Route[] = [
    { path: URL_PATH.HOME, text: "Home", options: "" },
    { path: URL_PATH.LOGIN, text: "Login", options: "" },
    { path: URL_PATH.LIST, text: "List Users", options: "" },
    { path: URL_PATH.LOGOUT, text: "Logout", options: "" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
