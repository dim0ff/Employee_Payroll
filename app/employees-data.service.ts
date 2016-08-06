import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';

//signifies the class will be part of the DI plan
@Injectable()
export class EmployeeDataService {
    employees = [];

    constructor(private http: Http) {}

    getEmployees() {
        return this.http.get('http://localhost:3000/employees')
            //convert the observable response objects to just data
            .map(res => {
                console.log(res);
                return res.json()
            });
    }
}
