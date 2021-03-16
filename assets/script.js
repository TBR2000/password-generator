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


function generatePassword(){

  // Selections for password parameters
  var passLength = prompt("How long does your password need to be (8-128)?");
  var alphaConfirm = confirm("Do you want to include lowercase Letters?");
  var upperConfirm = confirm("Do you want to include Uppercase Letters?");
  var numConfirm = confirm("Do you want to include numbers?");
  var specConfirm = confirm("Do you want to use Special Charaters?");

  //Varables to be used in password
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var spec = "!@#$%^&*(),.<>/?";

  //Variables into arrays
  var letters = alph.split("");
  var lettersUpper = alph.toUpperCase().split("");
  var numerals = num.split("");
  var special = spec.split("");

  // Main password array
  var main = "";

  // Min and Max length of password
  if (passLength < 8){
    passLength = 8
  }else if (passLength > 128){
    passLength =128
  }

  // Select which arrays to concatenate into main password array
  if ((alphaConfirm == true) && (upperConfirm == true) && (numConfirm == true) && (specConfirm == true)){
   var main = letters.concat(lettersUpper, numerals, special);
  }
  else if ((alphaConfirm == true) && (upperConfirm == true) && (numConfirm == true) && (specConfirm != true)){
   var main = letters.concat(lettersUpper, numerals);
  }
  else if ((alphaConfirm == true) && (upperConfirm == true) && (numConfirm != true) && (specConfirm != true)){
    var main = letters.concat(lettersUpper);
  }
  else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm != true)){
   var main = letters
  }
  else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm == true) && (specConfirm == true)){
    var main = letters.concat(numerals, special);
  }
  else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm == true)){
    var main = letters.concat(special);
  }
  else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm == true) && (specConfirm != true)){
    var main = letters.concat (numerals);
  }
  else if ((alphaConfirm != true) && (upperConfirm != true) && (numConfirm == true) && (specConfirm == true)){
    var main = numerals.concat(special);
  }
  else if ((alphaConfirm != true) && (upperConfirm == true) && (numConfirm == true) && (specConfirm == true)){
    var main = lettersUpper.concat(numerals, special);
  }
  else if ((alphaConfirm != true) && (upperConfirm == true) && (numConfirm != true) && (specConfirm == true)){
    var main = lettersUpper.concat(special);
  }
  else if ((alphaConfirm != true) && (upperConfirm == true) && (numConfirm == true) && (specConfirm != true)){
    var main = lettersUpper.concat(numerals);
  }
  else if ((alphaConfirm == true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm != true)){
    var main = letters;
  }
  else if ((alphaConfirm != true) && (upperConfirm == true) && (numConfirm != true) && (specConfirm != true)){
    var main = lettersUpper
  }
  else if ((alphaConfirm != true) && (upperConfirm != true) && (numConfirm == true) && (specConfirm != true)){
    var main = numerals;
  }
  else if ((alphaConfirm != true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm == true)){
    var main = special;
  }
  //Alerts that no choices have been made
  if ((alphaConfirm != true) && (upperConfirm != true) && (numConfirm != true) && (specConfirm != true)){
    alert("You must make at least one selection"); 
  }
  
  console.log (main)

  //Chooses random selection of main password array
  
      var randpassword = [];
    for (var i = 0; i < passLength; i++) {
      var rand = main[Math.floor(Math.random() * main.length)];
      randpassword.push(rand);
    }
           
    return (randpassword.join(""));
  }     

