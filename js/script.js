// Empties the password when refreshed
document.querySelector("#password"). value = ''

var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var numbers = ["1","2","3","4","5","6","7","8","9"]

var specialChars = [" ", "!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@", "[" , "]", "^","_","`","{","|","}","~"]

var desiredChars = [upperCase, lowerCase, numbers, specialChars]

// Assignment Code
function generatePassword() {
  
  pass = []
  var charLength = prompt("Pick password length \n(8-128 characters)")
  charLength = parseInt(charLength)

  if (charLength < 8 || charLength > 128) {
    alert("Password must be between 8 and 128 characters long.")  
    }

  // Collects the user's password parameters
  if (charLength >= 8 && charLength <= 128) {
    upperCase = confirm("Do you want to use uppercase characters?")
    if (upperCase) {
      pass += desiredChars[0]
    } 

    lowerCase = confirm("Do you want to use lowercase characters?")
    if (lowerCase) {
      pass += desiredChars[1]
    } 
    
    numbers = confirm("Do you want to use number characters?")
    if (numbers) {
      pass += desiredChars[2]
    } 
    
    specialChars = confirm("Do you want to use special characters?")
    if (specialChars) {
      pass += desiredChars[3]
    } 

    // Removes the commas from the list of characters selected
    for (var i = 0; i < pass.length; i++) {
      pass = pass.replace(",", "")
    }
    
  //  Code randomizes the characters the user chooses
    var answer = []

    for (var i = 0; i < charLength; i++) {
    var randomizeInput = pass[Math.floor(Math.random() * pass.length)]
    answer.push(randomizeInput)
    }

    var displayPass = answer.join("")

    return displayPass
    
  } else {
    return "Please Try Again \n Passwords must be 8 - 128 characters long"
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
