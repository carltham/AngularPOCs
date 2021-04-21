import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationRoutingModule } from "./authentication-routing/authentication-routing.module";
import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationHomeComponent } from "./comps/home/home.component";
import { AuthenticationLoginComponent } from "./comps/login/login.component";
import { AuthenticationRegisterComponent } from "./comps/register/register.component";
import { MessageDisplayComponent } from "./comps/message-display/message-display.component";

@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthenticationLoginComponent,
    AuthenticationRegisterComponent,
    AuthenticationHomeComponent,
    MessageDisplayComponent,
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
