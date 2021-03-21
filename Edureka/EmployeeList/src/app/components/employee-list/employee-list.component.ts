import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employees = [{
        id: 5, firstName: "Test", lastName: "Person", dept: "Lower", city: "Sometown", email: "no@name.at.all"
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
