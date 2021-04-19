import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "src/app/routing/app-routing.module";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";

import { AuthenticationLoginComponent } from "./authentication-login.component";

describe("AuthenticationLoginComponent", () => {
  let component: AuthenticationLoginComponent;
  let fixture: ComponentFixture<AuthenticationLoginComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationLoginComponent],
      imports: [AppRoutingModule],
      providers: [NavHandlerService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AuthenticationLoginComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.autoDetectChanges();
      });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
