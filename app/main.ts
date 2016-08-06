import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from "angular2/http";
import {AppComponent} from './app.component';
import {EmployeeDataService} from "./employees-data.service";

//inject all services at bootstrap, as opposed to individually in the providers metadata field
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    EmployeeDataService
]);


