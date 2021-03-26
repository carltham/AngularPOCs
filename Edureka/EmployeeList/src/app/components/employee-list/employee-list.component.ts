import { Component, OnInit } from '@angular/core';
import { Employee } from '../../domain/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  column = [1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7];

  selectedEmployee: Employee = this.cleanEmployee();
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
  cleanEmployee() {
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
    if (selectedId == this.selectedEmployee.id) {
      this.selectedEmployee = this.cleanEmployee();
      return;
    }
    let foundemployee = this.employees.find((empl) => {
      return empl.id === selectedId;
    });
    if (foundemployee) {
      this.selectedEmployee = foundemployee;
    }
    console.log('selectedId=', selectedId);
    console.log('foundemployee=', foundemployee);
    console.log('selectedEmployee=', this.selectedEmployee);
  }
  updateEmp(selectedId: number) {
    console.log('selectedEmployee=', this.selectedEmployee);
  }
  onChange(event: any) {
    // without type info
    const field = event.target.id;
    const value = event.target.value;
    console.log('event=', event);
  }

  ngOnInit(): void {}
}
