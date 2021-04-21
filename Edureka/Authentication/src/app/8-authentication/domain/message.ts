import { formatDate } from "@angular/common";

export class Message {
  id: string | undefined;
  type: MessageType = MessageType.Info;
  text: string | undefined;
  autoClose: boolean = false;
  keepAfterRouteChange?: boolean = true;
  fade: boolean = true;
  timeStamped: string | null;

  constructor(init?: Partial<Message>) {
    this.timeStamped = formatDate(new Date(), "yyyy/MM/dd->HH:mm:ss", "en");
    Object.assign(this, init);
  }
}

export enum MessageType {
  Success,
  Error,
  Info,
  Warning,
}
