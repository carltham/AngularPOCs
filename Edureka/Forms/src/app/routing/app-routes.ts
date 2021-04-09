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

export const appRoutes: Routes = [
  {
    path: URL_PATH.EMPTY,
    redirectTo: URL_PATH.HOME,
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
      { path: URL_PATH.MYPAGEID, component: MyPageComponent },
      { path: URL_PATH.MYPAGE, component: MyPageComponent },
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
