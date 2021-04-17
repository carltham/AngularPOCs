import { Component, OnInit } from "@angular/core";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";

@Component({
  selector: "app-mypage",
  templateUrl: "./mypage.component.html",
  styleUrls: ["./mypage.component.css"],
})
export class MyPageComponent implements OnInit {
  selectedUserId: number = -1;

  constructor(private navHandler: NavHandlerService) {}

  goHome() {
    this.navHandler.toPath("");
  }

  ngOnInit(): void {
    let id;
    this.navHandler.getParam("id", {
      process: (value) => {
        let number = value ? parseInt(value, 10) : -1;
        this.selectedUserId = "" + number !== "NaN" ? number : -1;
      },
    });
  }
}
