ask user how many chars they want their password to be
test for valid input
ask user which types of characters they want to use
test each for valid input

store results

Depending on the user input results: 
randomly select from which datasets to pick from (random number between zero and validArrays.length) :
randomly select a character from within the selected dataset (.arrayName.length)

append or concatenate the selected character to password (maybe push to an array and then convert to string?)
repeat for the length of 'how many chars' the user selected

determine which arrays to select from:
if all user selections = true, randomly select from all arrays
exclude any arrays that are user selection = false
***
perhaps push user selection = true array names onto a choose-from-array array?

need a for-password-length loop to keep retrieving random values from the resulting array

display the generated password string

function order from supplied script.js =>

getPasswordOptions

getRandom

generatePassword

re-code into the above functions, be mindful of the return values
