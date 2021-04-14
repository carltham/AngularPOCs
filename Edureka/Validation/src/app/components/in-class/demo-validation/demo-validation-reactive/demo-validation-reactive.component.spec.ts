import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { DemoValidationReactiveComponent } from "./demo-validation-reactive.component";

describe("DemoValidationReactiveComponent", () => {
  let component: DemoValidationReactiveComponent;
  let fixture: ComponentFixture<DemoValidationReactiveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [DemoValidationReactiveComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(DemoValidationReactiveComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
