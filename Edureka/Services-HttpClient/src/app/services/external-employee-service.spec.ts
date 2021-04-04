import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { ExternalEmplService } from "./external-employee-service";

describe("ExternalEmplService", () => {
  let service: ExternalEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ExternalEmplService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
