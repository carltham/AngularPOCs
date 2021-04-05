import { Component } from "@angular/core";
import { NavHandlerService } from "./services/nav-handler.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Welcome to the Employee List app !";
  constructor(private navHandler: NavHandlerService) {}
}
