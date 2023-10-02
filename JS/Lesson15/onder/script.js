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
.. some code
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

function isGreaterOrLess(num1, num2) {
	if (num1 > num2) {
		console.log('First number is greater than second number')
	} else if (num1 < num2) {
		console.log('First number is less than second number')
	} else {
		console.log('First number is equal to second number')
	}
}
isGreaterOrLess(65, 54);
isGreaterOrLess(44, 87);
isGreaterOrLess(34, 34);

// 4. Write a program that takes in a string and checks if the first letter is uppercase using if else statement.

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

function isNumberPositiveOrNegative(numbervalue) {
	if (numbervalue > 0) {
		console.log('Number is positive');
	} else if (numbervalue < 0) {
		console.log('Number is negative');
	} else {
		console.log('Number is equel to zero');
	}
}
isNumberPositiveOrNegative(69);
isNumberPositiveOrNegative(-29);
isNumberPositiveOrNegative(0);

// 6. Write a program that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.

function isLeapYear(yearNumber) {
	if ((yearNumber % 4 === 0 && yearNumber % 100 !== 0) || yearNumber % 400 === 0) {
		console.log('İt is a leap year')
	} else {
		console.log('İt is not a leap year');
	}
}
isLeapYear(2000);
isLeapYear(2023);

// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.

function isTemperatureCheckFreezing(temperature) {
	if (temperature < 0) {
		console.log('temperature is below freezing');
	} else if (temperature > 0) {
		console.log('temperature is above freezing');
	}
}
isTemperatureCheckFreezing(0); //  The temperature is exactly at freezing point.
isTemperatureCheckFreezing(-5);
isTemperatureCheckFreezing(51);

// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function checkBMI(weight, height) {
	const BMI = weight / (height ** 2);
	if (BMI < 18.5) {
		console.log('Underweight');
	} else if (BMI >= 18.5 && BMI <= 24.9) {
		console.log('Healthy Weight');
	} else if (BMI >= 25.0 && BMI <= 29.9) {
		console.log('Overweigh');
	} else {
		console.log('Obesity');
	}
}
checkBMI(48, 1.7);
checkBMI(78, 1.8);
checkBMI(78, 1.7);
checkBMI(128, 1.6);


// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function PersonAge(age) {
	if (age >= 0 && age <= 12) {
		console.log("child");
	} else if (age >= 13 && age <= 19) {
		console.log("teenager");
	} else if (age >= 20 && age <= 64) {
		console.log("Adult");
	} else {
		console.log("Senior citizen")
	}
}

PersonAge(8); //child
PersonAge(16); //teenager
PersonAge(42); //adult
PersonAge(78); //senior citizen

// 10. Write a program that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".



function checkVotingEligibility(age, is_student) {
	if (typeof age === 'number' && typeof is_student === 'boolean') {
		if (age < 18 && is_student === true) {
			console.log(10, 'You are a student and not old enough to vote.');
	} else if (age <= 65 && is_student === false) {
			console.log(10, 'You are eligible to vote');
	} else if (age > 65) {
			console.log(10, 'You are a senior citizen.');
	} else if (is_student === true) {
			console.log(10, 'You are old enough to vote.');
	}
	} else {
        console.log(10, 'Invalid input');
    }
}

checkVotingEligibility(25, true); 
checkVotingEligibility(65, false); 
checkVotingEligibility(18, true);
checkVotingEligibility('sdas', 20);




// 11. Write a program that asks the user to enter their salary and their years of experience. 
//If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". 
//If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". 
//If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

function checkSalaryAndExperience(salary, experience) {
	if (salary < 30000 && experience < 5) {
		console.log('Sorry, we cannot offer you the job at this time');
	} else if (salary < 50000 && experience >= 5 && experience <= 10) {
		console.log('We can offer you the job at a lower salary')
	} else if (salary > 50000 && experience > 10) {
		console.log('We can offer you the job at the requested salary');
}
}
checkSalaryAndExperience(22000, 3);
checkSalaryAndExperience(45000, 7);
checkSalaryAndExperience(125000, 25);

// 12. Write a program that asks the user to enter their score on a test.
// If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great".
 // If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". 
  //If the score is greater than 90, print "You got an A+ - Great job!".

function checkScore(score) {
	if (score < 60) {
		console.log('You failed the test');
	} else if (score >= 60 && score <= 70) {
		console.log('You passed the test, but your grade is not great');
	} else if (score >= 71 && score <= 80) {
		console.log('You got a B');
	} else if (score >= 81 && score <= 90) {
		console.log('You got an A');
	} else {
		console.log('You got an A+ - Great job!');
	};
}
checkScore(45);
checkScore(65);
checkScore(72);
checkScore(86);
checkScore(98);

// 13. Write a program that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.

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

// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F)and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

function checkGrade(grade) {
	switch (grade) {
		case 'A':
		case 'B':
		case 'C':
			console.log(grade, 'passing');
			break;
			case "D":
            case "F":
		console.log(grade, 'failing');
			break;
	}
}
checkGrade('B');
checkGrade('D');

// 15. Write a program that asks the user to enter their age,and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years).  If the user enters a negative number or zero, display an error message.

function calculateDogYears(age) {
	let dogYears = age * 7;
	if (age <= 0) {
		console.log('Error: invalid input');
	} else {
		console.log('Your age is equel to ' + dogYears + ' dog years');
	}
}
calculateDogYears(35);
calculateDogYears(-5);
