import { Component, OnInit } from "@angular/core";
import { FakeEmployee } from "src/app/domain/employee-fake";
import { Header } from "src/app/domain/Header";
import { FakeEmplService } from "src/app/services/fake-employee-service";

@Component({
  selector: "employee-list",
  templateUrl: "./fake-employees-list.component.html",
  styleUrls: ["./fake-employees-list.component.css"],
})
export class FakeEmplListComponent implements OnInit {
  column: number[] = [];

  selectedEmployee: FakeEmployee = this.cleanEmployee();
  selectedEmployeeFixedId: number = 0;
  employees: FakeEmployee[] = [];

  constructor(private fakeEmplService: FakeEmplService) { }

  edit(selectedId: number) {
    let foundemployee = this.employees.find((empl) => {
      return empl.id === selectedId;
    });

    if (foundemployee) {
      this.selectedEmployeeFixedId = foundemployee.id;
      this.selectedEmployee = this.cloneOf(foundemployee);
    }
  }

  updateEmp() {
    if (this.selectedEmployee.id !== this.selectedEmployeeFixedId) {
      // Just in case ...
      throw Error("Attemt to change a key is forbidden !!");
    }
    let index = 0;
    let foundIndex = this.findEmployeeIndex();

    if (foundIndex >= 0) {
      this.employees[foundIndex] = this.selectedEmployee;
      this.selectedEmployee = this.cleanEmployee();
    }
  }

  cancelUpdate() {
    if (this.selectedEmployee.id !== this.selectedEmployeeFixedId) {
      // Just in case ...
      throw Error("Attemt to change a key is forbidden !!");
    }
    let index = 0;
    let foundIndex = this.findEmployeeIndex();

    if (foundIndex >= 0) {
      //Enforce update
      this.employees[foundIndex] = this.cloneOf(this.employees[foundIndex]);
      this.selectedEmployee = this.cleanEmployee();
    }
  }

  cleanEmployee(): FakeEmployee {
    this.selectedEmployeeFixedId = -1;
    return {
      id: -1,
      dob: "",
      firstName: "",
      lastName: "",
      salary: -1,
      dept: "",
      city: "",
      email: "",
    };
  }

  cloneOf(emp: FakeEmployee): FakeEmployee {
    return JSON.parse(JSON.stringify(emp));
  }

  findEmployeeIndex() {
    let index = 0;
    let foundIndex = -1;
    this.employees.find((employee) => {
      let wasFound = employee.id === this.selectedEmployeeFixedId;
      if (wasFound) {
        foundIndex = index;
      }
      index++;
      return wasFound;
    });
    return foundIndex;
  }

  ngOnInit(): void {
    this.employees = this.fakeEmplService.getEmployees();
  }

  get headers(): Header[] {
    return this.fakeEmplService.getHeaders();
  }
}
