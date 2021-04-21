import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { SystemService } from "../../../8-authentication/services/system.service";
import { emptyUser } from "../../../domain/user";
import { URL_PATH } from "../../../support/url-paths";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private systemService: SystemService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const loggedinUser = this.systemService.loggedinUser;

    if (loggedinUser !== emptyUser) {
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
