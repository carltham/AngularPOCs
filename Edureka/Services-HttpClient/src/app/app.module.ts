import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { GlobalErrorHandler } from "./services/globalErrorHandler";
import { colorDirective } from "./directives/color.directive";
import { EmployeeDataService } from "./services/employeeDataService";
import { NewEmployeeComponent } from "./components/newemployee/newemployee.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    colorDirective,
    NewEmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    EmployeeDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
