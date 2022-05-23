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
    //breaks out of function to prevent new prompt.
    if (confirmLength === null) {
      return ""; 
    }
    //isNaN checks if a non-numeral value was inputed 
    if (isNaN(confirmLength)) {
      alert("Please enter a numerical value");
      return generatePassword();
    }
    //ensures paremeters are between 8 and 128
    if (confirmLength < 8 || confirmLength > 128) {
      alert("Please choose a length of at least 8 characters and no more than 128 characters.");
      return generatePassword();
    }
//confirm windows for character sets user wants
  var confirmLower = window.confirm("Would you like LOWER case characters?");
  var confirmUpper = window.confirm("Would you like UPPER case characters?");
  var confirmNumber = window.confirm("Would you like NUMBERAL characters?");
  var confirmSpecial = window.confirm("Would you like SPECIAL characters?");

//alert if user denied all character sets
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
    alert("Choose at least one character type!");
    return generatePassword();
  }

//if statements to connect confirm windows to global variables 
  if(confirmLower){
    characters += lower;
  }
  if(confirmUpper){
    characters += upper;
  }
  if(confirmNumber){
    characters += number;
  }
  if(confirmSpecial){
    characters += special;
  }
  
//combines characters to form userPassword 
  for (var i = 0; i < confirmLength; i++ ) {
    userPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
//returns password to generatepassword 
  return userPassword;
};