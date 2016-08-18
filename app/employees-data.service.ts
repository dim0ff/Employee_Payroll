import {Http, URLSearchParams} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

//since this is a service we built, ng doesn't know by default this is eligible for injection
@Injectable()
export class EmployeesDataService {
    employees = [];

    constructor(private http: Http,
                private searchParams: URLSearchParams) {}

    getEmployees(id) {
        return this.http.get('localhost:3000/employees')
            .map(res => {
                //unwrap the payload from the returned observable object
                return res.json();
            })
    }

    getEmployeeById(id) {
        this.searchParams.append("id", id);
                                                //second arg of RequestOptionsArgs
        return this.http.get('localhost:3000/employees', {search: this.searchParams })
            .map(res => {
                //unwrap the payload from the returned observable object
                return res.json();
            })
    }
}
