import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { NavHandlerService } from "../5-navigation/nav-handler.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private navHandler: NavHandlerService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    let authenticated = await this.navHandler.isAuthenticated();
    if (authenticated) {
      return true;
    } else {
      this.navHandler.navigate(["/login"]);
      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
