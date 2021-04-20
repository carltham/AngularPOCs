import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any) {
    console.error(error?.error.message);
    alert("error=" + error?.error.message);
  }
}
