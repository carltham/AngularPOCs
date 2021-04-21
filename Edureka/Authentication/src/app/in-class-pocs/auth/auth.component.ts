import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../8-authentication/services/authentication.service";
import { SystemService } from "../../8-authentication/services/system.service";
import { URL_PATH } from "../../support/url-paths";

@Component({
  selector: "auth-root",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  title = "Module8Demo2";

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private systemService: SystemService
  ) {}

  logout() {
    this.systemService.logout();
    setTimeout(() => {
      this.router.navigate([
        URL_PATH.INCLASS + "/" + URL_PATH.AUTH + "/" + URL_PATH.LOGIN,
      ]);
    }, 3000);
  }
  get loggedinUser() {
    return this.systemService.loggedinUser;
  }
}
