import { HttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { Employee2 } from "src/app/domain/employee2";
import { EmployeeService } from "src/app/services/employee-service";

import { NewEmployeeComponent } from "./newemployee.component";

let employee: Employee2;
let httpMock: HttpTestingController;
let httpClient: HttpClient;

describe("NewEmployeeComponent", () => {
  let component: NewEmployeeComponent;
  let fixture: ComponentFixture<NewEmployeeComponent>;
  let service: EmployeeService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientTestingModule],
        declarations: [NewEmployeeComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(NewEmployeeComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
          service = TestBed.inject(EmployeeService);
          httpMock = TestBed.inject(HttpTestingController);
          httpClient = TestBed.inject(HttpClient);
          employee = {
            id: 2100,
            employee_name: "TheCodeBuzz",
            employee_age: 53,
            employee_salary: 500,
            profile_image: "tttt",
          };
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("fetchNew() should call http Get method for the given route", () => {
    //Arrange
    //Set Up Data

    //Act
    service.fetchNew().subscribe((emp) => {
      //Assert-1
      expect(emp).toEqual(employee);
    });
    performRequest("users/new", "GET");
  });

  it("should have correct nr of rows ", fakeAsync(() => {
    employee = {
      id: 2200,
      employee_name: "TheCodeBuzz",
      employee_age: 53,
      employee_salary: 500,
      profile_image: "tttt",
    };

    let tableRows = fixture.nativeElement.querySelectorAll("tr");
    expect(tableRows.length).toBe(0);
    let buttons = fixture.nativeElement.querySelectorAll("button");

    expect(buttons.length).toBe(1);

    buttons[0].click();
    performRequest("users/new", "GET");
    expect(component.newEmployee).toBe(employee);
    fixture.detectChanges();
    buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons.length).toBe(2);
  }));

  it("should have correct lables ", () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    let tableRows = fixture.nativeElement.querySelectorAll("tr");
    let headerRow = tableRows[0];

    expect(headerRow).toBeUndefined();
    expect(buttons.length).toBe(1);
    buttons[0].click();
    performRequest("users/new", "GET");
    fixture.detectChanges();

    buttons = fixture.nativeElement.querySelectorAll("button");
    tableRows = fixture.nativeElement.querySelectorAll("tr");
    headerRow = tableRows[0];

    expect(buttons.length).toBe(2);

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
    expect(buttons.length).toBe(1);
    buttons[0].click();
    performRequest("users/new", "GET");
    fixture.detectChanges();

    buttons = fixture.nativeElement.querySelectorAll("button");
    tableRows = fixture.nativeElement.querySelectorAll("tr");
    row1 = tableRows[1];

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
    req.flush(employee);
    //Assert -5
    httpMock.verify();
  }
});
