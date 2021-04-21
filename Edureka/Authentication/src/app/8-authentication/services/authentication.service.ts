import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Observable } from "rxjs";
import { User } from "../../domain/user";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/security/login`, {
      username: credentials.username,
      password: credentials.password,
    });
  }

  register(user: User) {
    return this.http.post<User>(
      `${environment.apiUrl}/security/register`,
      user
    );
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = expiration ? expiration : moment();
    return moment(expiresAt);
  }
}
