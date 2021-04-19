import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./_services/authentication.service";
import { URL_PATH } from "../../support/url-paths";
import { emptyUser, User } from "../../domain/user";

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
    setTimeout(() => {
      this.router.navigate([
        URL_PATH.INCLASS + "/" + URL_PATH.AUTH + "/" + URL_PATH.LOGIN,
      ]);
    }, 3000);
  }
}
