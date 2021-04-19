import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthHomeComponent } from "./auth-home.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AuthHomeComponent", () => {
  let component: AuthHomeComponent;
  let fixture: ComponentFixture<AuthHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AuthHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
