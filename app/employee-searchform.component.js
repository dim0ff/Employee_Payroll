System.register(['angular2/core', "./employees-data.service", "./search.pipe", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, employees_data_service_1, search_pipe_1;
    var EmployeeSearchformComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employees_data_service_1_1) {
                employees_data_service_1 = employees_data_service_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (_1) {}],
        execute: function() {
            EmployeeSearchformComponent = (function () {
                function EmployeeSearchformComponent(employeeDataService) {
                    this.employeeDataService = employeeDataService;
                    this.query = "";
                    this.employeeListExpanded = false;
                    this.employees = [];
                    this.selectedEmployees = [];
                    this.employeeSelected = false;
                }
                EmployeeSearchformComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.employeeDataService.getEmployees()
                        .subscribe(function (employeesObj) { return _this.employees = employeesObj; });
                };
                EmployeeSearchformComponent.prototype.showSelectedEmployee = function (id) {
                    for (var i = 0; i < this.employees.length; i += 1) {
                        if (id === this.employees[i].id) {
                            this.selectedEmployees.push(this.employees[i]);
                        }
                    }
                };
                EmployeeSearchformComponent = __decorate([
                    core_1.Component({
                        selector: 'employee-searchform',
                        templateUrl: 'app/employee-searchform.component.html',
                        styleUrls: ['app/employee-searchform.component.css'],
                        pipes: [search_pipe_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [employees_data_service_1.EmployeeDataService])
                ], EmployeeSearchformComponent);
                return EmployeeSearchformComponent;
            }());
            exports_1("EmployeeSearchformComponent", EmployeeSearchformComponent);
        }
    }
});
//# sourceMappingURL=employee-searchform.component.js.map