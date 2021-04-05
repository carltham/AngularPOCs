import { Injectable } from "@angular/core";
import { Header } from "../domain/Header";
import { User } from "../domain/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  emptyUser: User = { id: -1, fullName: "", userName: "" };

  constructor() {}
  public getUser(id: number) {
    let foundUser = this.getUsers().find((user) => {
      return user.id === id;
    });
    console.log("id = ", id);
    console.log("foundUser = ", foundUser);

    return foundUser ? foundUser : this.emptyUser;
  }

  public getUsers() {
    const users: User[] = [
      { id: 0, fullName: "AAAA", userName: "aaaa" },
      { id: 100, fullName: "BBBB", userName: "bbbb" },
      { id: 101, fullName: "ZZZZ", userName: "zzzz" },
      { id: 151, fullName: "XXXX", userName: "xxxx" },
      { id: 199, fullName: "XXXY", userName: "xxxy" },
    ];
    return users;
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
