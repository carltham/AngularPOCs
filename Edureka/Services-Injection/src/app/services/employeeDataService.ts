import { Injectable } from "@angular/core";
import { Header } from "../domain/Header";

@Injectable()
export class EmployeeDataService {
  public getEmployees() {
    const employees = [
      {
        id: 5,
        dob: "1917/01/17",
        firstName: "Test",
        lastName: "Person",
        salary: 500,
        dept: "Lower",
        city: "Sometown",
        email: "no@name.at.all",
      },
      {
        id: 10,
        dob: "1972/01/17",
        firstName: "TestAgain",
        lastName: "Person2",
        salary: 1500,
        dept: "Upper",
        city: "AnotherTown",
        email: "nil@name.at.all",
      },
      {
        id: 9,
        dob: "1991/01/17",
        firstName: "Fake-Test",
        lastName: "Dogowner",
        salary: 350,
        dept: "Lower",
        city: "Sametown",
        email: "any@name.at.all",
      },
      {
        id: 1,
        dob: "2000/01/17",
        firstName: "Bird",
        lastName: "Catcher",
        salary: 100,
        dept: "Lower",
        city: "AnotherTown",
        email: "missing@name.at.all",
      },
    ];
    return employees;
  }

  getHeaders() {
    const headers: Header[] = [
      { number: 0, width: 5, text: "ID" },
      { number: 0, width: 12, text: "DOB (MM-dd-YYYY)" },
      { number: 1, width: -1, text: "First Name" },
      { number: 2, width: -1, text: "Last Name" },
      { number: 3, width: 13, text: "Salary" },
      { number: 4, width: -1, text: "Dept" },
      { number: 5, width: -1, text: "City" },
      { number: 6, width: 35, text: "Email" },
    ];
    headers.forEach((header) => {
      if (header.width < 0) {
        header.width = (1 / headers.length) * 100;
      }
    });
    return headers;
  }
}
