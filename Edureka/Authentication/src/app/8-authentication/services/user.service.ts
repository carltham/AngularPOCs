import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Header } from "src/app/domain/local/configuration/header";
import { emptyUser, User } from "../../domain/user";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUser(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/api/user/${id}`);
  }

  list() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
  }

  delete(id: number) {
    console.log(
      "`${environment.apiUrl}/api/user/${id}` = ",
      `${environment.apiUrl}/api/user/${id}`
    );

    return this.http.delete(`${environment.apiUrl}/api/user/${id}`);
  }

  getHeaders() {
    const headers: Header[] = [
      { number: 0, width: 15, text: "ID" },
      { number: 1, width: -1, text: "Full Name" },
      { number: 2, width: -1, text: "Username" },
    ];
    headers.forEach((header) => {
      if (header.width < 0) {
        header.width = (1 / headers.length) * 100;
      }
    });
    return headers;
  }
}
