import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoFormsTemplateComponent } from "./demo-forms-template.component";

describe("DemoFormsTemplateComponent", () => {
  let component: DemoFormsTemplateComponent;
  let fixture: ComponentFixture<DemoFormsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoFormsTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
