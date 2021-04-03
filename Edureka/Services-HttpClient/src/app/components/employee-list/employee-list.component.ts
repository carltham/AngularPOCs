import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/domain/employee";
import { Header } from "src/app/domain/Header";
import { EmployeeDataService } from "../../services/employeeDataService";

@Component({
  selector: "employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  column: number[] = [];

  selectedEmployee: Employee = this.cleanEmployee();
  selectedEmployeeFixedId: number = 0;
  employees: Employee[] = [];

  constructor(private employeeDataService: EmployeeDataService) {}

  edit(selectedId: number) {
    console.log("selectedId=", selectedId);
    let foundemployee = this.employees.find((empl) => {
      return empl.id === selectedId;
    });
    console.log("foundemployee=", foundemployee);
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
    console.log("foundIndex=", foundIndex);

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

  cleanEmployee(): Employee {
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

  cloneOf(emp: Employee): Employee {
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
    this.employees = this.employeeDataService.getEmployees();
  }

  get headers(): Header[] {
    return this.employeeDataService.getHeaders();
  }
}
