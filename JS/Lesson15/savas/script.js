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

function multiplyTwoNumbers(parameter1, parameter2) {
	return parameter1 * parameter2;
}
console.log(multiplyTwoNumbers(1, 4));

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
console.log("---------------------- Excersise 1: ----------------------  This excersise was done in the lesson.")

function isEvenOrOdd(number) {
	if (number % 2 === 0) {
		console.log('it is even');
	} else {
		console.log('it is odd');
	}
}

isEvenOrOdd(4);
isEvenOrOdd(7);

// 2. Write a program that takes age as input. If the age is less than 18, print "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".
console.log("---------------------- Excersise 2: ---------------------- This excersise was done in the lesson.")

function checkAge(age) {
	if (age < 18) {
		console.log('Sorry, you are not old enough to vote');
	} else if (age >= 18 && age <= 65) {
		console.log('You are eligible to vote');
	} else {
		console.log('you are a citizen');
	}

	// if (age < 18) {
	// 	console.log('Sorry, you are not old enough to vote');
	// } else if (age > 65) {
	//   console.log('You are a citizen');
	// } else {
	// 	console.log('You are eligible to vote');
	// }
}

checkAge(15);
checkAge(53);
checkAge(90);
checkAge(18);
checkAge(65);

// 3. Write a program that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.
console.log("---------------------- Excersise 3: ----------------------")

function compareNumbers(a, b) {
    if (a > b) {
        console.log("First number greater than second number.")
    }

    else if (a < b) {
        console.log("Second number greater than first number.")
    }

    else {
        console.log("Both numbers are equal.")
    }
}

compareNumbers(2, 5);
compareNumbers(3, 1);
compareNumbers(7, 7);

// 4. Write a program that takes in a string and checks if the first letter is uppercase using if else statement.
console.log("---------------------- Excersise 4: ---------------------- This excersise was done in the lesson.")

function checkIfStringIsUpperCase(stringToCheck) {
	if (stringToCheck[0] === stringToCheck[0].toUpperCase()) {
		console.log('first letter is uppercase');
	} else {
		console.log('is not uppercase');
	}
}

checkIfStringIsUpperCase('Write a program that takes in');
checkIfStringIsUpperCase('write a program that takes in');

// 5. Write a program that takes in a number and checks if it's positive, negative, or zero using if else statement.
console.log("---------------------- Excersise 5: ----------------------")

function typeOfNumber(number) {
    if (number < 0) {
        console.log("This is a negative number.")
    }

    else if (number > 0) {
        console.log("This is a positive number.")
    }

    else {
        console.log("This is zero.")
    }
}

typeOfNumber(4);
typeOfNumber(-9);
typeOfNumber(0);

// 6. Write a program that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.
console.log("---------------------- Excersise 6: ----------------------")

function isLeapYear(year) {
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        console.log("This year is a leap year.")
    }

    else {
        console.log("This is not a leap year.")
    }
}   

isLeapYear(1980);
isLeapYear(1329);
isLeapYear(880);
isLeapYear(400);
isLeapYear(2023);
isLeapYear(2024);

// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.
console.log("---------------------- Excersise 7: ----------------------")

function isFreezing(temperature) {
    if (temperature > 0) {
        console.log("The temperature is above freezing.")
    }

    else if (temperature < 0) {
        console.log("The temperature is below freezing.")
    }

    else {
        console.log("The temperature is at freezing point.")
    }
}

isFreezing(-3);
isFreezing(14);
isFreezing(0);

// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity
console.log("---------------------- Excersise 8: ----------------------")

function testBMI(height, weight) {
    const BMI = weight/(height ** 2)
    if (BMI < 18.5) {
        console.log("You are underweight.")
    }

    else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("You are healty weight.")
    }

    else if (BMI >= 25 && BMI <= 29.9) {
        console.log("You are overweight.")
    }

    else {
        console.log("You have obesity.")
    }
}

testBMI(1.80, 78);
testBMI(1.68, 74);
testBMI(1.50, 96);
testBMI(1.74, 50);

// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.
console.log("---------------------- Excersise 9: ----------------------")

