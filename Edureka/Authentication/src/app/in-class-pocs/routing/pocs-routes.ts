import { Routes } from "@angular/router";
import { ErrorComponent } from "../../components/error/error.component";
import { URL_PATH } from "../../support/url-paths";
import { BlogComponent } from "../blog/blog.component";
import { NewBlogComponent } from "../blog/new-blog/new-blog.component";
import { OtherBlogComponent } from "../blog/other-blog/other-blog.component";
import { DemoFormsHomeComponent } from "../demo-forms/demo-forms-home/demo-forms-home.component";
import { DemoFormsReactiveComponent } from "../demo-forms/demo-forms-reactive/demo-forms-reactive.component";
import { DemoFormsTemplateComponent } from "../demo-forms/demo-forms-template/demo-forms-template.component";
import { DemoFormsComponent } from "../demo-forms/demo-forms.component";
import { DemoValidationHomeComponent } from "../demo-validation/demo-validation-home/demo-validation-home.component";
import { DemoValidationReactiveComponent } from "../demo-validation/demo-validation-reactive/demo-validation-reactive.component";
import { DemoValidationTemplateComponent } from "../demo-validation/demo-validation-template/demo-validation-template.component";
import { DemoValidationComponent } from "../demo-validation/demo-validation.component";
import { InClassHomeComponent } from "../in-class-home/in-class-home.component";
import { InClassComponent } from "../in-class.component";
import { MyPageComponent } from "../mypage/mypage.component";
import { ServerDetailsComponent } from "../server-details/server-details.component";
import { ServerEditorComponent } from "../server-editor/server-editor.component";
import { ServersListComponent } from "../servers-list/servers-list.component";
import { AuthGuardService } from "../services/auth-guard.service";

export const pocRoutes: Routes = [
  {
    path: URL_PATH.EMPTY,
    redirectTo: URL_PATH.INCLASS,
    pathMatch: "full",
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
];
