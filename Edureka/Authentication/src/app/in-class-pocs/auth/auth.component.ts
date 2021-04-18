import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./_services/authentication.service";
import { User, emptyUser } from "./_models/user";

@Component({
  selector: "auth-root",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  currentUser: User = emptyUser;
  title = "Module8Demo2";

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
