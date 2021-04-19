import { Component } from "@angular/core";
import { Route } from "./domain/local/configuration/Route";
import { URL_PATH } from "./support/url-paths";
import { NavHandlerService } from "./services/5-navigation/nav-handler.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Welcome to the Employee List app !";

  routes: Route[] = [
    { path: URL_PATH.HOME, text: "Home", options: "{ exact: true }" },
    { path: URL_PATH.MOD4, text: "Module 1-3", options: "" },
    { path: URL_PATH.SERVICES, text: "4. Services", options: "" },
    {
      path: URL_PATH.ROUTING,
      text: "5. Navigation",
      options: "",
    },
    { path: URL_PATH.FORMS, text: "6. Forms", options: "" },
    { path: URL_PATH.VALIDATION, text: "7. Validation", options: "" },
    { path: URL_PATH.AUTH, text: "8. Authentication", options: "" },
    { path: URL_PATH.INCLASS, text: "In class & POCs", options: "" },
  ];

  constructor(private navHandler: NavHandlerService) {}
  isAuthenticated() {
    return this.navHandler.isAuthenticated();
  }
}
