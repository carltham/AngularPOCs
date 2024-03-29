import { Injectable } from "@angular/core";
import { User } from "src/app/domain/in-class/user";
import { UserService } from "../user.service";

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
    let founduser = this.userService.getUsers().find((user) => {
      return user.userName === credentials.userName;
    });

    this._loggedIn = founduser != undefined && founduser.id >= 0;
    return founduser ? founduser : this.userService.emptyUser;
  }

  logout() {
    this._loggedIn = false;
  }
}
