import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { SystemService } from "../../../8-authentication/services/system.service";
import { User } from "../../../domain/user";
import { AuthUserService } from "../_services/auth-user.service";

@Component({
  selector: "app-home",
  templateUrl: "./auth-home.component.html",
  styleUrls: ["./auth-home.component.css"],
})
export class AuthHomeComponent implements OnInit {
  users: User[] = [];

  constructor(
    private systemService: SystemService,
    private authUserService: AuthUserService
  ) {}

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.authUserService
      .delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.authUserService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }
  get loggedinUser() {
    return this, this.systemService.loggedinUser;
  }
}
