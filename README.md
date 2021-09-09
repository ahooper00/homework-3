# homework-3
This homework required me to create a password generator using Javascript. Starter HTML and CSS files, and a small Javascript file, were provided. 
The password generator made use of prompts, alerts, random selections, and if/else statements. When the button is selected, a series of prompts are 
presented for password criteria. The prompt function was used to ask the user questions regarding the length (within a certain range) and type of 
characters included in the password - for example, "Would you like lower case letters?". After the prompts have been answered (a total of 5), functions have been 
created to validate the input data, and alerts are provided for any invalid inputs. At least one 'special' character must be selected (out of uppercase, 
lowercase, symbols or numbers) for the password. If the input data is valid, a password is randomly generated from a group of arrays of 
'special' characters. The password is then presented within the box, with the number of characters being the number that the user selected. 
The input validations work well and if all character type prompts are answered 'No', an alert tells the user that at least one must be selected.
There is a range of 8 - 128 for number of characters, and if the user selects a number outside this range, an alert comes up and prevents any further
prompts until a valid number is inputted. 
Once the first prompt appears, the user is able to cancel out of it. However the second prompt appears afterwards which also has to be cancelled to exit out of 
the prompts. I was unable to work out how to cancel out of the prompts only once. 
