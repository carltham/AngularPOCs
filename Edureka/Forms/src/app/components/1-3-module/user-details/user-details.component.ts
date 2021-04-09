import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Header } from "src/app/domain/local/configuration/header";
import { User } from "src/app/domain/in-class/user";
import { URL_PATH } from "src/app/routing/url-paths";
import { UserService } from "src/app/services/user.service";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  selectedUserId: number = -1;
  selectedUser: User;
  previousUrl: string = "";

  constructor(
    private navHandler: NavHandlerService,
    private routeInfo: ActivatedRoute,
    private userService: UserService
  ) {
    this.selectedUser = userService.getUser(-1);
  }

  selectMe() {
    this.navHandler.navigate([URL_PATH.HOME, { id: this.selectedUserId }]);
  }

  ngOnInit(): void {
    let id = this.routeInfo.snapshot.paramMap.get("id");
    let number = id ? parseInt(id, 10) : -1;
    this.selectedUserId = "" + number !== "NaN" ? number : -1;
    this.selectedUser = this.userService.getUser(this.selectedUserId);
  }

  get headers(): Header[] {
    return this.userService.getHeaders();
  }
}
