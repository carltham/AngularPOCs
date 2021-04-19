import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { ExternalEmployee } from "../../domain/com.restapiexample/employee-external";
import { ExternalEmplService } from "./external-employee-service";

describe("ExternalEmplService", () => {
  let service: ExternalEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ExternalEmplService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should list all employees on remote dummy.restapiexample.com", () => {
    service.list().subscribe((result: any) => {
      let employees: ExternalEmployee[] = result.data;
      let status = result.status;
      expect(status).toBe("success");
      expect(employees.length).toBe(24);
    });
  });
});
