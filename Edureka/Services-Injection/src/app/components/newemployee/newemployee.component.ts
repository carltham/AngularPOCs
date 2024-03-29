import { Component, OnInit } from "@angular/core";
import { Employee2 } from "src/app/domain/employee2";
import { Header } from "src/app/domain/Header";
import { EmployeeService } from "src/app/services/employee-service";

@Component({
  selector: "newemployee",
  templateUrl: "./newemployee.component.html",
  styleUrls: ["./newemployee.component.css"],
})
export class NewEmployeeComponent implements OnInit {
  newEmployee: Employee2 = this.cleanEmployee();
  errorMessage: string = "";

  constructor(private employeeService: EmployeeService) {}

  fetchNew() {
    this.employeeService.fetchNew().subscribe(
      (data) => {
        this.newEmployee = data;
        console.log(
          "NewEmployeeComponent::fetchNew::this.newEmployee=",
          this.newEmployee
        );
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
  update() {
    this.employeeService.update(this.newEmployee).subscribe(
      (data) => {
        console.log("data=", data);
      },
      (error) => {
        this.errorMessage = <any>error;
        console.log("this.errorMessage=", this.errorMessage);
      }
    );
    this.newEmployee = this.cleanEmployee();
  }

  cancelUpdate() {
    this.newEmployee = this.cleanEmployee();
  }

  cleanEmployee(): Employee2 {
    return {
      id: -1,
      employee_name: "",
      employee_salary: -1,
      employee_age: -1,
      profile_image: "",
    };
  }

  ngOnInit(): void {}

  get headers(): Header[] {
    return this.employeeService.getHeaders();
  }
}
