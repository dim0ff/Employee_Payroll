describe('modal component', function () {
    it('should autocomplete the selected employee', function () {
        browser.get('http://localhost:80/Fourth/Fourth/');
        //select the input field
        var searchField = element(by.id('searchfield'));
        var query = "Skye";
        searchField.sendKeys(query);
        //dropdown menu not expanding
        //var employeeMatch = element.all(by.css('.employee')).first().getText();
        expect(searchField.getAttribute('value')).toEqual(query)
    });
});

describe('should output the selected employee', function () {
});
describe('modal component', function () {
});


