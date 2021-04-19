import { Injectable } from "@angular/core";
import { Header } from "src/app/domain/local/configuration/header";
import { emptyUser, User } from "../../domain/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  users: User[] = [
    {
      id: 0,
      username: "aaaa",
      password: "aaaa",
      firstName: "AAAA",
      lastName: "AAAA",
      token: "",
    },
    {
      id: 100,
      username: "bbbb",
      password: "bbbb",
      firstName: "BBBB",
      lastName: "AAAA",
      token: "",
    },
    {
      id: 101,
      username: "zzzz",
      password: "zzzz",
      firstName: "ZZZZ",
      lastName: "AAAA",
      token: "",
    },
    {
      id: 151,
      username: "xxxx",
      password: "xxxx",
      firstName: "XXXX",
      lastName: "AAAA",
      token: "",
    },
    {
      id: 199,
      username: "xxxy",
      password: "xxxy",
      firstName: "XXXY",
      lastName: "AAAA",
      token: "",
    },
  ];

  constructor() {}

  public getUser(id: number) {
    let foundUser = this.users.find((user) => {
      return user.id === id;
    });

    return foundUser ? foundUser : emptyUser;
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
