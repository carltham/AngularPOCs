import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { Subscription } from "rxjs";

import { MessengerService } from "../../services/messenger.service";
import { Message, MessageType } from "../../domain/message";

@Component({
  selector: "message",
  templateUrl: "./message-display.component.html",
  styleUrls: ["./message-display.component.css"],
})
export class MessageDisplayComponent implements OnInit, OnDestroy {
  @Input() id = "default-message";
  @Input() fade = true;

  messages: Message[] = [];
  messageSubscription: Subscription | undefined;
  routeSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private messageService: MessengerService
  ) {}

  ngOnInit() {
    // subscribe to new message notifications
    this.messageSubscription = this.messageService
      .retrieveMessageFor(this.id)
      .subscribe((message: Message) => {
        console.log("MessageDisplayComponent:ngOnInit::message = ", message);

        // clear messages when an empty message is received
        if (!message.text) {
          // filter out messages without 'keepAfterRouteChange' flag
          this.messages = this.messages.filter(
            (message) => message.keepAfterRouteChange
          );

          // remove 'keepAfterRouteChange' flag on the rest
          this.messages.forEach(
            (message) => delete message.keepAfterRouteChange
          );
          return;
        }

        // add message to array
        this.messages.push(message);

        // auto close message if required
        if (message.autoClose) {
          setTimeout(() => this.removeMessage(message), 3000);
        }
      });

    // clear messages on location change
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.messageService.clearMessage(this.id);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.messageSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }

  removeMessage(message: Message) {
    // check if already removed to prevent error on auto close
    if (!this.messages.includes(message)) return;

    if (this.fade) {
      // fade out message
      let foundMessage = this.messages.find(
        (searchedMessage) => searchedMessage === message
      );
      if (foundMessage) {
        foundMessage.fade = true;
      }

      // remove message after faded out
      setTimeout(() => {
        this.messages = this.messages.filter((x) => x !== message);
      }, 250);
    } else {
      // remove message
      this.messages = this.messages.filter((x) => x !== message);
    }
  }

  cssClass(message: Message) {
    if (!message) return;

    const classes = ["message", "message-dismissable"];

    const messageTypeClass = {
      [MessageType.Success]: "message-success",
      [MessageType.Error]: "message-danger",
      [MessageType.Info]: "message-info",
      [MessageType.Warning]: "message-warning",
    };

    classes.push(messageTypeClass[message.type]);

    if (message.fade) {
      classes.push("fade-error");
    }

    return classes.join(" ");
  }
}
