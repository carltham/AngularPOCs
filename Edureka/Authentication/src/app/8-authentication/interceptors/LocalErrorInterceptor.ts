import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor,
} from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { MessengerService } from "../services/messenger.service";
import { Injectable } from "@angular/core";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Injectable()
export class LocalErrorInterceptor implements HttpInterceptor {
  constructor(private messenger: MessengerService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((response: HttpErrorResponse) => {
        let text = "";
        if (response.error instanceof ErrorEvent) {
          // handle client-side error
          text = `Error: ${response.error.message}`;
        } else {
          // handle server-side error
          text = response.error.status
            ? `Error Status: ${response.error.status}\n`
            : "" + `Message: ${response.error.message.text}`;
        }
        let messageText = response.error.message;
        // let message = JSON.parse(messageText);
        console.log("response = ", response);
        console.log("messageText = ", messageText);
        this.messenger.sendMessage(messageText);
        return throwError(text);
      })
    );
  }
}
