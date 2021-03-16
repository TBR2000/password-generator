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

// Selections for password parameters
var passLength = prompt("How long does your password need to be (8-128)?");
var alphaConfirm = confirm("Do you want to include lowercase Letters?");
var upperConfirm = confirm("Do you want to include Uppercase Letters?");
var numConfirm = confirm("Do you want to include numbers?");
var specConfirm = confirm("Do you want to use Special Charaters?");

//Varables to be used in password
var str = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var spec = "!@#$%^&*(),.<>/?";
var letters = str.split("");
var lettersUpper = str.toUpperCase().split("");
var numerals = num.split("");
var special = spec.split("");

// Main password array
var main = "";

// Select which arrays to concatenate to main password array
if (
  (alphaConfirm == true) && (upperConfirm == true) && (numConfirm == true) && (specConfirm == true)){
  main.concat(letters, lettersUpper, numerals, special);
}
else if ((alphaConfirm == true) && (upperConfirm == true) && (numConfirm == true) && (specConfirm != true)){
  main.concat(letters, lettersUpper, numerals);
}
else if ((alphaConfirm == true) && (upperConfirm == true) && (numConfirm != true) && (specConfirm != true)){
  main.concat(letters, lettersUpper,);
}
else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm != true)){
  main.concat(letters);
}
else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm == true) && (specConfirm == true)){
  main.concat(letters, numerals, special);
}
else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm == true)){
  main.concat(letters, special);
}
else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm == true) && (specConfirm != true)){
  main.concat(letters, numerals);
}
else if ((alphaConfirm != true) && (upperConfirm != true) && (numConfirm == true) && (specConfirm == true)){
  main.concat(numerals, special);
}
else if ((alphaConfirm != true) && (upperConfirm == true) && (numConfirm == true) && (specConfirm == true)){
  main.concat(lettersUpper, numerals, special);
}
else if ((alphaConfirm != true) && (upperConfirm == true) && (numConfirm != true) && (specConfirm == true)){
  main.concat(lettersUpper, special);
}
else if ((alphaConfirm != true) && (upperConfirm == true) && (numConfirm == true) && (specConfirm != true)){
   main.concat(lettersUpper, numerals);
}
else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm != true)){
  main.concat(letters);
}
else if ((alphaConfirm != true) && (upperConfirm == true) && (numConfirm != true) && (specConfirm != true)){
  main.concat(lettersUpper);
}
else if ((alphaConfirm != true) && (upperConfirm != true) && (numConfirm == true) && (specConfirm != true)){
  main.concat(numerals);
}
else if ((alphaConfirm != true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm == true)){
  main.concat(special);
}
//Alerts that no choices have been made
if ((alphaConfirm != true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm != true)){
  alert("You must make at least one selection"); 
}


