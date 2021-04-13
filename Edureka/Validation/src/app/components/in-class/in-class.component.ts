import { Component, OnInit } from "@angular/core";
import { Route } from "src/app/domain/local/configuration/Route";
import { URL_PATH } from "src/app/routing/url-paths";

@Component({
  selector: "app-in-class",
  templateUrl: "./in-class.component.html",
  styleUrls: ["./in-class.component.css"],
})
export class InClassComponent implements OnInit {
  routes: Route[] = [
    { path: URL_PATH.HOME, text: "Home", options: "{ exact: true }" },
    { path: URL_PATH.BLOGS, text: "Blogs", options: "" },
    { path: URL_PATH.SERVERS, text: "Servers", options: "" },
    { path: URL_PATH.FORMS, text: "Forms", options: "" },
    { path: URL_PATH.MYPAGE, text: "My Page", options: "" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
