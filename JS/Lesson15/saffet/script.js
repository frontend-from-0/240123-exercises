/*  
Functions

Functions are one of the fundamental building blocks of the language. They are reusable blocks of code that can be executed when needed. Functions encapsulate a set of statements and can be called or invoked to perform a specific task or calculation. 

Function Declaration
function (parameter1, parameter2) {
  return parameter1 * parameter2;
}

Named function:
function multiplyTwoNumbers(parameter1, parameter2) {
  return parameter1 * parameter2;
}
multiplyTwoNumbers(1, 4);

Function Expression
const sumOfTwoNumber = function (parameter1, parameter2) {
  return parameter1 * parameter2;
};

Arrow Function (introduced in ECMAScript 6)
const greet = () => {
  console.log('Hello world');
};

greet();
*/

// function multiplyTwoNumbers(parameter1, parameter2) {
// 	return parameter1 * parameter2;
// }
// console.log(multiplyTwoNumbers(1, 4));

/* 
Conditional statements (if...else, switch)

Conditional statements in JavaScript are used to make decisions and execute different blocks of code based on certain conditions. They allow you to control the flow of your program and determine which code should be executed depending on whether a condition evaluates to true or false.

if Statement
if (condition) {

}

if ... else Statement
if (condition) {
 ... some code
} else if (another condtion) {
 ... some code
} else {
 ... some code
}

Switch statement
switch (day) {
  case 'Monday':  // this means that day === 'Monday'
   console.log('It\'s Monday'); 
   break;
  case 'Tuesday':
    console.log('It\'s Tuesday');
    break; // Use break key word if you don't use return key word in the statement;
    .... cases for other days of the week
  default:
    console.log('Unknow day');
    break;
}
*/

// 1. Write a program that takes in a number and checks if it's even or odd using if else statement.
console.log("Ex1:");
function oddOrEven(number){
	if(number % 2 == 0){
		console.log("Number is even :)");
	}
	else{
		console.log("Number is odd :(");
	}
}

oddOrEven(156);
oddOrEven(333);
console.log("-------------------------------------------------");
// 2. Write a program that takes age as input. If the age is less than 18, print "Sorry, you are not old enough to vote". 
// 	  If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print 
// 	  "You are a senior citizen".
console.log("Ex2:");
function checkAge(age){
	if(age < 18){
		console.log("Sorry, you are not old enough to vote");
	}
	else if(age>18 && age<65){
		console.log("You are eligible to vote");
	}
	else{
		console.log("You are a senior citizen");
	}
}

checkAge(17);
checkAge(43);
checkAge(78);

console.log("-------------------------------------------------");
// 3. Write a program that asks the user to enter two numbers and checks if the first number is greater than, less than, 
//    or equal to the second number using if else statement.
console.log("Ex3:");
function numCheck(num1, num2){
	if(num1<num2){
		console.log("Number 1 is less then number 2");
	}
	else if(num1>num2){
		console.log("Number 1 is greater then number 2");
	}
	else if(num1 === num2){
		console.log("These numbers are equal");
	}
	else{
		console.log("Not valid comparison");
	}
}
numCheck(3,2);
numCheck(134,235);
numCheck(76,76);

console.log("-------------------------------------------------");
// 4. Write a program that takes in a string and checks if the first letter is uppercase using if else statement.
console.log("Ex4:");

function checkUpperCase(string){
	if(string[0]===string[0].toUpperCase()){
		console.log("First letter is uppercase");
	}
	else{
		console.log("First letter is not uppercase");
	}
}
checkUpperCase("Saffet");
checkUpperCase("ramazan");
console.log("-------------------------------------------------");
// 5. Write a program that takes in a number and checks if it's positive, negative, or zero using if else statement.
console.log("Ex5:");

function checkSign(number){
	if(number < 0){
		console.log("The number is negative (-)");
	}
	else if(number > 0){
		console.log("The number is positive (+)");
	}
	else{
		console.log("The number is zero (0)");
	}
}
checkSign(3);
checkSign(-4);
checkSign(0);

console.log("-------------------------------------------------");
// 6. Write a program that takes in a year and checks if it's a leap year 
//(is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.
console.log("Ex6:");

function checkLeapYear(year){
	if(year % 4 == 0 && year % 400 == 0){
		console.log("It's leap year");
	}
	else{
		console.log("It is not leap year");
	}
}

checkLeapYear(1800); // it is not leap year.
checkLeapYear(1600); // it is a leap year.

console.log("-------------------------------------------------");
// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.
console.log("Ex7:");

function checkTemp(temperature){
	if(temperature <= 0){
		console.log("Below freezing")
	}
	else{
		console.log("Above freezing");
	}
}
checkTemp(-10);
checkTemp(10);
checkTemp(0);

console.log("-------------------------------------------------");
// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity
console.log("Ex8:");
function chechBody(weight, height){
	let bmi = weight / (height*height);

	if (bmi < 18.5)
	console.log("underweight");

	else if (bmi >= 18.5 && bmi < 24.9)
	console.log("Healthy");

	else if (bmi >= 24.9 && bmi < 30)
   console.log("overweight");

	else if (bmi >= 30)
	console.log("Obesity");
}

chechBody(25, 1.69);
chechBody(75, 1.69);
chechBody(100, 1.69);


console.log("-------------------------------------------------");
// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.
console.log("Ex9:");
function checkCategory(age1){
	if(age1<12 && age1>0){
		console.log("Child");
	}
	else if(age1>13 && age1<19){
		console.log("Teenager");
	}
	else if(age1>20 && age1<64){
		console.log("Adult");
	}
	else{
		console.log("Senior Citizen");
	}
}

checkCategory(10);
checkCategory(17);
checkCategory(45);
checkCategory(80);

console.log("-------------------------------------------------");
// 10. Write a program that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

// 11. Write a program that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

// 12. Write a program that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

// 13. Write a program that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.

// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

// 15. Write a program that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.
