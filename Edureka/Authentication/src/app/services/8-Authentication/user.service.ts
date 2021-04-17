import { Injectable } from "@angular/core";
import { User } from "src/app/domain/in-class/user";
import { Header } from "src/app/domain/local/configuration/header";

@Injectable({
  providedIn: "root",
})
export class UserService {
  emptyUser: User = { id: -1, fullName: "", userName: "" };
  users: User[] = [
    { id: 0, fullName: "AAAA", userName: "aaaa" },
    { id: 100, fullName: "BBBB", userName: "bbbb" },
    { id: 101, fullName: "ZZZZ", userName: "zzzz" },
    { id: 151, fullName: "XXXX", userName: "xxxx" },
    { id: 199, fullName: "XXXY", userName: "xxxy" },
  ];

  constructor() {}

  public getUser(id: number) {
    let foundUser = this.users.find((user) => {
      return user.id === id;
    });

    return foundUser ? foundUser : this.emptyUser;
  }

  public list() {
    return this.users;
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
