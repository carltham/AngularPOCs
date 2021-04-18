import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Header } from "../../../../../../tserver/src/domain/Header";
import { User } from "../../../../domain/8-Authentication/user";
import { URL_PATH } from "../../../../routing/url-paths";
import { NavHandlerService } from "../../../../services/5-navigation/nav-handler.service";
import { UserService } from "../../../../services/8-Authentication/user.service";

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

  goBack() {
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
