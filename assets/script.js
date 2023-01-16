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

let randomArrayIndex = 0;
let validArrays = [];
let validArraysFlat = [];
let passwordCharacter = "";
let generatedPassword = "";

// OBJECT containing user-selected password options
let passwordOptions = {
    passwordLength: 0,
    charsUpper: false,
    charsLower: false,
    nums: false,
    specials: false
};

// Function to prompt user for password options and store the results in the object: passwordOptions
function getPasswordOptions() {
do {
passwordOptions.passwordLength = prompt("Please choose the length of your required password. \nAt least 10 characters but no more than 64:");
}
while ((passwordOptions.passwordLength < 10) || (passwordOptions.passwordLength > 64)); // error check the user's input

do {
alert("You will now be presented with series of four password options. \nYou must choose 'OK' for at least one of the options presented.\nPress 'OK' to start:");
passwordOptions.charsUpper = confirm("Do you want to use uppercase characters in your password? \nPress OK for yes, Cancel for no:");
passwordOptions.charsLower = confirm("Do you want to use lowercase characters in your password? \nPress OK for yes, Cancel for no:");
passwordOptions.nums = confirm("Do you want to use numbers in your password? \nPress OK for yes, Cancel for no:");
passwordOptions.specials = confirm("Do you want to use special characters in your password? \nPress OK for yes, Cancel for no:");
}// ensure at least one of the datasets/types is selected, uses BOOLEAN LOGIC with AND (&&) and NOT (!) operators. 
// These variables are initialised as boolean, '!value' is the same as 'value === false' as 'value' means 'value === true'.
while ((!passwordOptions.charsUpper) && (!passwordOptions.charsLower) && (!passwordOptions.nums) && (!passwordOptions.specials));
};

// build an array of user-selected arrays from the object: passwordOptions
function buildPasswordArray() {
if (passwordOptions.charsUpper) {
    validArrays.push(upperCasedCharacters);
};
if (passwordOptions.charsLower) {
    validArrays.push(lowerCasedCharacters);
};
if (passwordOptions.nums) {
    validArrays.push(numericCharacters);
};
if (passwordOptions.specials) {
    validArrays.push(specialCharacters);
};
// flatten the nested arrays to make random element selection easier
validArraysFlat = validArrays.flat();
};

// Utility Function random number generator
// PLEASE NOTE: I COPIED THIS FUNCTION 'getRandomInt' directly from Mozilla's MDN WEB DOCS at: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function buildPassword() {
for (let i = 0; i < passwordOptions.passwordLength; i++) {
randomArrayIndex = getRandomIntInclusive(0, (validArraysFlat.length -1));
passwordCharacter = validArraysFlat[randomArrayIndex];
generatedPassword = generatedPassword + passwordCharacter;
};
return generatedPassword;
};

getPasswordOptions();
buildPasswordArray();
buildPassword();

console.log(`Upper case characters? : ${passwordOptions.charsUpper}`);
console.log(`Lower case characters? : ${passwordOptions.charsLower}`);
console.log(`Numbers? : ${passwordOptions.nums}`);
console.log(`Special characters? : ${passwordOptions.specials}`);

console.log(`valid arrays : ${validArrays}`);
console.log(`Length (number) of nested arrays in ValidArray: ${validArrays.length}`);
console.log(`Valid arrays FLATened : ${validArraysFlat}`);
console.log(`Flat Array length : ${validArraysFlat.length}`);

console.log(`Password length : ${passwordOptions.passwordLength}`);
console.log(`Last randomArrayIndex: ${randomArrayIndex}`);
console.log(`Generated password: ${generatedPassword}`);


