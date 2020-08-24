let a=function(){

firstname=element(by.model('first'));
lastname=element(by.model('second'));
login=element(by.css('[ng-click="doAddition()"]'));

this.get=function(url)
{
    browser.get(url);
    
}
this.enterfirstnumber=function(fno)
{
    firstname.sendKeys(fno);
}

this.entersecondnumber=function(sno)
{
    lastname.sendKeys(sno);
}
this.loginClick=function()
{
    login.click();
}
this.verifyMessage=function(result){
let a=element(by.cssContainingText('.ng-binding',result));
let b=expect(a.getText()).toEqual(result);
}


}
module.exports=new a();