// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//I need to use 'if' and 'else if' statements to set a range for the numbers to output desired. I will have to set 3 outputs based around 212 . One at temp, one below and one above. I will use template literals to console back the exact temperature that was entered.

var temp = 35
// var temp = 350
// var temp = 212

if(temp === 212) {
    console.log('212 is at boiling point')

} else if(temp < 212){
console.log(`${temp} is below boiling point`)

} else if(temp > 212){
console.log(`${temp} is above boiling point`)
}



// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

// I need to join arrays by using concat, putting the array name in the parentheses and then using the length command after that to get the expected output.

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

myNumbers1.concat(myNumbers2).length


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

//At first i tried using the 'reverse' command but i forgot that was an Array method. Now i have to look up reversing strings (slipped my mind how). So, i need to use 'split' first which returns an array, then i can continue with what i was going to do with 'reverse' and 'join'.  I will need to create a function to complete this. Using string as the argument. I will then run the function for both strings.
 
var myString1 = "charlie"
var myString2 = "delta"

function reverse (string){
    return console.log(string.split("").reverse().join(""))
}
reverse(myString1);
reverse(myString2);


// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

//I need to create a statement that will say 'if' x number is smaller than y number, then subtract smaller number from it by using greater than and less than logic and 'if' statement and 'else' statement.

var number1 = 42
var number2 = 27

// var number1 = 7
// var number2 = 19

if(number1 > number2) {
    console.log(number1 - number2)
} else {
    console.log(number2 - number1)

}


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

//In this case now i need to use 'typeof' to be able to make sure that the only type of information i take in is numbers. I will write it so that it will say if this input is NOT a number, then console.log warning message. I will have to also use 'or' since there is a second variable. If they are both numbers then i need it to go to 'else' statements to finish it off.

var numberRefactor1 = 42
var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24

if(typeof numberRefactor1 !== 'number' || typeof numberRefactor2 !== 'number' ){
    console.log("Your input is not a number")
    }
    else if (numberRefactor1 > numberRefactor2) {
        console.log(numberRefactor1 - numberRefactor2)
    } else {
        console.log(numberRefactor2 - numberRefactor1)
    }