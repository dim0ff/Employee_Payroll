System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var EmployeesDataService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            //since this is a service we built, ng doesn't know by default this is eligible for injection
            EmployeesDataService = (function () {
                function EmployeesDataService(http, searchParams) {
                    this.http = http;
                    this.searchParams = searchParams;
                    this.employees = [];
                }
                EmployeesDataService.prototype.getEmployees = function (id) {
                    return this.http.get('localhost:3000/employees')
                        .map(function (res) {
                        //unwrap the payload from the returned observable object
                        return res.json();
                    });
                };
                EmployeesDataService.prototype.getEmployeeById = function (id) {
                    this.searchParams.append("id", id);
                    //second arg of RequestOptionsArgs
                    return this.http.get('localhost:3000/employees', { search: this.searchParams })
                        .map(function (res) {
                        //unwrap the payload from the returned observable object
                        return res.json();
                    });
                };
                EmployeesDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, http_1.URLSearchParams])
                ], EmployeesDataService);
                return EmployeesDataService;
            }());
            exports_1("EmployeesDataService", EmployeesDataService);
        }
    }
});
//# sourceMappingURL=employees-data.service.js.map