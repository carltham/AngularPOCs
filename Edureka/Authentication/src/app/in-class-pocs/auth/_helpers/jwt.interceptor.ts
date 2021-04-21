import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SystemService } from "../../../8-authentication/services/system.service";
import { emptyUser } from "../../../domain/user";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private systemService: SystemService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let loggedinUser = this.systemService.loggedinUser;

    if (loggedinUser != emptyUser && loggedinUser.auth?.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${loggedinUser.auth.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
