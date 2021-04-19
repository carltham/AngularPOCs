import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { InternalEmplService } from "./internal-employee-service";

describe("InternalEmplService", () => {
  let service: InternalEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(InternalEmplService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
