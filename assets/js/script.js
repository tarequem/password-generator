var generateBtn = document.querySelector("#generate");
//global variables/arrays
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "!@#$%^&*(){}<>?:+_-/\||~";

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//event listener, to be called on within functions
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword() {

//characters combines global variables under one local variable
  var characters = "";
//the value of the resulting password
  var userPassword = "";
  var confirmLength = window.prompt("Please choose a length of at least 8 characters and no more than 128 characters.");
    if (isNaN(confirmLength)) {
      alert("Please enter a numerical value");
      return generatePassword();
    }
    if (confirmLength < 8 || confirmLength > 128) {
      alert("Please choose a length of at least 8 characters and no more than 128 characters.");
      return generatePassword();
    }
//confirm windows for character sets user wants

//alert if user denied all character sets

//if statements to connect confirm windows to global variables 

//combines characters to form userPassword 

//returns password to generatepassword 
  return userPassword;
};