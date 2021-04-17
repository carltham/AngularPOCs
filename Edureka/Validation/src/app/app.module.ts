import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./routing/app-routing.module";
import { AuthService } from "./services/in-class/auth.service";
import { AuthGuardService } from "./services/in-class/auth-guard.service";
import { BlogComponent } from "./components/in-class/blog/blog.component";
import { ComponentDeactivationGuardService } from "./services/in-class/component-deactivation-guard.service";
import { ErrorComponent } from "./components/error/error.component";
import { ExternalEmplService } from "./services/4-services/external-employee-service";
import { FakeEmplListComponent } from "./components/1-3-module/fake-employees-list.component";
import { FakeEmplService } from "./services/4-services/fake-employee-service";
import { FooterComponent } from "./components/in-class/footer/footer.component";
import { GlobalErrorHandler } from "./support/globalErrorHandler";
import { HomeComponent } from "./components/in-class/home/home.component";
import { HttpClientComponent } from "./components/4-services/http-client/http-client.component";
import { HttpClientModule } from "@angular/common/http";
import { InClassComponent } from "./components/in-class/in-class.component";
import { InClassHomeComponent } from "./components/in-class/in-class-home/in-class-home.component";
import { InjectionComponent } from "./components/4-services/injection/injection.component";
import { LoginComponent } from "./components/in-class/login/login.component";
import { MyPageComponent } from "./components/in-class/mypage/mypage.component";
import { NavHandlerService } from "./services/5-navigation/nav-handler.service";
import { NewBlogComponent } from "./components/in-class/blog/new-blog/new-blog.component";
import { OtherBlogComponent } from "./components/in-class/blog/other-blog/other-blog.component";
import { ProductDetailsComponent } from "./components/5-navigation/shopping-product/product-details/product-details.component";
import { ProductsService } from "./services/5-navigation/shopping/product/products-service.service";
import { rowDirective } from "./directives/row.directive";
import { ShoppingComponent } from "./components/5-navigation/shopping.component";
import { ShoppingContactComponent } from "./components/5-navigation/shopping-contact/shopping-contact.component";
import { ShoppingHomeComponent } from "./components/5-navigation/shopping-home/shopping-home.component";
import { ShoppingProductComponent } from "./components/5-navigation/shopping-product/shopping-product.component";
import { ServerDetailsComponent } from "./components/in-class/server-details/server-details.component";
import { ServerEditorComponent } from "./components/in-class/server-editor/server-editor.component";
import { ServersListComponent } from "./components/in-class/servers-list/servers-list.component";
import { ServerResolverService } from "./services/in-class/server-resolver.service";
import { ServersService } from "./services/in-class/servers.service";
import { ServicesComponent } from "./components/4-services/services.component";
import { ServicesHomeComponent } from "./components/4-services/services-home/services-home.component";
import { UserDetailsComponent } from "./components/in-class/home/user-details/user-details.component";
import { DemoFormsComponent } from "./components/in-class/demo-forms/demo-forms.component";
import { DemoFormsHomeComponent } from "./components/in-class/demo-forms/demo-forms-home/demo-forms-home.component";
import { DemoFormsTemplateComponent } from "./components/in-class/demo-forms/demo-forms-template/demo-forms-template.component";
import { DemoFormsReactiveComponent } from "./components/in-class/demo-forms/demo-forms-reactive/demo-forms-reactive.component";
import { FormsComponent } from "./components/6-forms/forms.component";
import { FormsHomeComponent } from "./components/6-forms/forms-home/forms-home.component";
import { FormsTemplateComponent } from "./components/6-forms/template-forms/template-forms.component";
import { FormsReactiveComponent } from "./components/6-forms/reactive-forms/reactive-forms.component";
import { DemoValidationComponent } from "./components/in-class/demo-validation/demo-validation.component";
import { DemoValidationHomeComponent } from "./components/in-class/demo-validation/demo-validation-home/demo-validation-home.component";
import { DemoValidationTemplateComponent } from "./components/in-class/demo-validation/demo-validation-template/demo-validation-template.component";
import { DemoValidationReactiveComponent } from "./components/in-class/demo-validation/demo-validation-reactive/demo-validation-reactive.component";
import { ValidationComponent } from "./components/7-validation/validation.component";
import { ValidationHomeComponent } from "./components/7-validation/validation-home/validation-home.component";
import { ValidationTemplateComponent } from "./components/7-validation/template-validation/template-validation.component";
import { ValidationReactiveComponent } from "./components/7-validation/reactive-validation/reactive-validation.component";
import { MustMatchDirective } from "./components/in-class/demo-validation/_helpers/must-match.directive";
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    FakeEmplListComponent,
    LoginComponent,
    rowDirective,
    InjectionComponent,
    HttpClientComponent,
    HomeComponent,
    ErrorComponent,
    MyPageComponent,
    FooterComponent,
    UserDetailsComponent,
    BlogComponent,
    NewBlogComponent,
    OtherBlogComponent,
    ServerDetailsComponent,
    ServerEditorComponent,
    ServersListComponent,
    ShoppingHomeComponent,
    ShoppingProductComponent,
    ShoppingContactComponent,
    ShoppingComponent,
    ProductDetailsComponent,
    ServicesComponent,
    ServicesHomeComponent,
    InClassComponent,
    InClassHomeComponent,
    DemoFormsComponent,
    DemoFormsHomeComponent,
    DemoFormsTemplateComponent,
    DemoFormsReactiveComponent,
    DemoValidationComponent,
    DemoValidationHomeComponent,
    DemoValidationTemplateComponent,
    DemoValidationReactiveComponent,
    FormsComponent,
    FormsHomeComponent,
    FormsTemplateComponent,
    FormsReactiveComponent,
    ValidationComponent,
    ValidationHomeComponent,
    ValidationTemplateComponent,
    ValidationReactiveComponent,
    MustMatchDirective,
    ConfirmEqualValidatorDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    FakeEmplService,
    ExternalEmplService,
    NavHandlerService,
    ServersService,
    AuthService,
    AuthGuardService,
    ComponentDeactivationGuardService,
    ServerResolverService,
    ProductsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
