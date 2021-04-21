import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { URL_PATH } from "../../support/url-paths";
import { AuthenticationComponent } from "../authentication.component";
import { AuthenticationHomeComponent } from "../comps/home/home.component";
import { AuthenticationLoginComponent } from "../comps/login/login.component";
import { AuthenticationProtectedComponent } from "../comps/protected/protected.component";
import { AuthenticationRegisterComponent } from "../comps/register/register.component";
import { AuthenticationGuard } from "../security/authentication-guard";

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
        canActivate: [AuthenticationGuard],
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
