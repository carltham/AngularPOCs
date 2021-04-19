import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { emptyUser, User } from "../../../domain/user";
import { Constants } from "../../../support/constants";
import { environment } from "../environments/environment";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    let userString = localStorage.getItem("currentUser");
    this.currentUserSubject = new BehaviorSubject<User>(
      userString ? JSON.parse(userString) : emptyUser
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          console.log("AuthenticationService::login:User = ", user);
          const expiresAt = moment().add(Constants._60_SEC, "second");
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("id_token", user.token);
          localStorage.setItem(
            "expires_at",
            JSON.stringify(expiresAt.valueOf())
          );
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem("currentUser");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.currentUserSubject.next(emptyUser);
  }
}
