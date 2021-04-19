import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthAlertComponent } from "./auth-alert/auth-alert.component";
import { AuthHomeComponent } from "./auth-home/auth-home.component";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthRegisterComponent } from "./auth-register/auth-register.component";
import { AuthRoutingModule } from "./auth-routing/auth-routing.module";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthHomeComponent,
    AuthAlertComponent,
  ],
  imports: [ReactiveFormsModule, AuthRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AuthComponent],
})
export class AuthModule {}
