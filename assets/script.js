// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var str = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var spec = "!@#$%^&*(),.<>/?";
var alpha = str.split("");
var alphaUpper = str.toUpperCase().split("");
var numerals = num.split("");
var special = spec.split("");
