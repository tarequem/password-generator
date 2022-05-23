// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element


//Variables for password creation


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//function generating password writePassword()

//isNaN() to determine whether a number is being used

//prompts that will ask the user what characters they want in their password

var confirmUpper = confirm ("Would like to use UPPER case letters?");

var confirmLower = confirm ("Would you like to use LOWER case letters?")

//!variables to check if not true/alerting for correction

//check to see if true

//random math generator, picking randomly from each array (letters, numbers, special characters) to make password at specified length. 


//charAt to return characters from chosen index 