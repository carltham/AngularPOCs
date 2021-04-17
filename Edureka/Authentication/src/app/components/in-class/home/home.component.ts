import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/domain/in-class/user";
import { URL_PATH } from "src/app/routing/url-paths";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { UserService } from "src/app/services/8-Authentication/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  knownUsers: User[] = [];
  selectedUser: User = { id: -1, fullName: "", userName: "" };
  selectedUserId: number = -1;
  selectedResponseId: number = -1;

  constructor(
    private navHandler: NavHandlerService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  isLoggedin() {
    return this.navHandler.isAuthenticated();
  }

  doLogin() {
    this.navHandler.toPath(URL_PATH.LOGIN);
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
    this.knownUsers = this.userService.list();

    this.route.paramMap.subscribe((dataMap) => {
      let value = dataMap.get("id");
      let id = value ? parseInt(value) : -1;
      this.selectedResponseId = id;
    });
  }
}
