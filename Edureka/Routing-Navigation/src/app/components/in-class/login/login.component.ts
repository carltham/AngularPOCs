import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/domain/in-class/user";
import { URL_PATH } from "src/app/routing/url-paths";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { AuthService } from "src/app/services/in-class/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  knownUsers: User[] = [];
  selectedUser: User = { id: -1, fullName: "", userName: "" };
  selectedUserId: number = -1;

  _userName = "";
  _password = "";

  constructor(
    private navHandler: NavHandlerService,
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {}

  doLogin() {
    if (this._userName && this._userName.length > 0) {
      let loggedinUser = this.authService.login({
        userName: this.userName,
        password: this.password,
      });
    }
    // this.router.navigate([URL_PATH.LOGIN]);
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
    this.knownUsers = this.userService.getUsers();
    this.navHandler.getParam("id", {
      process: (value) => {
        this.selectedUserId = parseInt(value);
      },
    });

    this.route.data.subscribe((data) => {
      if (data.logout && this.navHandler.isAuthenticated()) {
        this.authService.logout();
        this.navHandler.reload("/");
      }
    });
  }

  get userName() {
    return this._userName;
  }
  set userName(value) {
    this._userName = value;
  }

  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
}
