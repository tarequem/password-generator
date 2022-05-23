
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "~`! @#$%^&*()_-+={[}]|\\\:\";'<,>.?/"
var promptLength;
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(passwordLength, lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if(!lowercaseCharacters && !uppercaseCharacters && !specialCharacters && !numericCharacters && !specialCharacters){
    alert("Must include at least one character set.");
    return "";
  }

  if(lowercaseCharacters) {

  }
};


generateBtn.addEventListener("click", writePassword) {
  var passwordLength = window.prompt("Please choose a length of at least 8 characters and no more than 128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a length of at least 8 characters and no more than 128 characters");
    return;
  }


};


/*
var passwordTextArea = document.getElementById("Password");
var generateButton = getElementById('generate');

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMERIC = "0123456789";
const SPECIAL = "~`! @#$%^&*()_-+={[}]|\\\:\";'<,>.?/";

generateButton.addEventListener("click", promptLength) {
  var promptLength = window.prompt("Please choose a length of at least 8 characters and no more than 128 characters");
  if (promptLength < 8 || promptLength > 128) {
    promptLength();
  } else
}

// Get references to the #generate element

//Variables for password creation

// Write password to the #password input

// Add event listener to generate button
This will call the previous function..
//function for generating the password, the function will then be called in the writePassword() function returning the final password.

The following comments are all withing this function.
//The isNaN() function is used here to tell whether the given number is illegal or not. Googled best way to check this.

//Display prompts asking the user to choose what specifics they would like their password to have
 As an example, you want to use the “Confirm” prompt. So – 
var confirmUpper = confirm(
    "Would you like your password to have UPPER case letters?"
  );

Something like that.
//adding the "!" infront of these variables checks to see if they are NOT true.

 //Checks to see if they are true.

//This chooses random letters, numbers, special characters, and creates the password with the given length that the user has inputted.

//charAt is a function that returns the character from the chosen index, also looked up on google to make the best use.
