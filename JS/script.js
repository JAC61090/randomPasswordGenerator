// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = ''
  var desiredPasswordLength = parseInt(prompt("How long should the password be? (8-128"));
  if (desiredPasswordLength > 7 && desiredPasswordLength < 129) {
    //password lenght is good
    //  //boolean user character selections
    var userSelLow = confirm("Do you want lower case characters in your password?");
    var userSelUpp = confirm("Do you want upper case characters in your password?");
    var userSelNum = confirm("Do you want number characters in your password?");
    var userSelSpec = confirm("Do you want special characters in your password?");

    //they need to confirm at least one
    if (userSelLow || userSelNum || userSelSpec || userSelUpp) {
      //they did so we add selected characters to the avaialbe bank (selectionString)
      //if  built from character bank
      if(userSelLow){ //if user selected lower case use from variable bank
        selectionString = (selectionString + lowerChar)
      } 
      if(userSelUpp){ //user selects upper case
        selectionString = (selectionString + upperChar)
      }
      if(userSelNum){ //user selects numbers
        selectionString = (selectionString + numChar)
      }
      if(userSelSpec){ //user special Characters
        selectionString = (selectionString + specChar)
      }
      //do a for loop to build password based on length and selectionString
      for (var i = 0 ; i < desiredPasswordLength; i++) {
        var randomIndex = Math.floor(Math.random()*selectionString.length);
      console.log(randomIndex);
      var randomChar = selectionString[randomIndex];
      console.log(randomChar);
      password += randomChar;
      console.log(password)
      }
      return password;
      
    }
  } else {
    //password length no good
    alert("Try again buddy, It has to be between 8 and 128")
    generatePassword();
  }
  
  
  console.log(selectionString); //prints user selection from chosen variable bank
  // var 

  //retun something back to password- to do
}

var lowerChar = "abcdefghijklmnopqrstuvwxyz" //variable defined lower case
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //variable defined upper case
var numChar = "0123456789"//variable defined for numbers
var specChar = "!@#$%^&*+?"//variable defined for special
var selectionString = "";//built from variable bank designated by boolean imputs