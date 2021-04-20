import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthInterceptor } from "../8-authentication/interceptors/auth-interceptor";
import { FakeApiAuthBackend } from "../8-authentication/interceptors/fake-api-auth-backend";
import { ErrorInterceptor } from "../in-class-pocs/auth/_helpers/error.interceptor";
import { fakeBackendProvider } from "../in-class-pocs/auth/_helpers/fake-backend";
import { JwtInterceptor } from "../in-class-pocs/auth/_helpers/jwt.interceptor";
import { httpInterceptorProviders } from "../in-class-pocs/auth/_helpers/log-interceptor";
import { LogService } from "../in-class-pocs/auth/_services/log-service";
import { appRoutes } from "./app-routes";

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeApiAuthBackend, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    LogService,
    httpInterceptorProviders,
    fakeBackendProvider,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
