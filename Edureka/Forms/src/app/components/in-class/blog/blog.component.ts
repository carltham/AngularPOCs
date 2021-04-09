import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { URL_PATH } from "src/app/routing/url-paths";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  toNewBlog() {
    this.router.navigate(["./" + URL_PATH.NEWBLOGS], {
      relativeTo: this.route,
    });
  }

  toOtherBlog() {
    this.router.navigate(["./" + URL_PATH.OTHERBLOGS], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {}
}
