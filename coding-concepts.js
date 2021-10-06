// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: I counted all spaces including blank spaces and it was 10.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: 'l'
// b) Verify and explain: it's the 3rd index of a zero indexed system


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: 'Ruby'
// b) Verify and explain: index is equal to 1 and in a zero indexed file that will the 2nd item


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain:toUpperCase() is a built in function that changes lowercase letters to all uppercase.
// Correct answer was that toUpperCase is not a function. Trick question got me!


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: because it asked for length and length is a number so we get number.
