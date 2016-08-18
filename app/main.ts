import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from './app.component';
import {EmployeesDataService} from "./employees-data.service";

//inject all services at bootstrap, as opposed to individually in the providers metadata field
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    EmployeesDataService,
    ROUTER_PROVIDERS
]);


