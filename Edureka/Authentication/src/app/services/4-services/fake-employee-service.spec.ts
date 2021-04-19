import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { FakeEmplService } from "./fake-employee-service";

describe("FakeEmplService", () => {
  let service: FakeEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FakeEmplService],
    });
    service = TestBed.inject(FakeEmplService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
