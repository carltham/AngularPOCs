import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Header } from "src/app/domain/local/configuration/header";
import { emptyUser, User } from "../../domain/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUser(id: number) {
    return this.http.get<User>("/api/user/" + id);
  }

  list() {
    return this.http.get<User[]>("/api/users");
  }

  delete(id: number) {
    return this.http.delete("/api/user/" + id);
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
