import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "../_models/user";
import { AuthenticationService } from "../_services/authentication.service";
import { AuthUserService } from "../_services/auth-user.service";

@Component({
  selector: "app-home",
  templateUrl: "./auth-home.component.html",
  styleUrls: ["./auth-home.component.css"],
})
export class AuthHomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: AuthUserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
        console.log("this.users = ", this.users);
      });
  }
}
