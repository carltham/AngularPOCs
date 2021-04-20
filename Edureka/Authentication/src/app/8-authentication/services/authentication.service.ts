import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Subscription } from "rxjs";
import { User, emptyUser } from "../../domain/user";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Subscription {
    return this.http
      .post<User>("/security/login", {
        username: credentials.username,
        password: credentials.password,
      })
      .subscribe((res: any) => this.setSession);
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, "second");

    this.loggedinUser = authResult.loggedinUser;
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = expiration ? expiration : moment();
    return moment(expiresAt);
  }
  get loggedinUser() {
    let user = localStorage.getItem("loggedinUser");
    let _loggedinUser = user ? JSON.parse(user) : emptyUser;
    return _loggedinUser;
  }
  set loggedinUser(user: User) {
    localStorage.setItem("loggedinUser", JSON.stringify(user));
  }
}
