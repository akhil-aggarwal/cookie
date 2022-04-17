console.log('Hey Script is working');
var firstName = 'Yoyo';
var lastName = 'Momo';
var eMail = 'Yomo@moyo.com';
var age = 18;

Cookies.set('FName', firstName, {
    expires: 10
})
Cookies.set('LName', lastName, {
    expires: 10
})
Cookies.set('Email', eMail, {
    expires: 10
})
Cookies.set('Age', age, {
    expires: 10
})

var cFName = Cookies.get('FName');
var cLName = Cookies.get('LName');
var cEmail = Cookies.get('Email');
var cAge = Cookies.get('Age');

if ( Cookies.get('FName') != null && firstName != undefined ) {

    document.getElementById('startStr').innerHTML = "Hey " + cFName + ", Have a Look at Cookies!";
    document.getElementById('resultName').innerHTML = cFName+ ',';
    document.getElementById('btnFirstName').innerHTML = cFName;
    document.getElementById('btnLastName'). innerHTML = cLName;
    document.getElementById('btnEmail').innerHTML = cEmail;

    if(cAge < 18)
    {   
        var remYears = 18 - cAge;
   
        document.getElementById('adultMessage').innerHTML = "You are not 18. Please wait for "+remYears+" years, <br> to make your Pan & Voter Card."
        document.getElementById('adultSection').style.visibility = "hidden";
   
    }

 }

 else
 {  
     document.getElementById("textFormFilled").innerHTML = "You will get your cookie results here.<br> Please fill form to proceed."
     document.getElementById("formFilled").style.visibility = "hidden";
 }

