import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../../domain/user";
import { MessengerService } from "../../services/messenger.service";
import { Message, MessageType } from "../../domain/message";

@Component({
  selector: "app-validation-home",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class AuthenticationRegisterComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    let generatedId = Math.floor(Math.random() * 1000);
    let user: User = {
      id: generatedId,
      firstName: "Tom " + generatedId,
      lastName: "Pretty " + generatedId,
      auth: {
        id: generatedId,
        username: "tom" + generatedId,
        password: "pretty",
        token: null,
      },
    };

    this.authenticationService.register(user).subscribe((data: any) => {
      console.log("register::res = ", data);
      let message = new Message({
        type: MessageType.Success,
        text: data.result,
      });
      this.messengerService.success(data.result);
    });
  }
}
