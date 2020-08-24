let b=require('../test/test2.js');

describe('This is main scenario',function(){
    
    it('This is main test',function(){
    
        
        b.get('https://juliemr.github.io/protractor-demo/');
        
        b.enterfirstnumber('23');
        b.entersecondnumber('10');
        b.loginClick();
        b.verifyMessage('33');
        browser.sleep(5000);
    })



    it('This is main test',function(){
    
        
        b.get('https://juliemr.github.io/protractor-demo/');
        
        b.enterfirstnumber1('23');
        b.entersecondnumber('10');
        b.loginClick();
        b.verifyMessage('33');
        browser.sleep(5000);
    })
})
