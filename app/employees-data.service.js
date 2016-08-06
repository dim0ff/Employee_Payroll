System.register(['angular2/http', 'angular2/core'], function(exports_1, context_1) {
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
            }],
        execute: function() {
            EmployeesDataService = (function () {
                //access modifier as a shortuct for initializing the property
                function EmployeesDataService(http) {
                    this.http = http;
                    this.getEmployee();
                }
                EmployeesDataService.prototype.getEmployee = function () {
                    /*return this.http.get("/employees")
                        .map(response => {
                            //json() will return the payload as a JS object
                            response.json().employees });*/
                };
                EmployeesDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeesDataService);
                return EmployeesDataService;
            }());
            exports_1("EmployeesDataService", EmployeesDataService);
        }
    }
});
//# sourceMappingURL=employees-data.service.js.map