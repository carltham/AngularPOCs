import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthenticationService } from "../_services/authentication.service";
import { emptyUser } from "../_models/user";
import { ActivatedRoute } from "@angular/router";
import { URL_PATH } from "../../../support/url-paths";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    console.log("AuthGuard::canActivate::currentUser", currentUser);

    if (currentUser !== emptyUser) {
      // authorised so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate([URL_PATH.INCLASS + "/" + URL_PATH.AUTH + "/login"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
