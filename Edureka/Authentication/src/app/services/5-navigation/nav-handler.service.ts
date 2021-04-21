import { Injectable } from "@angular/core";
import {
  ActivatedRoute,
  NavigationExtras,
  ParamMap,
  Router,
  RoutesRecognized,
} from "@angular/router";
import { filter, pairwise } from "rxjs/operators";
import { Processor } from "src/app/domain/local/functional-interfaces/processor";
import { AuthenticationService } from "../../8-authentication/services/authentication.service";

@Injectable({
  providedIn: "root",
})
export class NavHandlerService {
  reload(uri: string) {
    this.router.navigate([uri]).then(() => {
      window.location.reload();
    });
  }
  currentUrl: string = "";
  previousUrl: string = "";
  historyPointer = 0;
  routerLocked = false;
  historyUrlsArray: string[] = [];
  startingUrl = "/";
  blockRepettitiveCalls = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
    this.historyUrlsArray.push(this.startingUrl);
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        if (this.routerLocked) {
          this.routerLocked = false;
        } else {
          if (this.historyPointer !== this.historyUrlsArray.length - 1) {
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
      });

    this.router.navigate([this.startingUrl]);
  }

  getParam(paramName: string, processor: Processor) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let value = params.get(paramName);
      if (value) {
        processor.process(value);
      }
    });
  }

  navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate(commands, extras);
  }

  toPath(path: string, params = []) {
    if (params.length === 0) {
      this.router.navigate([path]);
    } else {
      this.router.navigate([path, params]);
    }
  }

  toNext() {
    let maxHistoryNr = this.historyUrlsArray.length - 1;
    this.historyPointer++;
    this.historyPointer =
      this.historyPointer > maxHistoryNr ? maxHistoryNr : this.historyPointer;

    this.currentUrl = this.historyUrlsArray[this.historyPointer];
    this.previousUrl = this.historyUrlsArray[this.historyPointer - 1];
    this.routerLocked = true;

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
