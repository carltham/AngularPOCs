import { HttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ExternalEmployee } from "src/app/domain/com.restapiexample/employee-external";
import { ExtEmplListComponent } from "src/app/components/external-employees-list/external-employees-list.component";
import { ExternalEmplService } from "src/app/services/external-employee-service";
import { Config } from "src/app/support/config";

let response: any;
let httpMock: HttpTestingController;
let httpClient: HttpClient;

describe("ExtEmplListComponent", () => {
  let component: ExtEmplListComponent;
  let fixture: ComponentFixture<ExtEmplListComponent>;
  let service: ExternalEmplService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientTestingModule],
        declarations: [ExtEmplListComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ExtEmplListComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
          service = TestBed.inject(ExternalEmplService);
          httpMock = TestBed.inject(HttpTestingController);
          httpClient = TestBed.inject(HttpClient);
          let employee = {
            id: 2100,
            employee_name: "TheCodeBuzz",
            employee_age: 53,
            employee_salary: 500,
            profile_image: "tttt",
          };
          response = { data: [employee] };
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("mocked : should have correct nr of rows ", fakeAsync(() => {
    let employee = {
      id: 2200,
      employee_name: "TheCodeBuzz",
      employee_age: 53,
      employee_salary: 500,
      profile_image: "tttt",
    };
    response = { data: [employee] };

    let tableRows = fixture.nativeElement.querySelectorAll("tr");
    // expect(tableRows.length).toBe(1);
    let buttons = fixture.nativeElement.querySelectorAll("button");

    // expect(buttons.length).toBe(0);

    tableRows[0].click();
    tick();
    performRequest(Config.com_restapiexample, "GET");
    expect(component.selectedEmployee).toEqual(component.cleanEmployee());
    fixture.detectChanges();
    buttons = fixture.nativeElement.querySelectorAll("button");
    // expect(buttons.length).toBe(0);
    flush();
  }));

  it("should have correct lables ", () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    let tableRows = fixture.nativeElement.querySelectorAll("tr");
    let headerRow = tableRows[0];

    expect(headerRow.cells.length).toBe(5);
    expect(buttons.length).toBe(0);
    performRequest(Config.com_restapiexample, "GET");
    fixture.detectChanges();

    buttons = fixture.nativeElement.querySelectorAll("button");
    tableRows = fixture.nativeElement.querySelectorAll("tr");
    headerRow = tableRows[0];

    // expect(buttons.length).toBe(2);

    expect(headerRow.cells[0].innerHTML).toContain(component.headers[0].text);
    expect(headerRow.cells[1].innerHTML).toContain(component.headers[1].text);
    expect(headerRow.cells[2].innerHTML).toContain(component.headers[2].text);
    expect(headerRow.cells[3].innerHTML).toContain(component.headers[3].text);
    expect(headerRow.cells[4].innerHTML).toContain(component.headers[4].text);
  });

  it("should have correct data values ", () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    let tableRows = fixture.nativeElement.querySelectorAll("tr");

    // Data rows
    let row1 = tableRows[1];
    expect(row1).toBeUndefined();
    expect(buttons.length).toBe(0);
    performRequest(Config.com_restapiexample, "GET");
    fixture.detectChanges();

    buttons = fixture.nativeElement.querySelectorAll("button");
    tableRows = fixture.nativeElement.querySelectorAll("tr");
    row1 = tableRows[1];
    const employees = response.data;
    const employee = employees[0];

    expect(row1.cells[0].innerHTML).toContain(employee.id);
    expect(row1.cells[1].innerHTML).toContain(employee.employee_name);
    expect(row1.cells[2].innerHTML).toContain(employee.employee_salary);
    expect(row1.cells[3].innerHTML).toContain(employee.employee_age);
    expect(row1.cells[4].innerHTML).toContain(employee.profile_image);
  });

  function performRequest(uri: string, method: string) {
    //Assert -2
    const req = httpMock.expectOne(uri);

    //Assert -3
    expect(req.request.method).toEqual(method);

    //Assert -4
    req.flush(response);
    //Assert -5
    httpMock.verify();
  }
});
