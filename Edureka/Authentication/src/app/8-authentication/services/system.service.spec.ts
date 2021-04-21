import { TestBed } from "@angular/core/testing";

import { SystemService } from "./system.service";

describe("SystemService", () => {
  let service: SystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [],
    })
      .compileComponents()
      .then(() => {
        service = TestBed.inject(SystemService);
      });
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
