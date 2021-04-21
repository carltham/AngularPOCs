import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthenticationGuard } from "./authentication-guard";

describe("AuthenticationGuard", () => {
  let service: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [],
      providers: [],
    })
      .compileComponents()
      .then(() => {
        service = TestBed.inject(AuthenticationGuard);
      });
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
