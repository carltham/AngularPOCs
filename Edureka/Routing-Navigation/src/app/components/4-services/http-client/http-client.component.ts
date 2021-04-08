import { Component, OnInit } from "@angular/core";
import { ExternalEmployee } from "src/app/domain/com.restapiexample/employee-external";
import { Header } from "src/app/domain/local/configuration/header";
import { ExternalEmplService } from "src/app/services/4-services/external-employee-service";

@Component({
  selector: "external-employees-list",
  templateUrl: "./http-client.component.html",
  styleUrls: ["./http-client.component.css"],
})
export class HttpClientComponent implements OnInit {
  selectedEmployee: ExternalEmployee = this.cleanEmployee();
  selectedEmployeeFixedId: number = 0;
  errorMessage: string = "";
  employees: ExternalEmployee[] = [];

  constructor(private employeeService: ExternalEmplService) {}

  showDetails(selectedId: number): void {
    let foundemployee = this.employees.find((empl) => {
      return empl.id === selectedId;
    });

    if (foundemployee) {
      this.selectedEmployeeFixedId = foundemployee.id;
      this.selectedEmployee = this.cloneOf(foundemployee);
    }
  }
  closeDetails(): void {
    this.selectedEmployee = this.cleanEmployee();
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

  cloneOf(emp: ExternalEmployee): ExternalEmployee {
    return JSON.parse(JSON.stringify(emp));
  }

  ngOnInit(): void {
    this.employeeService.list().subscribe(
      (result: any) => {
        this.employees = result.data;
      },
      (error) => console.error(error)
    );
  }

  get headers(): Header[] {
    let _headers = this.employeeService.getHeaders();
    return _headers;
  }
}
