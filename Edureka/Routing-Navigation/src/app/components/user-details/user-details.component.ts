import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RoutesRecognized,
} from "@angular/router";
import { Header } from "src/app/domain/Header";
import { User } from "src/app/domain/user";
import { ROUTE_PATH } from "src/app/routing/routes";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  selectedUserId: number = -1;
  selectedUser: User;
  previousUrl: string = "";

  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute,
    private userService: UserService
  ) {
    this.selectedUser = userService.getUser(-1);
  }

  selectMe() {
    this.router.navigate([ROUTE_PATH.HOME, { id: this.selectedUserId }]);
  }

  ngOnInit(): void {
    let id = this.routeInfo.snapshot.paramMap.get("id");
    let number = id ? parseInt(id, 10) : -1;
    this.selectedUserId = "" + number !== "NaN" ? number : -1;
    this.selectedUser = this.userService.getUser(this.selectedUserId);
    console.log("number = ", number);
    console.log("this.selectedUserId = ", this.selectedUserId);
  }

  get headers(): Header[] {
    return this.userService.getHeaders();
  }
}
