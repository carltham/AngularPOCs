import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { DemoValidationHomeComponent } from "./demo-validation-home.component";

describe("DemoValidationHomeComponent", () => {
  let component: DemoValidationHomeComponent;
  let fixture: ComponentFixture<DemoValidationHomeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [DemoValidationHomeComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(DemoValidationHomeComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
