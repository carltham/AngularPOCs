import { Routes } from "@angular/router";
import { FakeEmplListComponent } from "../components/fake-employees-list/fake-employees-list.component";
import { NewIntEmplComponent } from "../components/new-internal-employee/new-internal-employee.component";
import { ExtEmplListComponent } from "../components/external-employees-list/external-employees-list.component";
import { HomeComponent } from "../components/home/home.component";
import { ErrorComponent } from "../components/error/error.component";
import { MyPageComponent } from "../components/mypage/mypage.component";
import { UserDetailsComponent } from "../components/user-details/user-details.component";

export const ROUTE_PATH = {
  EMPTY: "",
  HOMEID: "home/:id",
  HOME: "home",
  MOD4: "until-module-4",
  INJECTION: "services-injection",
  HTTPCLIENT: "services-httpclient",
  LOGIN: "login",
  SECURED: "secure-area",
  MYPAGEID: "my-page/:id",
  MYPAGE: "my-page",
  OTHER: "**",
};
export const appRoutes: Routes = [
  { path: ROUTE_PATH.EMPTY, redirectTo: ROUTE_PATH.HOME, pathMatch: "full" },
  { path: ROUTE_PATH.HOME, component: HomeComponent },
  { path: ROUTE_PATH.HOMEID, component: UserDetailsComponent },
  { path: ROUTE_PATH.MOD4, component: FakeEmplListComponent },
  { path: ROUTE_PATH.INJECTION, component: NewIntEmplComponent },
  { path: ROUTE_PATH.HTTPCLIENT, component: ExtEmplListComponent },
  { path: ROUTE_PATH.SECURED, redirectTo: ROUTE_PATH.LOGIN, pathMatch: "full" },
  { path: ROUTE_PATH.MYPAGEID, component: MyPageComponent },
  { path: ROUTE_PATH.MYPAGE, component: MyPageComponent },
  { path: ROUTE_PATH.OTHER, component: ErrorComponent },
];

// { path: "external-employee/:id", component: ExternalEmployee },
