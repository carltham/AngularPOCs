import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoValidationTemplateComponent } from "./demo-validation-template.component";

describe("DemoValidationTemplateComponent", () => {
  let component: DemoValidationTemplateComponent;
  let fixture: ComponentFixture<DemoValidationTemplateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [DemoValidationTemplateComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(DemoValidationTemplateComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
