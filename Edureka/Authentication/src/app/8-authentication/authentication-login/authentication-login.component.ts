import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { emptyUser, User } from "../../domain/user";
import { NavHandlerService } from "../../services/5-navigation/nav-handler.service";
import { Constants } from "../../support/constants";
import { URL_PATH } from "../../support/url-paths";
import { AuthenticationService } from "../services/authentication.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./authentication-login.component.html",
  styleUrls: ["./authentication-login.component.css"],
})
export class AuthenticationLoginComponent implements OnInit {
  knownUsers: User[] = [];
  selectedUser: User = emptyUser;
  selectedUserId: number = -1;

  _userName = "";
  _password = "";
  state: string = "";

  constructor(
    private navHandler: NavHandlerService,
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthenticationService
  ) {
    console.log("this.state = ", this.state);
  }

  doLogin() {
    if (this._userName && this._userName.length > 0) {
      let loggedinUser = this.authService.login({
        username: this.username,
        password: this.password,
      });
    }
  }

  selectUser(id: number) {
    this.selectedUserId = id;
    const foundUser = this.knownUsers.find((user) => user.id === id);
    if (foundUser) {
      this.selectedUser = foundUser;
    }
  }

  hasControlledUserDetails(id: number) {
    return this.selectedUserId === id;
  }

  showDetails(id: number) {
    this.navHandler.toPath(URL_PATH.HOMEID.replace(":id", "" + id));
  }

  isAuthenticated() {
    return this.navHandler.isAuthenticated();
  }

  ngOnInit(): void {
    this.userService.list().subscribe((data: User[]) => {
      this.knownUsers = data;
    });
    this.navHandler.getParam("id", {
      process: (value) => {
        this.selectedUserId = parseInt(value);
      },
    });

    this.route.data.subscribe((data) => {
      if (data.logout && this.navHandler.isAuthenticated()) {
        this.authService.logout();
        this.navHandler.reload("/");
      } else if (data.list) {
        console.log("data = ", data);
        this.state = Constants.LIST;
        console.log("this.state = ", this.state);
      }
    });
  }

  get loggedinUser() {
    return this.authService.loggedinUser;
  }
  get username() {
    return this._userName;
  }
  set username(value) {
    this._userName = value;
  }

  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
}