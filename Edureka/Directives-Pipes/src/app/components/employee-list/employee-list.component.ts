import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Employee } from '../../domain/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  column = [1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7];

  selectedEmployee: Employee = this.cleanEmployee();
  selectedEmployeeFixedId: number = 0;
  employees: Employee[] = [
    {
      id: 5,
      firstName: 'Test',
      lastName: 'Person',
      dept: 'Lower',
      city: 'Sometown',
      email: 'no@name.at.all',
    },
    {
      id: 10,
      firstName: 'TestAgain',
      lastName: 'Person2',
      dept: 'Upper',
      city: 'AnotherTown',
      email: 'nil@name.at.all',
    },
  ];

  constructor() {}

  cleanEmployee(): Employee {
    this.selectedEmployeeFixedId = -1;
    return {
      id: -1,
      firstName: '',
      lastName: '',
      dept: '',
      city: '',
      email: '',
    };
  }

  editEmp(selectedId: number) {
    if (selectedId == this.selectedEmployeeFixedId) {
      this.selectedEmployee = this.cleanEmployee();
      return;
    }
    let foundemployee = this.employees.find((empl) => {
      return empl.id === selectedId;
    });
    if (foundemployee) {
      this.selectedEmployeeFixedId = foundemployee.id;
      this.selectedEmployee = this.cloneOf(foundemployee);
    }
  }

  cloneOf(emp: Employee): Employee {
    return JSON.parse(JSON.stringify(emp));
  }

  updateEmp() {
    if (this.selectedEmployee.id !== this.selectedEmployeeFixedId) {
      // Just in case ...
      throw Error('Attemt to change a key is forbidden !!');
    }
    let index = 0;
    let foundIndex;
    this.employees.find((employee) => {
      let wasFound = employee.id === this.selectedEmployeeFixedId;
      if (wasFound) {
        foundIndex = index;
      }
      index++;
      return wasFound;
    });

    if (foundIndex) {
      this.employees[foundIndex] = this.selectedEmployee;
      this.selectedEmployee = this.cleanEmployee();
    }
  }

  ngOnInit(): void {}
}
