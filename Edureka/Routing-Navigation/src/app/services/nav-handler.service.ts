import { Injectable } from "@angular/core";
import { Router, RoutesRecognized } from "@angular/router";
import { filter, pairwise } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NavHandlerService {
  currentUrl: string = "";
  previousUrl: string = "";
  historyPointer = 0;
  routerLocked = false;
  historyUrlsArray: string[] = [];
  startingUrl = "/";
  constructor(private router: Router) {
    this.historyUrlsArray.push(this.startingUrl);
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        console.log("this.routerLocked = ", this.routerLocked);
        if (this.routerLocked) {
          this.routerLocked = false;
        } else {
          if (this.historyPointer == this.historyUrlsArray.length - 1) {
            console.log("previous url", this.previousUrl);
            console.log("current url", this.currentUrl);
          } else {
            this.historyUrlsArray = this.historyUrlsArray.slice(
              0,
              this.historyPointer + 1
            );
          }
          this.previousUrl = events[0].urlAfterRedirects;
          this.currentUrl = events[1].urlAfterRedirects;
          this.historyUrlsArray.push(this.currentUrl);
          this.historyPointer++;
        }
        console.log("this.historyPointer = ", this.historyPointer);
        console.log("this.historyUrlsArray = ", this.historyUrlsArray);
      });

    this.router.navigate([this.startingUrl]);
  }

  toNext() {
    let maxHistoryNr = this.historyUrlsArray.length - 1;
    this.historyPointer++;
    this.historyPointer =
      this.historyPointer > maxHistoryNr ? maxHistoryNr : this.historyPointer;

    this.currentUrl = this.historyUrlsArray[this.historyPointer];
    this.previousUrl = this.historyUrlsArray[this.historyPointer - 1];
    this.routerLocked = true;
    console.log("this.currentUrl = ", this.currentUrl);

    if (this.currentUrl) {
      this.router.navigate([this.currentUrl]);
    }
  }

  toPrevious() {
    this.historyPointer--;
    this.historyPointer < 0 ? 0 : this.historyPointer;

    this.currentUrl = this.historyUrlsArray[this.historyPointer];
    this.previousUrl = this.historyUrlsArray[this.historyPointer + 1];
    this.routerLocked = true;
    if (this.currentUrl) {
      this.router.navigate([this.currentUrl]);
    }
  }
  getNext(): string {
    return this.historyUrlsArray[this.historyPointer + 1];
  }
  getPrevious(): string {
    return this.historyUrlsArray[this.historyPointer - 1];
  }
}
