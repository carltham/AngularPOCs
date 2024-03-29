import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthGuard } from "./auth.guard";

describe("AuthGuard", () => {
  let service: AuthGuard;

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
        service = TestBed.inject(AuthGuard);
      });
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
