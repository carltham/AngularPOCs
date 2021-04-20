import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationHomeComponent } from "./authentication-home/authentication-home.component";
import { AuthenticationLoginComponent } from "./authentication-login/authentication-login.component";
import { AuthenticationRegisterComponent } from "./authentication-register/authentication-register.component";
import { AuthenticationRoutingModule } from "./authentication-routing/authentication-routing.module";
import { AuthenticationComponent } from "./authentication.component";

@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthenticationLoginComponent,
    AuthenticationRegisterComponent,
    AuthenticationHomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AuthenticationComponent],
})
export class AuthenticationModule {}
