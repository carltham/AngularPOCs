import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoFormsHomeComponent } from "./demo-forms-home.component";

describe("DemoFormsHomeComponent", () => {
  let component: DemoFormsHomeComponent;
  let fixture: ComponentFixture<DemoFormsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoFormsHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
