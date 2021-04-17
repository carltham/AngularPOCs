import { Component, OnInit } from "@angular/core";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(private navHandler: NavHandlerService) {}

  hasNext() {
    let hasNext = this.navHandler.getNext() !== undefined;
    return hasNext;
  }

  hasPrevious() {
    let hasPrevious = this.navHandler.getPrevious() !== undefined;
    return hasPrevious;
  }

  toNext() {
    this.navHandler.toNext();
  }

  toPrevious() {
    this.navHandler.toPrevious();
  }

  ngOnInit(): void {}
}
