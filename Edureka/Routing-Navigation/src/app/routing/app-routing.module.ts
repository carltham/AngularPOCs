import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { appRoutes } from "./app-routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
    }),
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
