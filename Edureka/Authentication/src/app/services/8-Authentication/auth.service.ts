import { Injectable } from "@angular/core";
import { User } from "src/app/domain/8-Authentication/user";
import { UserService } from "../8-Authentication/user.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedin() {
    return this._loggedIn;
  }
  private _loggedIn = false;
  constructor(private userService: UserService) {}

  login(credentials: any): User {
    let founduser = this.userService.list().find((user) => {
      return user.userName === credentials.userName;
    });

    this._loggedIn = founduser != undefined && founduser.id >= 0;
    return founduser ? founduser : this.userService.emptyUser;
  }

  logout() {
    this._loggedIn = false;
  }
}
