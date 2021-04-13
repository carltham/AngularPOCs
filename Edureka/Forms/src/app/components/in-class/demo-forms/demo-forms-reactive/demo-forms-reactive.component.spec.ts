import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { DemoFormsReactiveComponent } from "./demo-forms-reactive.component";

describe("DemoFormsReactiveComponent", () => {
  let component: DemoFormsReactiveComponent;
  let fixture: ComponentFixture<DemoFormsReactiveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [DemoFormsReactiveComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(DemoFormsReactiveComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
