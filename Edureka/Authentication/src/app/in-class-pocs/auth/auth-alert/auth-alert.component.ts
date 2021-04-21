import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthAlertService } from "../_services/auth-alert.service";

@Component({
  selector: "app-alert",
  templateUrl: "./auth-alert.component.html",
  styleUrls: ["./auth-alert.component.css"],
})
export class AuthAlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  message: any;

  constructor(private alertService: AuthAlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.getAlert().subscribe((message) => {
      console.log("message = ", message);

      switch (message && message.type) {
        case "success":
          message.cssClass = "alert alert-success";
          break;
        case "error":
          message.cssClass = "alert alert-danger";
          break;
      }

      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
