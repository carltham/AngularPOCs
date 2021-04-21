import { Component, OnInit } from "@angular/core";
import { Route } from "src/app/domain/local/configuration/Route";
import { URL_PATH } from "../support/url-paths";
import { SystemService } from "./services/system.service";

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
    { path: URL_PATH.PROTECTED, text: "Secret", options: "" },
  ];

  constructor(private systemService: SystemService) {}
  get isAuthenticated() {
    return this.systemService.isLoggedIn();
  }

  ngOnInit(): void {}
}
