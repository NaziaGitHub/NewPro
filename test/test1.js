//import {browser} from "protractor"

describe('This is scenario',function(){

    it('This is test',function(){

        browser.manage().window().maximize();
    
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('23');
        element(by.model('second')).sendKeys('78');
        browser.sleep(6000); 
    });

    it('This is test1',function(){

        browser.manage().window().maximize();
    
        browser.get('https://angular.io/events');
        browser.sleep(6000);
    });
});