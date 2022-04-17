console.log('Hey Script is working');
const data = [ ];

function cookieFunction()
{   
    data[0] = document.getElementById('fNameInput').value;
    data[1] = document.getElementById('lNameInput').value;
    data[2] = document.getElementById('emailInput').value;
    data[3] = document.getElementById('ageInput').value;

    return data;
    
}

cookieFunction();

Cookies.set('FName', data[0], {
    expires: 10
})
Cookies.set('LName', data[1], {
    expires: 10
})
Cookies.set('Email', data[2], {
    expires: 10
})
Cookies.set('Age', data[3], {
    expires: 10
})

var cFName = Cookies.get('FName');
var cLName = Cookies.get('LName');
var cEmail = Cookies.get('Email');
var cAge = Cookies.get('Age');

if ( Cookies.get('FName') != null && data[0] != undefined ) {

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






