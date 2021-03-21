import { ComponentFixture, TestBed } from '@angular/core/testing';
import { __classPrivateFieldSet } from 'tslib';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
    let component: EmployeeListComponent;
    let fixture: ComponentFixture<EmployeeListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmployeeListComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain 1 employee only', () => {
        expect(component.employees.length).toBe(1);
    });

    it('veify the employee id in compnent', () => {
        expect(component.employees[0].id).toBe(5);
    });

    it('table "employeeList" should exist', () => {
        const compiled = fixture.nativeElement;
        const table = compiled.querySelector("table[id=employeeList]");
        expect(table).toBeTruthy();
    });

    it('should test the table ', (done) => {
        let tableRows = fixture.nativeElement.querySelectorAll('tr');
        expect(tableRows.length).toBe(2);

        // Header row
        let headerRow = tableRows[0];
        expect(headerRow.cells[0].innerHTML).toContain("Employee ID");
        expect(headerRow.cells[1].innerHTML).toContain('First Name');
        expect(headerRow.cells[2].innerHTML).toContain('Last Name');
        expect(headerRow.cells[3].innerHTML).toContain('Dept');
        expect(headerRow.cells[4].innerHTML).toContain('City');
        expect(headerRow.cells[5].innerHTML).toContain('Email');

        // Data rows
        let row1 = tableRows[1];
        expect(row1.cells[0].innerHTML).toContain("5");
        expect(row1.cells[1].innerHTML).toContain('Test');
        expect(row1.cells[2].innerHTML).toContain('Person');
        expect(row1.cells[3].innerHTML).toContain('Lower');
        expect(row1.cells[4].innerHTML).toContain('Sometown');
        expect(row1.cells[5].innerHTML).toContain('no@name.at.all');

        // Test more rows here..

        done();
    });
});
