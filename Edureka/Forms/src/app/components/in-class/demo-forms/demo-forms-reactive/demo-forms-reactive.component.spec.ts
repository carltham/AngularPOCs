import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoFormsReactiveComponent } from "./demo-forms-reactive.component";

describe("DemoFormsReactiveComponent", () => {
  let component: DemoFormsReactiveComponent;
  let fixture: ComponentFixture<DemoFormsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoFormsReactiveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
