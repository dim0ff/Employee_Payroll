import {Component, provide} from 'angular2/core';
import {AsyncTestCompleter, describe, expect, inject, it, TestComponentBuilder} from 'angular2/testing_internal';

import {AppComponent} from './app.component';

describe('Component: AppComponent', () => {
    it('renders its <h1> and has a subcomponent form', inject([TestComponentBuilder, AsyncTestCompleter], (tcb, async) => {
        tcb.createAsync(AppComponent)
            .then((fixture) => {
                fixture.detectChanges();

                async.done();
            }).catch((e)=> console.log(e));
    }))
});