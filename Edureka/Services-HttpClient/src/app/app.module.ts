import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FakeEmplListComponent } from "./components/fake-employees-list/fake-employees-list.component";
import { GlobalErrorHandler } from "./support/globalErrorHandler";
import { rowDirective } from "./directives/row.directive";
import { FakeEmplService } from "./services/fake-employee-service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NewIntEmplComponent } from "./components/new-internal-employee/new-internal-employee.component";

@NgModule({
  declarations: [
    AppComponent,
    FakeEmplListComponent,
    rowDirective,
    NewIntEmplComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    FakeEmplService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
