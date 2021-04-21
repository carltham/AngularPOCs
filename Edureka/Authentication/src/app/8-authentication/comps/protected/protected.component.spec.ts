import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthenticationProtectedComponent } from "./protected.component";

describe("AuthenticationProtectedComponent", () => {
  let component: AuthenticationProtectedComponent;
  let fixture: ComponentFixture<AuthenticationProtectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationProtectedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
