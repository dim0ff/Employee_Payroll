import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { EmployeeSearchformComponent } from './employee-searchform.component';

@RouteConfig([
    { path: "/employees/:id", component: EmployeeSearchformComponent, name: 'List' },
    { path: "/employees", component: EmployeeSearchformComponent }
])
@Component({
    selector: 'app',
    directives: [EmployeeSearchformComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}