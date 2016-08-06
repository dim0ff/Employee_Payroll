import {Component, OnInit} from 'angular2/core';
import { EmployeeSearchformComponent } from './employee-searchform.component';

@Component({
    selector: 'app',
    directives: [EmployeeSearchformComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}
