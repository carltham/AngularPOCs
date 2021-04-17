import { TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "../../routing/app-routing.module";

import { AuthGuardService } from "./auth-guard.service";

describe("AuthGuardService", () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppRoutingModule],
      providers: [AuthGuardService],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
