import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ValidationReactiveComponent } from "./reactive-validation.component";

describe("ValidationReactiveComponent", () => {
  let component: ValidationReactiveComponent;
  let fixture: ComponentFixture<ValidationReactiveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [ValidationReactiveComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ValidationReactiveComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
