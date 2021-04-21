import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MessengerService } from "./messenger.service";

describe("MessengerService", () => {
  let service: MessengerService;

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
        service = TestBed.inject(MessengerService);
      });
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
