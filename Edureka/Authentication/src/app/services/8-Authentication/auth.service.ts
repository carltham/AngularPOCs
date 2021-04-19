import { Injectable } from "@angular/core";
import { UserService } from "../8-Authentication/user.service";
import { User, emptyUser } from "../../domain/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  loggedinUser(): User {
    let storedUser = localStorage.getItem("loggedinUser");
    return storedUser ? JSON.parse(storedUser) : emptyUser;
  }
  isLoggedin() {
    return this._loggedIn;
  }
  private _loggedIn = false;
  constructor(private userService: UserService) {}

  login(credentials: any): User {
    let founduser = this.userService.list().find((user) => {
      return user.username === credentials.username;
    });

    this._loggedIn = founduser != undefined && founduser.id >= 0;
    return founduser ? founduser : emptyUser;
  }

  logout() {
    this._loggedIn = false;
  }
}
