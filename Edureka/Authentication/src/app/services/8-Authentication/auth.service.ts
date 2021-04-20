import { Injectable } from "@angular/core";
import { UserService } from "../../8-authentication/services/user.service";
import { emptyUser, User } from "../../domain/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedin() {
    return this.loggedinUser !== emptyUser;
  }
  constructor(private userService: UserService) {}

  login(credentials: any) {
    this.userService.list().subscribe((users: User[]) => {
      let founduser = users.find((user: User) => {
        return user.username === credentials.username;
      });
      this.loggedinUser = founduser ? founduser : emptyUser;
    });
  }

  get loggedinUser(): User {
    let storedUser = localStorage.getItem("loggedinUser");
    return storedUser ? JSON.parse(storedUser) : emptyUser;
  }
  set loggedinUser(user: User) {
    let storedUser = localStorage.setItem(
      "loggedinUser",
      JSON.stringify(user ? user : emptyUser)
    );
  }

  logout() {
    this.loggedinUser = emptyUser;
  }
}
