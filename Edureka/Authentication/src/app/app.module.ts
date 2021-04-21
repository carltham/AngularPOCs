import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FakeEmplListComponent } from "./components/1-3-module/fake-employees-list.component";
import { HttpClientComponent } from "./components/4-services/http-client/http-client.component";
import { InjectionComponent } from "./components/4-services/injection/injection.component";
import { ServicesHomeComponent } from "./components/4-services/services-home/services-home.component";
import { ServicesComponent } from "./components/4-services/services.component";
import { ShoppingContactComponent } from "./components/5-navigation/shopping-contact/shopping-contact.component";
import { ShoppingHomeComponent } from "./components/5-navigation/shopping-home/shopping-home.component";
import { ProductDetailsComponent } from "./components/5-navigation/shopping-product/product-details/product-details.component";
import { ShoppingProductComponent } from "./components/5-navigation/shopping-product/shopping-product.component";
import { ShoppingComponent } from "./components/5-navigation/shopping.component";
import { FormsHomeComponent } from "./components/6-forms/forms-home/forms-home.component";
import { FormsComponent } from "./components/6-forms/forms.component";
import { FormsReactiveComponent } from "./components/6-forms/reactive-forms/reactive-forms.component";
import { FormsTemplateComponent } from "./components/6-forms/template-forms/template-forms.component";
import { ValidationReactiveComponent } from "./components/7-validation/reactive-validation/reactive-validation.component";
import { ValidationTemplateComponent } from "./components/7-validation/template-validation/template-validation.component";
import { ValidationHomeComponent } from "./components/7-validation/validation-home/validation-home.component";
import { ValidationComponent } from "./components/7-validation/validation.component";
import { ErrorComponent } from "./components/error/error.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { UserDetailsComponent } from "./components/home/user-details/user-details.component";
import { ConfirmEqualValidatorDirective } from "./directives/confirm-equal-validator.directive";
import { rowDirective } from "./directives/row.directive";
import { AppRoutingModule } from "./routing/app-routing.module";
import { ExternalEmplService } from "./services/4-services/external-employee-service";
import { FakeEmplService } from "./services/4-services/fake-employee-service";
import { NavHandlerService } from "./services/5-navigation/nav-handler.service";
import { ProductsService } from "./services/5-navigation/shopping/product/products-service.service";
import { GlobalErrorHandler } from "./interceptors/globalErrorHandler";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FakeEmplListComponent,
    HomeComponent,
    rowDirective,
    InjectionComponent,
    HttpClientComponent,
    ErrorComponent,
    ShoppingHomeComponent,
    ShoppingProductComponent,
    ShoppingContactComponent,
    ShoppingComponent,
    ProductDetailsComponent,
    ServicesComponent,
    ServicesHomeComponent,
    FormsComponent,
    FormsHomeComponent,
    FormsTemplateComponent,
    FormsReactiveComponent,
    ValidationComponent,
    ValidationHomeComponent,
    ValidationTemplateComponent,
    ValidationReactiveComponent,
    ConfirmEqualValidatorDirective,
    UserDetailsComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    FakeEmplService,
    ExternalEmplService,
    NavHandlerService,
    ProductsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
