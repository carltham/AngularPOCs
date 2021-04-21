import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Header } from "../../../../../tserver/src/domain/Header";
import { UserService } from "../../../8-authentication/services/user.service";
import { User, emptyUser } from "../../../domain/user";
import { NavHandlerService } from "../../../services/5-navigation/nav-handler.service";
import { URL_PATH } from "../../../support/url-paths";

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
    this.selectedUser = emptyUser;
  }

  goBack() {
    this.navHandler.navigate([URL_PATH.HOME, { id: this.selectedUserId }]);
  }

  ngOnInit(): void {
    let id = this.routeInfo.snapshot.paramMap.get("id");
    let number = id ? parseInt(id, 10) : -1;
    this.selectedUserId = "" + number !== "NaN" ? number : -1;
    this.userService.getUser(this.selectedUserId).subscribe((data: User) => {
      this.selectedUser = data;
    });
  }

  get headers(): Header[] {
    return this.userService.getHeaders();
  }
}
