// Assignment Code
var generateBtn = document.querySelector("#generate");

function addSpecialChars(charStr) {
  if (!confirm("Add special characters?") != "" ) {
    return charStr += "";
  }

  return charStr += "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
}

function addNumbers (charStr) {
  if (!confirm("Add numbers?") != "" ) {
    return charStr += "";
  }

  return charStr += "0123456789";
}

function addLowerCase (charStr) {
  if (!confirm("Add lower case letters?") != "" ) {
    return charStr += "";
  }

  return charStr += "abcdefghijklmnopqrstuvwxyz";
}

function addUpperCase (charStr) {
  if (!confirm("Add upper case character?") != "" ) {
    return charStr += "";
  }

  return charStr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} 

function getPasswordLength () {
  var len = prompt("Input a password length.");
  while (true) {
    if ( !isNaN(parseInt(len)) ) {
      return parseInt(len);
    }
    len = prompt("Invalid input, please enter a number.");
  }
}

function generatePassword () {
  var pwrdLength = getPasswordLength();
  var chars = addUpperCase(addLowerCase(addNumbers( addSpecialChars("") )))
  var pwrd = "";
  
  for (var i = 0; i < pwrdLength; i++){
    pwrd += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return pwrd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
