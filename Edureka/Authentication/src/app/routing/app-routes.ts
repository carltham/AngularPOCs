import { Routes } from "@angular/router";
import { FakeEmplListComponent } from "../components/1-3-module/fake-employees-list.component";
import { HttpClientComponent } from "../components/4-services/http-client/http-client.component";
import { InjectionComponent } from "../components/4-services/injection/injection.component";
import { ServicesHomeComponent } from "../components/4-services/services-home/services-home.component";
import { ServicesComponent } from "../components/4-services/services.component";
import { ShoppingContactComponent } from "../components/5-navigation/shopping-contact/shopping-contact.component";
import { ShoppingHomeComponent } from "../components/5-navigation/shopping-home/shopping-home.component";
import { ProductDetailsComponent } from "../components/5-navigation/shopping-product/product-details/product-details.component";
import { ShoppingProductComponent } from "../components/5-navigation/shopping-product/shopping-product.component";
import { ShoppingComponent } from "../components/5-navigation/shopping.component";
import { FormsHomeComponent } from "../components/6-forms/forms-home/forms-home.component";
import { FormsComponent } from "../components/6-forms/forms.component";
import { FormsReactiveComponent } from "../components/6-forms/reactive-forms/reactive-forms.component";
import { FormsTemplateComponent } from "../components/6-forms/template-forms/template-forms.component";
import { ValidationReactiveComponent } from "../components/7-validation/reactive-validation/reactive-validation.component";
import { ValidationTemplateComponent } from "../components/7-validation/template-validation/template-validation.component";
import { ValidationHomeComponent } from "../components/7-validation/validation-home/validation-home.component";
import { ValidationComponent } from "../components/7-validation/validation.component";
import { ErrorComponent } from "../components/error/error.component";
import { HomeComponent } from "../components/home/home.component";
import { UserDetailsComponent } from "../components/home/user-details/user-details.component";
import { URL_PATH } from "../support/url-paths";
import { AuthenticationComponent } from "../8-authentication/authentication.component";

export const appRoutes: Routes = [
  {
    path: URL_PATH.EMPTY,
    redirectTo: URL_PATH.AUTH,
    pathMatch: "full",
  },
  { path: URL_PATH.HOME, component: HomeComponent },
  { path: URL_PATH.HOMEID, component: UserDetailsComponent },
  { path: URL_PATH.MOD4, component: FakeEmplListComponent },
  {
    path: URL_PATH.SERVICES,
    component: ServicesComponent,
    children: [
      {
        path: URL_PATH.EMPTY,
        redirectTo: URL_PATH.HOME,
        pathMatch: "full",
      },
      {
        path: URL_PATH.HOME,
        component: ServicesHomeComponent,
      },
      {
        path: URL_PATH.INJECTION,
        component: InjectionComponent,
      },
      {
        path: URL_PATH.HTTPCLIENT,
        component: HttpClientComponent,
      },
    ],
  },
  {
    path: URL_PATH.ROUTING,
    component: ShoppingComponent,
    children: [
      {
        path: URL_PATH.HOME,
        component: ShoppingHomeComponent,
      },
      {
        path: URL_PATH.PRODUCTS,
        component: ShoppingProductComponent,
      },
      { path: URL_PATH.PRODUCTSID, component: ProductDetailsComponent },
      {
        path: URL_PATH.CONTACT,
        component: ShoppingContactComponent,
      },
    ],
  },
  {
    path: URL_PATH.FORMS,
    component: FormsComponent,
    children: [
      {
        path: URL_PATH.EMPTY,
        redirectTo: URL_PATH.HOME,
        pathMatch: "full",
      },
      {
        path: URL_PATH.HOME,
        component: FormsHomeComponent,
      },
      {
        path: URL_PATH.BY_TEMPLATE,
        component: FormsTemplateComponent,
      },
      {
        path: URL_PATH.BY_REACTIVE,
        component: FormsReactiveComponent,
      },
    ],
  },
  {
    path: URL_PATH.VALIDATION,
    component: ValidationComponent,
    children: [
      {
        path: URL_PATH.EMPTY,
        redirectTo: URL_PATH.HOME,
        pathMatch: "full",
      },
      {
        path: URL_PATH.HOME,
        component: ValidationHomeComponent,
      },
      {
        path: URL_PATH.BY_TEMPLATE,
        component: ValidationTemplateComponent,
      },
      {
        path: URL_PATH.BY_REACTIVE,
        component: ValidationReactiveComponent,
      },
    ],
  },
  {
    path: URL_PATH.AUTH,
    loadChildren: () =>
      import("../8-authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: URL_PATH.INCLASS,
    loadChildren: () =>
      import("../in-class-pocs/pocs.module").then((m) => m.PocsModule),
  },
  {
    path: URL_PATH.NOTFOUND,
    component: ErrorComponent,
    data: { message: "Page not found!" },
  },
  { path: URL_PATH.OTHER, component: ErrorComponent },
];
