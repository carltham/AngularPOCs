import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { GlobalErrorHandler } from './services/globalErrorHandler';
import { colorDirective } from './directives/color.directive';
import { EmployeeDataService } from './services/employeeDataService';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, colorDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    EmployeeDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
