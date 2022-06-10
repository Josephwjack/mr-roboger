# mr-robot

Describe: robotNumbers

Test: "It should return an array of numbers from 0 to the user's inputted number."
code: robotNumbers(8);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

Test: "It should return 'beep' whenever an integer has a 1 in it."
code: robotNumbers(15);
Expected Output: [beep]

Test: "It should return 'boop' whenever the integer has a 2 in it."
code: robotNumbers(2);
Expected Output: [boop]

Test: "It should return 'won't you be my neighbor?' whenever the integer has a 3 in it."
code: robotNumbers(3);
Expected Output: [won't you be my neighbor?]

Test: "Integers cascade so 3 always takes presedence over 2 and 1, 2 over 1, and 1 if neither 2 or 3 are in the integer."
code: robotNumbers(19);
Expected Output: (starting at 18 for sake of space) [beep, beep, boop, boop, wont you be my neighbor, boop]




Describe: wrongType

Test: "It should determine that the user input is a number."
code: wrongType(hot sauce);
Expected Output: "Alert: Please enter a number"