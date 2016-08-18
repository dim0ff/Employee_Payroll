import {Component} from 'angular2/core';
import {EmployeesDataService} from "./employees-data.service";
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
    employee;

    constructor(private employeesDataService: EmployeesDataService) {}

    ngOnInit() {
        this.employeesDataService.getEmployees(4)
            .subscribe(employees => {
                this.employees = employees;
            })
    }

    getEmployeeById(id) {
        this.employeesDataService.getEmployeeById(id)
            .subscribe(employee => {
                this.employee = employee;
            })
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
