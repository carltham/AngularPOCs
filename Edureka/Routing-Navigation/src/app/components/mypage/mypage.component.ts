import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-mypage",
  templateUrl: "./mypage.component.html",
  styleUrls: ["./mypage.component.css"],
})
export class MyPageComponent implements OnInit {
  selectedUserId: number = -1;

  constructor(private router: Router, private routeInfo: ActivatedRoute) { }

  goHome() {
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    let id = this.routeInfo.snapshot.paramMap.get("id");
    let number = id ? parseInt(id, 10) : -1;
    this.selectedUserId = "" + number !== "NaN" ? number : -1;
    console.log("number = ", number);
    console.log("this.selectedUserId = ", this.selectedUserId);
  }
}
