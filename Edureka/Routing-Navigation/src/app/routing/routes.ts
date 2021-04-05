import { Routes } from "@angular/router";
import { FakeEmplListComponent } from "../components/fake-employees-list/fake-employees-list.component";
import { NewIntEmplComponent } from "../components/new-internal-employee/new-internal-employee.component";
import { ExtEmplListComponent } from "../components/external-employees-list/external-employees-list.component";

export const appRoutes: Routes = [
  { path: "until-module-4", component: FakeEmplListComponent },
  { path: "services-injection", component: NewIntEmplComponent },
  { path: "services-httpclient", component: ExtEmplListComponent },
];

// { path: "external-employee/:id", component: ExternalEmployee },
