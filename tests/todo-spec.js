describe('modal component', function () {
    it('should output the employee and delete it from the array', function () {
        browser.wait(function () {
            return element(by.id('searchfield')).isPresent();
        }).then(function () {
            browser.get('http://localhost:80/Fourth/Fourth/');

            var searchField = element(by.id('searchfield'));
            searchField.click();
            searchField.sendKeys('Skye');
            searchField.getText().then(function (text) {
                console.log(text);
            });
            var employeeListItem = element(by.id('employee-list'));
        });
    });
});
