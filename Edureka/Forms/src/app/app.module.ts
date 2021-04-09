import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

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

@NgModule({
  declarations: [
    AppComponent,
    FakeEmplListComponent,
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
    LoginComponent,
    ShoppingHomeComponent,
    ShoppingProductComponent,
    ShoppingContactComponent,
    ShoppingComponent,
    ProductDetailsComponent,
    ServicesComponent,
    ServicesHomeComponent,
    InClassComponent,
    InClassHomeComponent,
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
