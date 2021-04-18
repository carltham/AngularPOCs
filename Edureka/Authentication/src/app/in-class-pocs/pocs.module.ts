import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BlogComponent } from "./blog/blog.component";
import { NewBlogComponent } from "./blog/new-blog/new-blog.component";
import { OtherBlogComponent } from "./blog/other-blog/other-blog.component";
import { DemoFormsHomeComponent } from "./demo-forms/demo-forms-home/demo-forms-home.component";
import { DemoFormsReactiveComponent } from "./demo-forms/demo-forms-reactive/demo-forms-reactive.component";
import { DemoFormsTemplateComponent } from "./demo-forms/demo-forms-template/demo-forms-template.component";
import { DemoFormsComponent } from "./demo-forms/demo-forms.component";
import { DemoValidationHomeComponent } from "./demo-validation/demo-validation-home/demo-validation-home.component";
import { DemoValidationReactiveComponent } from "./demo-validation/demo-validation-reactive/demo-validation-reactive.component";
import { DemoValidationTemplateComponent } from "./demo-validation/demo-validation-template/demo-validation-template.component";
import { DemoValidationComponent } from "./demo-validation/demo-validation.component";
import { MustMatchDirective } from "./demo-validation/_helpers/must-match.directive";
import { InClassHomeComponent } from "./in-class-home/in-class-home.component";
import { InClassComponent } from "./in-class.component";
import { MyPageComponent } from "./mypage/mypage.component";
import { PocsRoutingModule } from "./routing/pocs-routing.module";
import { ServerDetailsComponent } from "./server-details/server-details.component";
import { ServerEditorComponent } from "./server-editor/server-editor.component";
import { ServersListComponent } from "./servers-list/servers-list.component";

@NgModule({
  declarations: [
    MyPageComponent,
    BlogComponent,
    NewBlogComponent,
    OtherBlogComponent,
    ServerDetailsComponent,
    ServerEditorComponent,
    ServersListComponent,
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
    MustMatchDirective,
  ],
  imports: [
    PocsRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [InClassComponent],
})
export class AppModule {}
