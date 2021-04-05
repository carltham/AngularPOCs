import { Component, OnInit } from "@angular/core";
import { ExternalEmployee } from "src/app/domain/com.restapiexample/employee-external";
import { Header } from "src/app/domain/Header";
import { InternalEmplService } from "src/app/services/internal-employee-service";

@Component({
  selector: "newemployee",
  templateUrl: "./new-internal-employee.component.html",
  styleUrls: ["./new-internal-employee.component.css"],
})
export class NewIntEmplComponent implements OnInit {
  newEmployee: ExternalEmployee = this.cleanEmployee();
  errorMessage: string = "";

  constructor(private employeeService: InternalEmplService) { }

  fetchNew() {
    this.employeeService.fetchNew().subscribe(
      (data) => {
        this.newEmployee = data;
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

  cleanEmployee(): ExternalEmployee {
    return {
      id: -1,
      employee_name: "",
      employee_salary: -1,
      employee_age: -1,
      profile_image: "",
    };
  }

  ngOnInit(): void { }

  get headers(): Header[] {
    return this.employeeService.getHeaders();
  }
}
