import { TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "../routing/app-routing.module";

import { NavHandlerService } from "./nav-handler.service";

describe("NavHandlerService", () => {
  let service: NavHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [],
      providers: [],
    })
      .compileComponents()
      .then(() => {
        service = TestBed.inject(NavHandlerService);
      });
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
