import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { colorDirective } from "src/app/directives/color.directive";
import { EmployeeDataService } from "src/app/services/employeeDataService";
import { EmployeeListComponent } from "./employee-list.component";

describe("EmployeeListComponent", () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  // let spies: any = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EmployeeListComponent, colorDirective],
      providers: [EmployeeDataService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(EmployeeListComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();
      });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain 2 employee only", () => {
    expect(component.employees.length).toBe(4);
  });

  it("veify the employee ids in compnent", () => {
    expect(component.employees[0].id).toBe(5);
    expect(component.employees[1].id).toBe(10);
  });

  it('table "employeeList" should exist', () => {
    const compiled = fixture.nativeElement;
    const table = compiled.querySelector("table[id=employeeList]");
    expect(table).toBeTruthy();
  });

  it("should test the table ", (done) => {
    let tableRows = fixture.nativeElement.querySelectorAll("tr");
    expect(tableRows.length).toBe(5);

    // Header row
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toContain("ID");
    expect(headerRow.cells[1].innerHTML).toContain("DOB (MM-dd-YYYY)");
    expect(headerRow.cells[2].innerHTML).toContain("First Name");
    expect(headerRow.cells[3].innerHTML).toContain("Last Name");
    expect(headerRow.cells[4].innerHTML).toContain("Salary");
    expect(headerRow.cells[5].innerHTML).toContain("Dept");
    expect(headerRow.cells[6].innerHTML).toContain("City");
    expect(headerRow.cells[7].innerHTML).toContain("Email");

    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toContain("5");
    expect(row1.cells[1].innerHTML).toContain("01-17-1917");
    expect(row1.cells[2].innerHTML).toContain("Test");
    expect(row1.cells[3].innerHTML).toContain("Person");
    expect(row1.cells[4].innerHTML).toContain("SEK 500.00");
    expect(row1.cells[5].innerHTML).toContain("Lower");
    expect(row1.cells[6].innerHTML).toContain("Sometown");
    expect(row1.cells[7].innerHTML).toContain("no@name.at.all");

    // Test more rows here..

    done();
  });

  it("should select row 2 ", fakeAsync(() => {
    let tableRows = fixture.nativeElement.querySelectorAll("tr");
    expect(tableRows.length).toBe(5);

    // Data rows
    let row1 = tableRows[1];
    let buttons = fixture.nativeElement.querySelectorAll("tr#row-5 button");
    expect(buttons.length).toBe(1);
    fixture.detectChanges();
    buttons[0].click();
    expect(component.selectedEmployee.id).toBe(5);
    buttons = fixture.nativeElement.querySelectorAll("tr#row-5 button");
    expect(buttons.length).toBe(2);
  }));
});
