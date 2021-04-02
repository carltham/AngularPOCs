import { ComponentFixture, TestBed } from '@angular/core/testing';

import { colorDirective } from 'src/app/directives/color.directive';
import { EmployeeDataService } from 'src/app/services/employeeDataService';
import { EmployeeListComponent } from './employee-list.component';

fdescribe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let spies: any = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeListComponent, colorDirective],
      providers: [EmployeeDataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    Object.keys(spies).forEach((key) => {
      const spy = spies[key];
      spy.calls.reset();
    });
    spies = {
      editEmp: spyOn(component, 'editEmp'),
      cloneOf: spyOn(component, 'cloneOf'),
      findEmployeeIndex: spyOn(component, 'findEmployeeIndex'),
      cleanEmployee: spyOn(component, 'cleanEmployee'),
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 2 employee only', () => {
    expect(component.employees.length).toBe(4);
  });

  it('veify the employee ids in compnent', () => {
    expect(component.employees[0].id).toBe(5);
    expect(component.employees[1].id).toBe(10);
  });

  it('table "employeeList" should exist', () => {
    const compiled = fixture.nativeElement;
    const table = compiled.querySelector('table[id=employeeList]');
    expect(table).toBeTruthy();
  });

  it('should test the table ', (done) => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(5);

    // Header row
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toContain('ID');
    expect(headerRow.cells[1].innerHTML).toContain('DOB (MM-dd-YYYY)');
    expect(headerRow.cells[2].innerHTML).toContain('First Name');
    expect(headerRow.cells[3].innerHTML).toContain('Last Name');
    expect(headerRow.cells[4].innerHTML).toContain('Salary');
    expect(headerRow.cells[5].innerHTML).toContain('Dept');
    expect(headerRow.cells[6].innerHTML).toContain('City');
    expect(headerRow.cells[7].innerHTML).toContain('Email');

    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toContain('5');
    expect(row1.cells[1].innerHTML).toContain('01-17-1917');
    expect(row1.cells[2].innerHTML).toContain('Test');
    expect(row1.cells[3].innerHTML).toContain('Person');
    expect(row1.cells[4].innerHTML).toContain('SEK 500.00');
    expect(row1.cells[5].innerHTML).toContain('Lower');
    expect(row1.cells[6].innerHTML).toContain('Sometown');
    expect(row1.cells[7].innerHTML).toContain('no@name.at.all');

    // Test more rows here..

    done();
  });

  it('should select row 2 ', (done) => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    let buttons = fixture.nativeElement.querySelectorAll('button');
    expect(tableRows.length).toBe(5);
    expect(buttons.length).toBe(0);

    // Data rows
    let row1 = tableRows[2];
    console.log('row1.id=', row1.id);
    row1.cells[0].click();
    expect(component.editEmp).toHaveBeenCalled();
    // expect(component.cloneOf).toHaveBeenCalled();
    // expect(component.findEmployeeIndex).toHaveBeenCalled();
    // expect(component.cleanEmployee).toHaveBeenCalled();
    // expect(component.selectedEmployee).toEqual(component.cleanEmployee());
    // expect(component.selectedEmployeeFixedId).toEqual(-1);

    // buttons = fixture.nativeElement.querySelectorAll('button');
    // expect(buttons.length).toBe(2);

    // Test more rows here..

    done();
  });
  it('should test click', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    let row1 = tableRows[2];
    row1.click();
    expect(component.editEmp).toHaveBeenCalled();
  });
});
