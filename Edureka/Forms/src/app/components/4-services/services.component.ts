import { Component, OnInit } from "@angular/core";
import { Route } from "src/app/domain/local/configuration/Route";
import { URL_PATH } from "src/app/routing/url-paths";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  routes: Route[] = [
    { path: URL_PATH.HOME, text: "Home", options: "{ exact: true }" },
    { path: URL_PATH.INJECTION, text: "4. Services-Injection", options: "" },
    { path: URL_PATH.HTTPCLIENT, text: "4. Services-HttpClient", options: "" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