function checkAge(age) {
    if ((age >= 0) && (age <= 12)) {
        console.log("You are a child.")
    }

    else if ((age >= 13) && (age <= 19)) {
        console.log("You are teenager.")
    }

    else if ((age >= 20) && (age <= 64)) {
        console.log("You are adult.")
    }

    else if (age >= 65) {
        console.log("You are senior citizen.")
    }

    else {
        console.log("Invalid value.")
    }
}

checkAge(18);
checkAge(24);
checkAge(76);
checkAge(50);
checkAge(8);
checkAge(-3);

// 10. Write a program that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".
console.log("---------------------- Excersise 10: ---------------------")

function appropriateForVote(age, isStudent) {
    if (age < 18 && isStudent) {
        console.log("You are a student and not old enough to vote.")
    }

    else if (age >= 18 && age <= 65 && !isStudent) {
        console.log("You are eligible to vote.")
    }

    else if (age >= 65) {
        console.log("You are a senior citizen.")
    }

    else if (age >= 18 && isStudent) {
        console.log("You are old enough to vote.")
    }
    else {
        console.log("Invalid value.")
    }
}

appropriateForVote(18, true);
appropriateForVote(24, false);
appropriateForVote(76, false);
appropriateForVote(50, true);
appropriateForVote(8, true);
appropriateForVote(-3, false);

// 11. Write a program that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".
console.log("---------------------- Excersise 11: ---------------------")

function offerSalary(salary, experience) {
    if (typeof salary !== 'number' || typeof experience !== 'number') { // should be the very first check
        console.log("Invalid input. Both salary and experience must be numbers.");
      }
      
    else if (salary < 30000 && experience < 5) {
        console.log("Sorry, we cannot offer you the job at this time.")
    }

    else if (salary < 50000 && experience >= 5 && experience <= 10) {
        console.log("We can offer you the job at a lower salary.")
    }

    else if (salary >= 50000 || experience >= 10) {
        console.log("We can offer you the job at the requested salary.")
    }

    else {
        console.log("Invalid input.")
    }
}

offerSalary(20000, 3);
offerSalary(52000, 12);
offerSalary(45000, 7);
offerSalary(55000, 5);
offerSalary(35000, 4);

// 12. Write a program that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".
console.log("---------------------- Excersise 12: ---------------------")

function testResult(score) {
    if (score < 60) {
        console.log("You failed the test")
    }

    else if (score >= 60 && score <= 70) {
        console.log("You passed the test, but your grade is not great")
    }

    else if (score >= 71 && score <= 80) {
        console.log("You got a B")
    }

    else if (score >= 81 && score <= 90) {
        console.log("You got an A")
    }

    else {
        console.log("You got an A+ - Great job!")
    }

}

testResult(20);
testResult(50);
testResult(65);
testResult(75);
testResult(83);
testResult(94);

// 13. Write a program that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.
console.log("---------------------- Excersise 13: --------------------- This excersise was done in the lesson.")

function whichMonthName(monthNumber) {
	switch (monthNumber) {
		case 12:
		case 1:
		case 2:
			console.log('Winter');
			break;
		case 3:
		case 4:
		case 5:
			console.log('Spring');
			break;
		case 6:
		case 7:
		case 8:
			console.log('Summer');
			break;
		case 9:
		case 10:
		case 11:
			console.log('Autumn');
			break;
		default:
			console.log('Invalid Input');
	}
}

whichMonthName(5);
whichMonthName(10);
whichMonthName(2);

// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.
console.log("---------------------- Excersise 14: ---------------------")

function result(gradeLetter) {
        switch (gradeLetter.toUpperCase()) {
        case "A":
        case "B":
        case "C":
            console.log("You passed the course")
        break;
        case "D":
        case "F":
        console.log("You failed the course")
        break;
        default:
			console.log('Invalid Input');
    }
}

result("A");
result("C");
result("F");
result("B");
result("D");
result("b");
result("d");

// 15. Write a program that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.
console.log("---------------------- Excersise 15: ---------------------")

function dogAge(yourAge) {
    if(yourAge <= 0) {
        console.log("ERROR: Your input is invalid.");
    }

    else {
        let yourDogAge = yourAge * 7;
        console.log(`Your dog age is ${yourDogAge}.`)
    }
}

dogAge(43);
dogAge(29);
dogAge(16);