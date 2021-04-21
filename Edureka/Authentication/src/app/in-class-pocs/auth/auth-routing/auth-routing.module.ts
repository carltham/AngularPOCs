import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthHomeComponent } from "../auth-home/auth-home.component";
import { AuthLoginComponent } from "../auth-login/auth-login.component";
import { AuthRegisterComponent } from "../auth-register/auth-register.component";
import { URL_PATH } from "../../../support/url-paths";
import { AuthComponent } from "../auth.component";
import { AuthGuard } from "../security/auth.guard";

const authRoutes: Routes = [
  {
    path: URL_PATH.EMPTY,
    component: AuthComponent,
    children: [
      {
        path: URL_PATH.EMPTY,
        redirectTo: URL_PATH.HOME,
        pathMatch: "full",
      },
      {
        path: URL_PATH.HOME,
        component: AuthHomeComponent,
        canActivate: [AuthGuard],
      },
      { path: URL_PATH.LOGIN, component: AuthLoginComponent },
      { path: URL_PATH.REGISTER, component: AuthRegisterComponent },
    ],
  },

  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
