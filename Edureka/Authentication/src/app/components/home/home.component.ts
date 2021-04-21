import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { SystemService } from "../../8-authentication/services/system.service";
import { UserService } from "../../8-authentication/services/user.service";
import { emptyUser, User } from "../../domain/user";
import { URL_PATH } from "../../support/url-paths";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  knownUsers: User[] = [];
  selectedUser: User = emptyUser;
  selectedUserId: number = -1;
  selectedResponseId: number = -1;

  constructor(
    private navHandler: NavHandlerService,
    private route: ActivatedRoute,
    private userService: UserService,
    private systemService: SystemService
  ) {}

  doLogin() {
    this.navHandler.toPath(URL_PATH.LOGIN);
  }

  isLoggedin() {
    return this.systemService.isLoggedIn();
  }

  selectUser(id: number) {
    this.selectedUserId = id;
    const foundUser = this.knownUsers.find((user) => user.id === id);
    if (foundUser) {
      this.selectedUser = foundUser;
    }
  }

  showDetails(id: number) {
    this.navHandler.toPath(URL_PATH.HOMEID.replace(":id", "" + id));
  }

  ngOnInit(): void {
    this.userService
      .list()
      .subscribe((data: User[]) => (this.knownUsers = data));

    this.route.paramMap.subscribe((dataMap) => {
      let value = dataMap.get("id");
      let id = value ? parseInt(value) : -1;
      this.selectedResponseId = id;
    });
  }
}
