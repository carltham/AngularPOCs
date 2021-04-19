import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthAlertComponent } from "./auth-alert.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("AuthAlertComponent", () => {
  let component: AuthAlertComponent;
  let fixture: ComponentFixture<AuthAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AuthAlertComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
