import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { emptyUser, User } from "../../../domain/user";
import { NavHandlerService } from "../../../services/5-navigation/nav-handler.service";
import { Constants } from "../../../support/constants";
import { URL_PATH } from "../../../support/url-paths";
import { AuthenticationService } from "../../services/authentication.service";
import { MessengerService } from "../../services/messenger.service";
import { SystemService } from "../../services/system.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
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
    private authenticationService: AuthenticationService,
    private systemService: SystemService,
    private messengerService: MessengerService
  ) {}

  load() {
    this.userService.list().subscribe((data: User[]) => {
      this.knownUsers = data;
    });
  }

  doLogin() {
    console.log("AuthenticationLoginComponent::doLogin::enter");
    if (this._userName && this._userName.length > 0) {
      console.log(
        "AuthenticationLoginComponent::doLogin::this._userName && this._userName.length = ",
        this._userName && this._userName.length
      );
      this.authenticationService
        .login({
          username: this.username,
          password: this.password,
        })
        .subscribe((res: any) => {
          console.log("doLogin::res = ", res);

          this.systemService.setSession(res);
          this.load();
        });
    }
    console.log("AuthenticationLoginComponent::doLogin::exit");
  }

  selectUser(id: number) {
    this.selectedUserId = id;
    const foundUser = this.knownUsers.find((user) => user.id === id);
    if (foundUser) {
      this.selectedUser = foundUser;
    }
  }

  deleteUser(id: number) {
    if (id == this.loggedinUser.id) {
      let errorMessage =
        this.loggedinUser.firstName +
        " is logged in (you) and cannot be removed !!";

      this.messengerService.error(errorMessage);
      throw errorMessage;
    }
    this.userService.delete(id).subscribe((data: any) => {
      console.log("deleteUser::result", data);
      this.messengerService.success(data.result);
      // window.location.reload();
      this.load();
    });
    return;
  }

  hasControlledUserDetails(id: number) {
    return this.selectedUserId === id;
  }

  showDetails(id: number) {
    this.navHandler.toPath(URL_PATH.HOMEID.replace(":id", "" + id));
  }
  get isAuthenticated() {
    return this.systemService.isLoggedIn();
  }

  ngOnInit(): void {
    this.load();
    this.navHandler.getParam("id", {
      process: (value) => {
        this.selectedUserId = parseInt(value);
      },
    });

    this.route.data.subscribe((data) => {
      if (data.logout && this.systemService.isLoggedIn()) {
        this.systemService
          .logout()
          .then((data) => console.log("Logout result :: ", data));
        this.navHandler.reload("/");
      } else if (data.list) {
        this.state = Constants.LIST;
      }
    });
  }

  get loggedinUser(): User {
    return this.systemService.loggedinUser;
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
