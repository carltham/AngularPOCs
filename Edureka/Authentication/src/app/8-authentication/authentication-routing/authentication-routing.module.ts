import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../_helpers/auth.guard";
import { URL_PATH } from "../../support/url-paths";
import { AuthenticationHomeComponent } from "../authentication-home/authentication-home.component";
import { AuthenticationProtectedComponent } from "../authentication-protected/authentication-protected.component";
import { AuthenticationRegisterComponent } from "../authentication-register/authentication-register.component";
import { AuthenticationComponent } from "../authentication.component";
import { AuthenticationLoginComponent } from "../authentication-login/authentication-login.component";

const authRoutes: Routes = [
  {
    path: URL_PATH.EMPTY,
    component: AuthenticationComponent,
    children: [
      {
        path: URL_PATH.EMPTY,
        redirectTo: URL_PATH.HOME,
        pathMatch: "full",
      },
      { path: URL_PATH.HOME, component: AuthenticationHomeComponent },
      {
        path: URL_PATH.PROTECTED,
        component: AuthenticationProtectedComponent,
        canActivate: [AuthGuard],
      },
      { path: URL_PATH.LOGIN, component: AuthenticationLoginComponent },
      {
        path: URL_PATH.LIST,
        component: AuthenticationLoginComponent,
        data: { list: "true" },
      },
      { path: URL_PATH.REGISTER, component: AuthenticationRegisterComponent },
      {
        path: URL_PATH.LOGOUT,
        component: AuthenticationLoginComponent,
        data: { logout: "true" },
      },
    ],
  },

  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthenticationRoutingModule {}
