import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { Message, MessageType } from "../domain/message";

@Injectable({
  providedIn: "root",
})
export class MessengerService {
  private messageQueue = new Subject<Message>();
  private defaultId = "default-message";

  // enable subscribing to messages observable
  retrieveMessageFor(id = this.defaultId): Observable<Message> {
    return this.messageQueue
      .asObservable()
      .pipe(filter((x) => x && x.id === id));
  }

  // convenience methods
  success(text: string, options?: any) {
    this.sendMessage(
      new Message({ ...options, type: MessageType.Success, text })
    );
  }

  error(text: string, options?: any) {
    this.sendMessage(
      new Message({ ...options, type: MessageType.Error, text })
    );
  }

  info(text: string, options?: any) {
    this.sendMessage(new Message({ ...options, type: MessageType.Info, text }));
  }

  warn(text: string, options?: any) {
    this.sendMessage(
      new Message({ ...options, type: MessageType.Warning, text })
    );
  }

  // main sendMessage method
  sendMessage(message: Message) {
    message.id = message.id || this.defaultId;
    this.messageQueue.next(message);
  }

  // clear messages
  clearMessage(id = this.defaultId) {
    this.messageQueue.next(new Message({ id }));
  }
}
