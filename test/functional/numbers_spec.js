describe('capture numbers', function() {
    var errors = element.all(By.repeater('error in errors'));
    var submitButton = element(By.buttonText('Submit'));
    var mobileNumber = element(By.id('mobileNumber'));
    var altNumber1 = element(By.id('altNumber1'));
    var altNumber2 = element(By.id('altNumber2'));

    beforeEach(function() {
        browser.get('/#/numbers');
        expect(browser.getTitle()).toEqual('BDD Workshop');
    });

    it('should get error if no number is entered', function() {
        submitButton.click();
        expect(errors.count()).toBe(1);
        expect(errors.get(0).getText()).toBe("Please enter at least one number");
    });

    it('should get error if number is invalid', function(){
        mobileNumber.sendKeys("03");
        submitButton.click();
        expect(errors.count()).toBe(1);
        expect(errors.get(0).getText()).toBe("Please enter a valid number");
    })


});