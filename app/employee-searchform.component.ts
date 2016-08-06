import {Component} from 'angular2/core';
import {EmployeeDataService} from "./employees-data.service";
import { SearchPipe } from "./search.pipe";
import 'rxjs/Rx';

@Component({
    selector: 'employee-searchform',
    templateUrl: 'app/employee-searchform.component.html',
    styleUrls: ['app/employee-searchform.component.css'],
    pipes: [SearchPipe]
})
export class EmployeeSearchformComponent {
    query = "";
    employees = [];

    constructor(private employeeDataService: EmployeeDataService) {}

    ngOnInit() {
        this.employeeDataService.getEmployees()
            .subscribe((employeesObj) => this.employees = employeesObj)
    }
}
