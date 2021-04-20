import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Observable, of, throwError } from "rxjs";
import { delay, dematerialize, materialize, mergeMap } from "rxjs/operators";
import { User } from "../../domain/user";

// array in local storage for registered users
let usersString = localStorage.getItem("users");
let users = usersString ? JSON.parse(usersString) : [];

@Injectable()
export class FakeApiAuthBackend implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("FakeApiAuthBackend::intercept()");
    const { url, method, headers, body } = req;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      console.log("FakeApiAuthBackend::handleRoute:url-method", url, method);

      switch (true) {
        case url.endsWith("/api/user/register") && method === "POST":
          return register();
        case url.endsWith("/security/login") && method === "POST":
          return authenticate();
        case url.endsWith("/api/users") && method === "GET":
          return getUsers();
        case url.endsWith("/api/user") && method === "DELETE":
        case url.match(/\/api\/user\/\d+$/) && method === "DELETE":
          return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(req);
      }
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function deleteUser() {
      if (!isLoggedIn()) return unauthorized();

      users = users.filter((x: any = "") => x.id !== idFromUrl());
      localStorage.setItem("users", JSON.stringify(users));
      return ok();
    }
    function isLoggedIn() {
      console.log("FakeApiAuthBackend::isLoggedIn:moment() = ", moment());
      console.log(
        "FakeApiAuthBackend::isLoggedIn:moment().isBefore(getExpiration()) = ",
        moment().isBefore(getExpiration())
      );

      return (
        headers.get("Authorization") === "Bearer fake-api-jwt-token" &&
        moment().isBefore(getExpiration())
      );
    }

    function getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const id_token = localStorage.getItem("id_token");
      let expiresAt;
      let expiresMoment;
      if (expiration) {
        expiresAt = JSON.parse(expiration);
        expiresMoment = moment(expiresAt);
      }
      console.log("FakeApiAuthBackend::isLoggedIn::headers = ", headers);
      console.log("expiration = ", expiration);
      console.log("expiresAt = ", expiresAt);
      console.log("expiresMoment = ", expiresMoment);
      console.log("id_token = ", id_token);
      return moment(expiresAt);
    }

    // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x: User) => x.username === username && x.password === password
      );
      if (!user) {
        return error("Username or password is incorrect");
      }

      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: "fake-api-jwt-token",
      });
    }

    function register() {
      const requestedUser = body;

      if (
        users.find((user: User) => user.username === requestedUser.username)
      ) {
        return error(
          'Username "' + requestedUser.username + '" is already taken'
        );
      }

      requestedUser.id = users.length
        ? Math.max(...users.map((x: User) => x.id)) + 1
        : 1;
      users.push(requestedUser);
      localStorage.setItem("users", JSON.stringify(users));

      return ok();
    }

    // helper functions

    function ok(body: any = "") {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message: string) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function idFromUrl() {
      const urlParts = url.split("/");
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}
