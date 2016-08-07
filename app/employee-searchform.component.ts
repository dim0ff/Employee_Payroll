import {Component} from 'angular2/core';
import {EmployeeDataService} from "./employees-data.service";
import {SearchPipe} from "./search.pipe";
import 'rxjs/Rx';

@Component({
    selector: 'employee-searchform',
    templateUrl: 'app/employee-searchform.component.html',
    styleUrls: ['app/employee-searchform.component.css'],
    pipes: [SearchPipe]
})
export class EmployeeSearchformComponent {
    query = "";
    employeeListExpanded = false;
    employees = [];
    selectedEmployees = [];
    employeeSelected = false;

    constructor(private employeeDataService:EmployeeDataService) {}

    ngOnInit() {
        this.employeeDataService.getEmployees()
            .subscribe((employeesObj) => this.employees = employeesObj)
    }

    ouputSelectedEmployee(id) {
        for (let i = 0; i < this.employees.length; i += 1) {
            if (id === this.employees[i].id) {
                this.selectedEmployees.push(this.employees[i]);
                this.employees.splice(i, 1);
            }
        }
    }
}
