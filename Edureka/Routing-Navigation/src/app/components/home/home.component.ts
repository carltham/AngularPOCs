import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { User } from "src/app/domain/user";
import { ROUTE_PATH } from "src/app/routing/routes";
import { UserService } from "src/app/services/user.service";
import { userController } from "tserver/src/controllers";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  knownUsers: User[] = [];
  selectedUser: User = { id: -1, fullName: "", userName: "" };
  selectedUserId: number = -1;
  selectedResponseId: number = -1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  doLogin() {
    this.router.navigate(["/my-page/" + -11]);
  }

  selectUser(id: number) {
    this.selectedUserId = id;
    const foundUser = this.knownUsers.find((user) => user.id === id);
    if (foundUser) {
      this.selectedUser = foundUser;
    }
  }

  hasControlledUserDetails(id: number) {
    return this.selectedResponseId === id;
  }

  showDetails(id: number) {
    this.router.navigate([ROUTE_PATH.HOMEID.replace(":id", "" + id)]);
  }

  ngOnInit(): void {
    this.knownUsers = this.userService.getUsers();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let value = params.get("id");
      if (value) {
        this.selectedResponseId = parseInt(value);
      }
    });
  }
}
