// Assignment code here


// Get references to the #generate element
var confirmLength;
var confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmLower = "abcdefghijklmnopqrstuvwxyz";
var confirmNumber = "0123456789";
var confirmSpecial = "~`! @#$%^&*()_-+={[}]|\\\:\";'<,>.?/";

//prompts that will ask the user what characters they want in their password after clicking button
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("Generate")
  //prompt user for confirming length
  //confirm lowercase
  //confirm uppercase 
  //confirm number
  //isNaN() to determine whether a number is being used
  //confirm special
  //!variables to check if not true/alerting for correction
  //if statement - alert they need to choose at least one character
  //charAt to return characters from chosen index 
  return password;
};

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


//random math generator, picking randomly from each array (letters, numbers, special characters) to make password at specified length. 
