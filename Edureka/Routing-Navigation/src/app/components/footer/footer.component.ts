import { Component, OnInit } from "@angular/core";
import { NavHandlerService } from "src/app/services/nav-handler.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(private navHandler: NavHandlerService) {}

  hasNext() {
    let hasNext = this.navHandler.getNext() !== undefined;
    // console.log("hasNext = ", hasNext);
    return hasNext;
  }

  hasPrevious() {
    let hasPrevious = this.navHandler.getPrevious() !== undefined;
    // console.log("hasPrevious = ", hasPrevious);
    return hasPrevious;
  }

  toNext() {
    console.log("Navigating to next url : ", this.navHandler.getNext());
    this.navHandler.toNext();
  }

  toPrevious() {
    console.log("Navigating to previour url : ", this.navHandler.getPrevious());
    this.navHandler.toPrevious();
  }

  ngOnInit(): void {}
}
