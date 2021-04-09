import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { InternalEmplService } from "./internal-employee-service";

describe("InternalEmplService", () => {
  let service: InternalEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(InternalEmplService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
