## Assignment 5: Password Generator
### Description:
#### Generate a random password of a user-selected length, based on user-selected character sets.
#### The password must meet the following requirements:
##### Minimum of 10 and maximum of 64 characters.
##### If the user requests a password of less than 10, or more than 64 characters, the application will continue to request the user input a valid value (no less than 10 and no more than 64). 
##### The user is also offered the opportunity to quit generating a password by pressing a Cancel button instead of inputting a number and pressing the OK button.
##### The user must choose from any or all of the following character sets to form the password: 
###### Uppercased English alphabet letters
###### Lowercased English alphabet letters
###### Arabic numerals (numbers) 0 - 9
###### Special characters eg: # ~ @ ! * etc.
##### Should the user not choose any of the above character sets, the character selection process will restart and the user will again be alerted that they must choose at least one character set before commencing to generate the random password.
##### A page (supplied as starter code by the edX team) is used to display the password to the user after the use clicks a button labelled 'Generate Password'.
### Motivation:
#### The motivation for this project was to satisfy assignment 5 of edX's Front End Web Development bootcamp course, working with and gaining experience with:
### OBJECTS, FUNCTIONS, NESTED FUNCTIONS, RETURNing data from functions, Local and Global SCOPED declarations, RANDOM NUMBER generation and use, and BOOLEAN decision making. 
#### This application makes use of all of these elements.
### Installation:
#### To install this app please clone: 
#### https://github.com/DericWard/Module-5-Challenge-Password-Generator
### Live site:
#### To use this app and see it operation please visit:
#### https://dericward.github.io/Module-5-Challenge-Password-Generator/
### Tests:
#### Enter a number in the provided prompt box for the length of the password, if you enter 9 or less, or more than 64 the app will again ask you to enter a number in the valid range or to press the Cancel button to quit generating a password. 
#### Choosing the Cancel button for all of the character set selection pop-ups should return you to the start of the character set selection process and again explain that you should choose at least one character set.
#### Choose a valid password length and choose just one character set. The application should generate a random password based on your selection.
#### Choose a valid password length and a different character set, again the application should generate a random password based on this new character set. Repeat for the two remaining character sets.
#### Choose two, three, and all four character sets - the application should generate a password based on your chosen combination of character sets.
#### Ensure there are no errors displayed in the browser's dev tools console screen
#### Please note you will have to refresh/reload the webpage each time you want to generate a new password.
### App screenshots:
###### Ten character randomly generated password utilising all four character sets:
![password-generator-screenshot-main](https://user-images.githubusercontent.com/50495939/212893728-c6ec94b5-0d1b-40e8-b620-7a97df03f89a.PNG)
###### The user chose to generate a ten character password utilising all four of the character sets.
###### Prompts presented to the user:
![error-1](https://user-images.githubusercontent.com/50495939/212894032-188f0611-19b5-4ab7-9ac0-4e29ff6b15cf.PNG)
![error-2](https://user-images.githubusercontent.com/50495939/212894080-2082a9b2-8888-4821-ae53-70f04fe5f9bf.PNG)
![password-generator-screenshot-confirm-box-1](https://user-images.githubusercontent.com/50495939/212894212-a2290ba9-40d7-424e-a313-665b55a6d46a.PNG)
![password-generator-screenshot-confirm-box-2](https://user-images.githubusercontent.com/50495939/212894263-2f0faaad-4c5b-4c6c-a959-8c5c8061341c.PNG)
![password-generator-screenshot-confirm-box-3](https://user-images.githubusercontent.com/50495939/212894291-159a5d48-0726-46ea-8716-dc5da5535404.PNG)
![password-generator-screenshot-confirm-box-4](https://user-images.githubusercontent.com/50495939/212894319-884f6cdb-b4a0-4649-ae80-ea16d32e1201.PNG)
###### If the user inputs a number out of range for the password length they will again be presented with the following prompt, which oulines the valid number range and gives the user the option to quit via the Cancel button:
![error-1](https://user-images.githubusercontent.com/50495939/212894541-a6afd537-57a9-4efb-a047-179cea652341.PNG)
###### If the user does not select a character set for the password they will again be presented with this alert which again explains that they must choose at least one character set:
![error-2](https://user-images.githubusercontent.com/50495939/212894906-799053b0-6f13-478a-a351-c1169fa5c7cb.PNG)





