import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../../../8-authentication/services/authentication.service";
import { SystemService } from "../../../8-authentication/services/system.service";
import { emptyUser } from "../../../domain/user";
import { AuthAlertService } from "../_services/auth-alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.css"],
})
export class AuthLoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  returnUrl: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private systemService: SystemService,
    private alertService: AuthAlertService
  ) {
    console.log(
      "this.systemService.loggedinUser = ",
      this.systemService.loggedinUser
    );

    if (this.systemService.loggedinUser !== emptyUser) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    let credentials = {
      username: this.f.username.value,
      password: this.f.password.value,
    };
    this.authenticationService.login(credentials);
    if (this.systemService.isLoggedIn()) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.alertService.error(
        "Something went wrong at login of user with username : " +
          credentials.username
      );
      this.loading = false;
    }
  }
}
