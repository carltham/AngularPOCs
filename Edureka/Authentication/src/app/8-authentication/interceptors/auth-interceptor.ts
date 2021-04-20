import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('"AuthInterceptor::intercept::req.url = ', req.url);

    if (req.url.startsWith("users")) {
      console.log(
        '"AuthInterceptor::intercept::req.url.startsWith("users") = 0',
        req.url.startsWith("users")
      );
      const idToken = localStorage.getItem("id_token");
      console.log("AuthInterceptor::intercept::idToken", idToken);

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
