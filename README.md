# mr-robot

###_by **Joseph Jack**_

###_Week 3 project at Epicodus using loops and arrays_

## Description

Webpage built to take numbers input and return a modified result altering numbers 1, 2, and 3.

## Programs/Technologies Used

* HTML
* JavaScript & JQuery
* CSS
* GitHub

## Logic / Tests

Describe: robotNumbers

Test: "It should return an array of numbers from 0 to the user's inputted number."
code: `robotNumbers(8);`
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

Test: "It should return 'beep' whenever an integer has a 1 in it."
code: `robotNumbers(15);`
Expected Output: [beep]

Test: "It should return 'boop' whenever the integer has a 2 in it."
code: `robotNumbers(2);`
Expected Output: [boop]

Test: "It should return 'won't you be my neighbor?' whenever the integer has a 3 in it."
code: `robotNumbers(3);`
Expected Output: [won't you be my neighbor?]

Test: "User input scales from importance 3, 2, 1. So 3 always takes presedence over 2 and 1, 2 over 1, and 1 if neither 2 or 3 are in the integer."
code: `robotNumbers(19);`
Expected Output: (starting at 18 for sake of space) [beep, beep, boop, boop, boop, wont you be my neighbor, boop]


Describe: wrongType

Test: "It should determine that the user input is a number."
code: `wrongType(hot sauce);`
Expected Output: "Alert: Please enter a real number"

## Setup/Install

* Clone from [GitHub repository] (https://github.com/Josephwjack/mr-roboger.git)
* Open index.html
* Enter number and see results

### Known Bugs

* No known bugs at this point.

### License
**_MIT_** &copy; _Joseph Jack 2022_