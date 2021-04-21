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
import { User, Auth, emptyUser } from "../../domain/user";
import { Message, MessageType } from "../domain/message";
import { environment } from "../environments/environment";

// array in local storage for registered users
let usersString = localStorage.getItem("users");
let users = usersString ? JSON.parse(usersString) : [];

@Injectable()
export class Backend_Simulator_FakeApi implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = req;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      let shortUrl = url.replace(environment.apiUrl, "");
      console.log("shortUrl = ", shortUrl);
      console.log("method = ", method);
      console.log("isLoggedIn() = ", isLoggedIn());

      switch (true) {
        case shortUrl.endsWith("/security/register") && method === "POST":
          return register();
        case shortUrl.endsWith("/security/login") && method === "POST":
          return authenticate();
        case shortUrl.match(/\/api\/user\/\d+$/) && method === "GET":
          return getUser();
        case shortUrl.endsWith("/api/users") && method === "GET":
          return getUsers();
        case shortUrl.match("/api/user/d*") && method === "DELETE":
          return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(req);
      }
    }

    function getUsers() {
      return ok(users);
    }

    function getUser() {
      if (!isLoggedIn()) return unauthorized();
      let foundUser = users.find((x: any = "") => x.id !== idFromUrl());
      return ok(foundUser);
    }

    function isLoggedIn() {
      return headers.get("Authorization") === "Bearer fake-api-jwt-token";
    }

    // route functions

    function authenticate() {
      const adminUser = {
        id: 10000,
        firstName: "Master",
        lastName: "Admin",
        auth: {
          id: 10000,
          username: "admin",
          password: "root123",
          token: "",
        },
      };
      const { username, password } = body;

      let foundUser;
      if (
        username === adminUser.auth.username &&
        password === adminUser.auth.password
      ) {
        foundUser = adminUser;
      } else {
        foundUser = users.find((user: User) => {
          return (
            user.auth?.username === username && user.auth?.password === password
          );
        });
      }
      console.log("authenticate::foundUser = ", foundUser);

      if (!foundUser) {
        return error("Username or password is incorrect");
      }
      foundUser.auth = foundUser.auth
        ? foundUser.auth
        : { id: foundUser.id, username: "", password: "" };
      foundUser.auth.token = "fake-api-jwt-token";
      return ok({
        loggedinUser: {
          id: foundUser.id,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          auth: foundUser.auth,
        },
      });
    }
    function register() {
      const requestedUser = body;

      if (
        users.find(
          (user: User) => user.auth?.username === requestedUser.username
        )
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

      return ok({
        result: "user " + requestedUser.auth.username + " was registered",
      });
    }
    function deleteUser() {
      if (!isLoggedIn()) return unauthorized();

      let user = users.find((listedUser: any) => listedUser.id === idFromUrl());
      users = users.filter((listedUser: any = "") => listedUser.id !== user.id);
      localStorage.setItem("users", JSON.stringify(users));
      return ok({ result: "user " + user.auth.username + " was deleted" });
    }

    // helper functions

    function ok(body: any = "") {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(errorText: string) {
      return throwError({
        error: {
          message: new Message({ type: MessageType.Error, text: errorText }),
        },
      });
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
