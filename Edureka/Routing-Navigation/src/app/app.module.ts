import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./routing/app-routing.module";
import { AppComponent } from "./app.component";
import { FakeEmplListComponent } from "./components/fake-employees-list/fake-employees-list.component";
import { GlobalErrorHandler } from "./support/globalErrorHandler";
import { rowDirective } from "./directives/row.directive";
import { FakeEmplService } from "./services/fake-employee-service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NewIntEmplComponent } from "./components/new-internal-employee/new-internal-employee.component";
import { ExternalEmplService } from "./services/external-employee-service";
import { ExtEmplListComponent } from "./components/external-employees-list/external-employees-list.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { MyPageComponent } from "./components/mypage/mypage.component";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { NavHandlerService } from "./services/nav-handler.service";

@NgModule({
  declarations: [
    AppComponent,
    FakeEmplListComponent,
    rowDirective,
    NewIntEmplComponent,
    ExtEmplListComponent,
    HomeComponent,
    ErrorComponent,
    MyPageComponent,
    FooterComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    FakeEmplService,
    ExternalEmplService,
    NavHandlerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
