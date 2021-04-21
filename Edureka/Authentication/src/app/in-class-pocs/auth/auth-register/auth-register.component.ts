import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { SystemService } from "../../../8-authentication/services/system.service";
import { emptyUser } from "../../../domain/user";
import { URL_PATH } from "../../../support/url-paths";
import { AuthAlertService } from "../_services/auth-alert.service";
import { AuthUserService } from "../_services/auth-user.service";

@Component({
  selector: "app-register",
  templateUrl: "./auth-register.component.html",
  styleUrls: ["./auth-register.component.css"],
})
export class AuthRegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private systemService: SystemService,
    private userService: AuthUserService,
    private alertService: AuthAlertService
  ) {
    if (this.systemService.loggedinUser !== emptyUser) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success("Registration successful", true);
          setTimeout(() => {
            this.router.navigate([
              URL_PATH.INCLASS + "/" + URL_PATH.AUTH + "/" + URL_PATH.LOGIN,
            ]);
          }, 3000);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
