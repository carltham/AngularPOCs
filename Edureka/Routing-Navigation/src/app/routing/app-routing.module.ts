import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FakeEmplListComponent } from "../components/fake-employees-list/fake-employees-list.component";
import { NewIntEmplComponent } from "../components/new-internal-employee/new-internal-employee.component";
import { ExtEmplListComponent } from "../components/external-employees-list/external-employees-list.component";
import { appRoutes } from "./routes";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
