const _printData = [];

function putCountries() {
  //select tag element
  const countriesContainer = document.getElementById("countrySelect");

  fetch("./countries.json")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        var countryOption = document.createElement("option");
        countryOption.innerText = data[i].name;
        countryOption.addEventListener("click", () => {
          countriesLabel.innerText = countryOption.innerText;
        });
        countriesContainer.appendChild(countryOption);
      }
    });
}

function cookieFunction() {
  Cookies.set("fName", document.getElementById("fNameInput").value);
  Cookies.set("lName", document.getElementById("lNameInput").value);
  Cookies.set("email", document.getElementById("emailInput").value);
  Cookies.set("age", document.getElementById("ageInput").value);
  setValues();
}

function setValues() {
  _printData[0] = Cookies.get("fName");
  _printData[1] = Cookies.get("lName");
  _printData[2] = Cookies.get("email");
  _printData[3] = Cookies.get("age");

  printValues(_printData);
}

function printValues(_printData) {
  if (_printData[0] != undefined && _printData[0] != null) {
    document.getElementById("startStr").innerHTML =
      "Hey " + _printData[0] + ", Have a Look at Cookies!";
    document.getElementById("resultName").innerHTML = _printData[0] + ",";
    document.getElementById("btnFirstName").innerHTML = _printData[0];
    document.getElementById("btnLastName").innerHTML = _printData[1];
    document.getElementById("btnEmail").innerHTML = _printData[2];

    if (_printData[3] < 18) {
      var remYears = 18 - _printData[3];

      document.getElementById("adultMessage").innerHTML =
        "You are not 18. Please wait for " +
        remYears +
        " years, <br> to make your Pan & Voter Card.";
      document.getElementById("adultSection").style.visibility = "hidden";
    }
  } else {
    document.getElementById("textFormFilled").innerHTML =
      "You will get your cookie results here.<br> Please fill form to proceed.";
    document.getElementById("formFilled").style.visibility = "hidden";
  }
}

//put countries into the select tag
putCountries();

document.addEventListener("DOMContentLoaded", setValues);
