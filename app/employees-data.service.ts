import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class EmployeesDataService {
    //access modifier as a shortuct for initializing the property
    constructor(private http: Http) {
        this.getEmployee();
    }

    getEmployee() {
        /*return this.http.get("/employees")
            .map(response => {
                //json() will return the payload as a JS object
                response.json().employees });*/
    }
}
