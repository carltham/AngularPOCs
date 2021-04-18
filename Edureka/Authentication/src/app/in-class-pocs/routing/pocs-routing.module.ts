import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { pocRoutes } from "./pocs-routes";

@NgModule({
  imports: [RouterModule.forChild(pocRoutes)],
  providers: [],
  exports: [RouterModule],
})
export class PocsRoutingModule {}
