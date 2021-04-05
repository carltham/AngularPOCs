import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { FakeEmplService } from "./fake-employee-service";

describe("FakeEmplService", () => {
  let service: FakeEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FakeEmplService],
    });
    service = TestBed.inject(FakeEmplService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
