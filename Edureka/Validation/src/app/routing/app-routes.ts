import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
} from "@angular/router";
import { FakeEmplListComponent } from "../components/1-3-module/fake-employees-list.component";

import { HttpClientComponent } from "../components/4-services/http-client/http-client.component";
import { HomeComponent } from "../components/in-class/home/home.component";
import { ErrorComponent } from "../components/error/error.component";
import { MyPageComponent } from "../components/in-class/mypage/mypage.component";
import { UserDetailsComponent } from "../components/in-class/home/user-details/user-details.component";
import { BlogComponent } from "../components/in-class/blog/blog.component";
import { URL_PATH } from "./url-paths";
import { NewBlogComponent } from "../components/in-class/blog/new-blog/new-blog.component";
import { OtherBlogComponent } from "../components/in-class/blog/other-blog/other-blog.component";
import { ServerDetailsComponent } from "../components/in-class/server-details/server-details.component";
import { ServerEditorComponent } from "../components/in-class/server-editor/server-editor.component";
import { ServersListComponent } from "../components/in-class/servers-list/servers-list.component";
import { AuthGuardService } from "../services/in-class/auth-guard.service";
import { LoginComponent } from "../components/in-class/login/login.component";
import { ShoppingComponent } from "../components/5-navigation/shopping.component";
import { ShoppingProductComponent } from "../components/5-navigation/shopping-product/shopping-product.component";
import { ShoppingContactComponent } from "../components/5-navigation/shopping-contact/shopping-contact.component";
import { ShoppingHomeComponent } from "../components/5-navigation/shopping-home/shopping-home.component";
import { ServicesComponent } from "../components/4-services/services.component";
import { InjectionComponent } from "../components/4-services/injection/injection.component";
import { ServicesHomeComponent } from "../components/4-services/services-home/services-home.component";
import { InClassComponent } from "../components/in-class/in-class.component";
import { InClassHomeComponent } from "../components/in-class/in-class-home/in-class-home.component";
import { ProductDetailsComponent } from "../components/5-navigation/shopping-product/product-details/product-details.component";
import { DemoFormsHomeComponent } from "../components/in-class/demo-forms/demo-forms-home/demo-forms-home.component";
import { DemoFormsReactiveComponent } from "../components/in-class/demo-forms/demo-forms-reactive/demo-forms-reactive.component";
import { DemoFormsComponent } from "../components/in-class/demo-forms/demo-forms.component";
import { DemoFormsTemplateComponent } from "../components/in-class/demo-forms/demo-forms-template/demo-forms-template.component";
import { FormsComponent } from "../components/6-forms/forms.component";
import { FormsHomeComponent } from "../components/6-forms/forms-home/forms-home.component";
import { FormsTemplateComponent } from "../components/6-forms/template-forms/template-forms.component";
import { FormsReactiveComponent } from "../components/6-forms/reactive-forms/reactive-forms.component";
import { DemoValidationComponent } from "../components/in-class/demo-validation/demo-validation.component";
import { DemoValidationHomeComponent } from "../components/in-class/demo-validation/demo-validation-home/demo-validation-home.component";
import { DemoValidationTemplateComponent } from "../components/in-class/demo-validation/demo-validation-template/demo-validation-template.component";
import { DemoValidationReactiveComponent } from "../components/in-class/demo-validation/demo-validation-reactive/demo-validation-reactive.component";
import { ValidationComponent } from "../components/7-validation/validation.component";
import { ValidationHomeComponent } from "../components/7-validation/validation-home/validation-home.component";
import { ValidationTemplateComponent } from "../components/7-validation/template-validation/template-validation.component";
import { ValidationReactiveComponent } from "../components/7-validation/reactive-validation/reactive-validation.component";

export const appRoutes: Routes = [
  {
    path: URL_PATH.EMPTY,
    redirectTo: URL_PATH.INCLASS + "/" + URL_PATH.VALIDATION,
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
    path: URL_PATH.INCLASS,
    component: InClassComponent,
    children: [
      {
        path: URL_PATH.EMPTY,
        redirectTo: URL_PATH.HOME,
        pathMatch: "full",
      },
      {
        path: URL_PATH.HOME,
        component: InClassHomeComponent,
      },
      {
        path: URL_PATH.BLOGS,
        component: BlogComponent,
        children: [
          {
            path: URL_PATH.NEWBLOGS,
            component: NewBlogComponent,
          },
          {
            path: URL_PATH.OTHERBLOGS,
            component: OtherBlogComponent,
          },
        ],
      },
      {
        path: URL_PATH.SERVERS,
        component: ServersListComponent,
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        children: [
          { path: URL_PATH.ID, component: ServerDetailsComponent },
          { path: URL_PATH.IDEDIT, component: ServerEditorComponent },
        ],
      },
      {
        path: URL_PATH.FORMS,
        component: DemoFormsComponent,
        children: [
          {
            path: URL_PATH.EMPTY,
            redirectTo: URL_PATH.HOME,
            pathMatch: "full",
          },
          {
            path: URL_PATH.HOME,
            component: DemoFormsHomeComponent,
          },
          {
            path: URL_PATH.BY_TEMPLATE,
            component: DemoFormsTemplateComponent,
          },
          {
            path: URL_PATH.BY_REACTIVE,
            component: DemoFormsReactiveComponent,
          },
        ],
      },
      {
        path: URL_PATH.VALIDATION,
        component: DemoValidationComponent,
        children: [
          {
            path: URL_PATH.EMPTY,
            redirectTo: URL_PATH.HOME,
            pathMatch: "full",
          },
          {
            path: URL_PATH.HOME,
            component: DemoValidationHomeComponent,
          },
          {
            path: URL_PATH.BY_TEMPLATE,
            component: DemoValidationTemplateComponent,
          },
          {
            path: URL_PATH.BY_REACTIVE,
            component: DemoValidationReactiveComponent,
          },
        ],
      },
      { path: URL_PATH.MYPAGEID, component: MyPageComponent },
      { path: URL_PATH.MYPAGE, component: MyPageComponent },
    ],
  },
  {
    path: URL_PATH.NOTFOUND,
    component: ErrorComponent,
    data: { message: "Page not found!" },
  },
  { path: URL_PATH.LOGIN, component: LoginComponent },
  {
    path: URL_PATH.LOGOUT,
    component: LoginComponent,
    data: { logout: "true" },
  },
  { path: URL_PATH.OTHER, component: ErrorComponent },
];
