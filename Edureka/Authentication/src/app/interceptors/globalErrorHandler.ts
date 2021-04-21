import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(response: any) {
    console.error("original response = ", response);
    let message = response?.error ? response.error : response;
    message = message?.message ? message.message : message;
    console.error(message);
  }
}
