import {Component} from 'angular2/core';
import {FormBuilder} from 'angular2/common';
import {Http} from 'angular2/http';
/*
import {EmployeesDataService} from './employees-data.service';
*/

@Component({
    selector: 'employee-searchform',
    templateUrl: 'app/employee-searchform.component.html',
    styleUrls: ['app/employee-searchform.component.css']
})
export class EmployeeSearchformComponent {
    employees = [];

    constructor(private formBuilder:FormBuilder,
                private http:Http) {
    }

    getEmployee() {
        this.http.get('/employees')
        //convert the response object to just data
            .map(res=> res.json())
            //responds with an observable
            .subscribe(
                employeeData => {
                    this.employees = employeeData
                }
            )
    }
}
