// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];
// define and initialise global variables and arrays
let randomArrayIndex = 0;
let validArrays = [];
let validArraysFlat = [];
let passwordCharacter = "";
let password = "";

// OBJECT containing user-selected password options
let passwordOptions = {
    passwordLength: 0,
    charsUpper: false,
    charsLower: false,
    nums: false,
    specials: false
};//end OBJECT

// Function to prompt user for password options and store the results in the object: passwordOptions
function getPasswordOptions() {
do {
passwordOptions.passwordLength = prompt("Please choose the length of your required password. \nAt least 10 characters but no more than 64:");
}
while ((passwordOptions.passwordLength < 10) || (passwordOptions.passwordLength > 64)); // error check the user's input
// end of waiting for user to enter a number in the corect range

//start of waiting for user to choose at least one dataset to build the password from
do {
alert("You will now be presented with series of four password options. \nYou must choose 'OK' for at least one of the options presented.\nPress 'OK' to start:");
passwordOptions.charsUpper = confirm("Do you want to use uppercase characters in your password? \nPress OK for yes, Cancel for no:");
passwordOptions.charsLower = confirm("Do you want to use lowercase characters in your password? \nPress OK for yes, Cancel for no:");
passwordOptions.nums = confirm("Do you want to use numbers in your password? \nPress OK for yes, Cancel for no:");
passwordOptions.specials = confirm("Do you want to use special characters in your password? \nPress OK for yes, Cancel for no:");
}// ensure at least one of the datasets/types is selected, uses BOOLEAN LOGIC with AND (&&) and NOT (!) operators. 
// These variables are initialised as boolean, '!value' (NOT 'value') is the same as 'value === false' (as 'value' means 'value === true').
while ((!passwordOptions.charsUpper) && (!passwordOptions.charsLower) && (!passwordOptions.nums) && (!passwordOptions.specials));
//end of waiting for user to choose at least one dataset to build the password from
};

// build an array of user-selected character sets from the object: passwordOptions
function buildPasswordArray() {
if (passwordOptions.charsUpper) { // if charsUpper === true eg: the user has selected uppercased characters
    validArrays.push(upperCasedCharacters);
};
if (passwordOptions.charsLower) { // if charsLower === true (see above)
    validArrays.push(lowerCasedCharacters);
};
if (passwordOptions.nums) { // see above
    validArrays.push(numericCharacters);
};
if (passwordOptions.specials) { // see above
    validArrays.push(specialCharacters);
};
// flatten the nested arrays to make random element selection easier
validArraysFlat = validArrays.flat();
};// end of build new array and build another array that is a FLATened version

// construct the password by referencing the passwordOptions OBJECT, use the getRandomIntInclusive function to 
// randomly select from the FLATtened array of user-selected character types
function generatePassword() {
    //NESTED FUNCTION to generate a random integer
    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };//end of nested function
    // main function, uses the nested function (randomInt) above
    for (let i = 0; i < passwordOptions.passwordLength; i++) {
    randomArrayIndex = randomInt(0, (validArraysFlat.length -1));
    passwordCharacter = validArraysFlat[randomArrayIndex];
    password = password + passwordCharacter;
    };
    return password;
};//end of password generation

getPasswordOptions(); // run the function that asks the user to input their choices
buildPasswordArray(); // build the dataset 0f arrays the use has chosen
generatePassword();  // generate a random password from the data set. 
//I've globally-scoped the generatePassword call so that it 'could' be used elsewhere easily
//instead of it residing in the writePassword function.

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    return // This return ensures the program only outputs the password once -
    // without this return statement, the program keeps generating passwords 
    // every time the button is clicked, each time the newly generated password
    // being appended to the already generated (or appeneded to) password 
    // (until some buffer is full, perhaps)
};
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);