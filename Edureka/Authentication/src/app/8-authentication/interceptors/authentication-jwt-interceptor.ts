import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable()
export class AuthenticationJWTInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let shortUrl = req.url.replace(environment.apiUrl, "");
    if (shortUrl.startsWith("/security") || shortUrl.startsWith("/api")) {
      const idToken = localStorage.getItem("id_token");

      if (idToken) {
        const cloned = req.clone({
          headers: req.headers.set("Authorization", "Bearer " + idToken),
        });
        return next.handle(cloned);
      }
    }
    return next.handle(req);
  }
}
