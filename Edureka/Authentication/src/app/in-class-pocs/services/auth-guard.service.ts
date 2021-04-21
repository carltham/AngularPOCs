import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { SystemService } from "../../8-authentication/services/system.service";
import { NavHandlerService } from "../../services/5-navigation/nav-handler.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private navHandler: NavHandlerService,
    private systemService: SystemService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    let authenticated = await this.systemService.isLoggedIn();
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
