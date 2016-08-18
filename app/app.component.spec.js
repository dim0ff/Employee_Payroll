System.register(['angular2/testing_internal', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_internal_1, app_component_1;
    return {
        setters:[
            function (testing_internal_1_1) {
                testing_internal_1 = testing_internal_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            testing_internal_1.describe('Component: AppComponent', function () {
                testing_internal_1.it('renders its <h1> and has a subcomponent form', testing_internal_1.inject([testing_internal_1.TestComponentBuilder, testing_internal_1.AsyncTestCompleter], function (tcb, async) {
                    tcb.createAsync(app_component_1.AppComponent)
                        .then(function (fixture) {
                        fixture.detectChanges();
                        async.done();
                    }).catch(function (e) { return console.log(e); });
                }));
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map