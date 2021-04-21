import { Injectable } from "@angular/core";
import * as moment from "moment";
import { emptyUser, User } from "../../domain/user";
import { Constants } from "../../support/constants";

@Injectable({
  providedIn: "root",
})
export class SystemService {
  private _loggedinUser: any;

  setSession(authResult: any) {
    console.log("setSession::authResult = ", authResult);

    const expiresAt = moment().add(Constants._60_SEC, "second");

    this.loggedinUser = authResult.loggedinUser
      ? authResult.loggedinUser
      : emptyUser;
    localStorage.setItem("loggedinUser", JSON.stringify(this.loggedinUser));
    localStorage.setItem("id_token", "" + this.loggedinUser.auth?.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }
  get loggedinUser() {
    if (!this._loggedinUser) {
      let user = localStorage.getItem("loggedinUser");
      this._loggedinUser = user ? JSON.parse(user) : emptyUser;
    }
    return this._loggedinUser;
  }
  set loggedinUser(user: User) {
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    this._loggedinUser = null;
  }

  async logout() {
    setTimeout(() => {
      this._loggedinUser = null;
      console.log("AuthenticationService::logout");
    });
    let finished = await this.clearStorageFromLoginObjects();
    return finished;
  }

  clearStorageFromLoginObjects() {
    localStorage.removeItem("loggedinUser");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    let promise = new Promise(function (resolve, reject) {
      let user = localStorage.getItem("loggedinUser");
      while (user) {
        console.log("user still exists in localStorage :: ", user);
        user = localStorage.getItem("loggedinUser");
      }
      // executor (the producing code, "singer")
      resolve("{ userRemoved: true }");
    });
    return promise;
  }

  public isLoggedIn() {
    // return true;
    // console.log("isLoggedIn::this.loggedinUser = ", this.loggedinUser);
    // console.log("isLoggedIn::emptyUser = ", emptyUser);
    // console.log("isLoggedIn::this._isLoggedIn = ", this._isLoggedIn);
    return this.loggedinUser.id !== emptyUser.id;
  }
}
