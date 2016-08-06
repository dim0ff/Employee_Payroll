System.register(['angular2/core', 'angular2/common', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1;
    var EmployeeSearchformComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            /*
            import {EmployeesDataService} from './employees-data.service';
            */
            EmployeeSearchformComponent = (function () {
                function EmployeeSearchformComponent(formBuilder, http) {
                    this.formBuilder = formBuilder;
                    this.http = http;
                    this.employees = [];
                }
                EmployeeSearchformComponent.prototype.getEmployee = function () {
                    var _this = this;
                    this.http.get('/employees')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (employeeData) {
                        _this.employees = employeeData;
                    });
                };
                EmployeeSearchformComponent = __decorate([
                    core_1.Component({
                        selector: 'employee-searchform',
                        templateUrl: 'app/employee-searchform.component.html',
                        styleUrls: ['app/employee-searchform.component.css']
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http])
                ], EmployeeSearchformComponent);
                return EmployeeSearchformComponent;
            }());
            exports_1("EmployeeSearchformComponent", EmployeeSearchformComponent);
        }
    }
});
//# sourceMappingURL=employee-searchform.component.js.map