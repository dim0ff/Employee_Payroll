import {Component, provide} from 'angular2/core';
import {AsyncTestCompleter, describe, expect, inject, it, TestComponentBuilder} from 'angular2/testing_internal';

import {EmployeeSearchformComponent} from './employee-searchform.component';

describe('Component: EmployeeSearchformComponent', () => {
    it('#', inject([TestComponentBuilder, AsyncTestCompleter], (tcb, async) => {
        tcb.createAsync(AppComponent)
            .then((fixture) => {
                fixture.detectChanges();

                async.done();
            }).catch((e)=> console.log(e));
    }))
});