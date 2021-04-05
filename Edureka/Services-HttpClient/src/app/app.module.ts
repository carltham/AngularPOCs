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

@NgModule({
  declarations: [
    AppComponent,
    FakeEmplListComponent,
    rowDirective,
    NewIntEmplComponent,
    ExtEmplListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    FakeEmplService,
    ExternalEmplService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
