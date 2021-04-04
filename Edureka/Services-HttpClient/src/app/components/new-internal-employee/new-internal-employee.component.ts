import { Component, OnInit } from "@angular/core";
import { InternalEmployee } from "src/app/domain/employee-internal";
import { Header } from "src/app/domain/Header";
import { InternalEmplService } from "src/app/services/internal-employee-service";

@Component({
  selector: "newemployee",
  templateUrl: "./new-internal-employee.component.html",
  styleUrls: ["./new-internal-employee.component.css"],
})
export class NewIntEmplComponent implements OnInit {
  newEmployee: InternalEmployee = this.cleanEmployee();
  errorMessage: string = "";

  constructor(private employeeService: InternalEmplService) {}

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

  cleanEmployee(): InternalEmployee {
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
