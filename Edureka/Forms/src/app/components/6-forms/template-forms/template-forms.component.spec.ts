import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { FormsTemplateComponent } from "./template-forms.component";

describe("FormsTemplateComponent", () => {
  let component: FormsTemplateComponent;
  let fixture: ComponentFixture<FormsTemplateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [FormsTemplateComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(FormsTemplateComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
