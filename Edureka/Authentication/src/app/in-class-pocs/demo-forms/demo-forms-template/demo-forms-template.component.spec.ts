import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoFormsTemplateComponent } from "./demo-forms-template.component";

describe("DemoFormsTemplateComponent", () => {
  let component: DemoFormsTemplateComponent;
  let fixture: ComponentFixture<DemoFormsTemplateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [DemoFormsTemplateComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(DemoFormsTemplateComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
