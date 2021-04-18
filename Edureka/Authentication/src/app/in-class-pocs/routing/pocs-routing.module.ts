import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { pocRoutes } from "./pocs-routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(pocRoutes, {
      enableTracing: false, // <-- debugging purposes only
    }),
  ],
  providers: [],
  exports: [RouterModule],
})
export class PocsRoutingModule {}
