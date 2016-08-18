import {Component, provide} from 'angular2/core';
import {AsyncTestCompleter, describe, expect, inject, it, TestComponentBuilder} from 'angular2/testing_internal';

import {EmployeesDataService} from './employees-data.service';

describe('Component: EmployeesDataService', () => {
    it('#', inject([TestComponentBuilder, AsyncTestCompleter], (tcb, async) => {
        tcb.createAsync(AppComponent)
            .then((fixture) => {
                fixture.detectChanges();

                async.done();
            }).catch((e)=> console.log(e));
    }))
});