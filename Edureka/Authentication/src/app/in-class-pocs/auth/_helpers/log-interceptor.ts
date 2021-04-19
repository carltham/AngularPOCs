import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, tap } from "rxjs/operators";
import { LogService } from "../_services/log-service";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private log: LogService) {
    console.log("LoggingInterceptor::constructor");
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("LoggingInterceptor::intercept()");
    const started = Date.now();
    let ok: string;

    // Log - start request
    this.log.add("Start request -> " + `${req.method} ${req.urlWithParams}`);

    return next.handle(req).pipe(
      tap(
        // Success Path
        (event) => (ok = event instanceof HttpResponse ? "succeeded" : ""),
        // Fail Path
        (error) => (ok = "failed")
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const log = `${req.method} ${req.urlWithParams}
             ,  ${ok} in ${elapsed} ms.`;

        // Log - end response
        this.log.add("End request: " + log);
      })
    );
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
];
