var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var numbers = ["1","2","3","4","5","6","7","8","9"]

var specialChars = [" ", "!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@", "[" , "]", "^","_","`","{","|","}","~",]
// Assignment Code



function generatePassword() {
  
  var desiredChars = [upperCase, lowerCase, numbers, specialChars]
  pass = []
  
  length = prompt("Pick password length \n(8-128 characters)")
  length = parseInt(length)
  
  
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters long.") 
  } 

console.log(length)

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
  

  console.log(pass)

  // for (var i = 0; i < length; i++) {
    result = pass.charAt(Math.floor(Math.random() * length))
  // }

  

  // result = pass[Math.floor(Math.random() * length.length)]

  console.log(result)

}

  // display password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
