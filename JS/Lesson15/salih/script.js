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
function checkIfTwoNumbers(num1, num2) {
	return num1 > num2 ? " Number is Greater Then Second Number"
	: num2 > num1 ? "Second Number is Greater First Then  Number"
	: "These Numbers are Equal";
}
// NOTE: Because of I saw this method in FCC, I would like to try. I believe it is more simple that kind of examples.
console.log('Exercise 3: ', checkIfTwoNumbers(5,15));
console.log("__________________________________________________");

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
console.log("__________________________________________________");

// 5. Write a program that takes in a number and checks if it's positive, negative, or zero using if else statement.
function checkIfPositiveOrNegative(num51) {
	return num51 > 0 ? "Positive"
	: 0 > num51 ? "Negative"
	: "Zero";
}

console.log('Exercise 5.1: ', checkIfPositiveOrNegative(25));
console.log('Exercise 5.2: ', checkIfPositiveOrNegative(-25));
console.log('Exercise 5.3: ', checkIfPositiveOrNegative(0));

console.log("__________________________________________________");

// 6. Write a program that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.
function checkIfItIsLeapYear(year){
	if (year % 4 == 0){
		if(year % 100 !== 0){
			return "Leap Year"
		}
	}
	return "Not a Leap Year"
}
console.log('Exercise 6.1: ', checkIfItIsLeapYear(1993));
console.log('Exercise 6.2: ', checkIfItIsLeapYear(1904));

//NOTE: I'm not sure where I need to use'if else' statement. I guess it is working.
console.log("__________________________________________________");

// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.
function checkTemp(temp) {
	return temp >= 0 ? "Above Freezing"
	: "Below Freezing";
}

console.log('Exercise 7.1:', checkTemp(28));
console.log('Exercise 7.2:', checkTemp(-6));

console.log("__________________________________________________");
// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function chechBMI(height, weight){
	const BMI = weight / ([height]^2);
	if (BMI <= 18.5){
		return "Underweight";
	} else if (BMI > 18.5 && BMI <24.9){
		return "Healthy Weight";
	} else if (BMI > 25 && BMI <29.9) {
		return "Overweight";
	} else if (BMI > 30) {
		return "Above Obesity";
	} else {
		return "N/A"
	};
}
console.log('Exercise 8.1:', chechBMI(1.80, 95));
console.log('Exercise 8.2:', chechBMI(1.80, 82));
console.log('Exercise 8.3:', chechBMI(1.80, 70));
console.log("__________________________________________________");

// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function checkAge(age){
	if (age > 0 && age < 12){
		return "child";
	} else if (age > 13 && age < 19){
		return "teenager";
	} else if (age > 20 && age < 64) {
		return "adult";
	} else if (age > 65) {
		return "senior citizen";
	} else {
		return "N/A"
	};
}
console.log('Exercise 9.1:', checkAge(23));
console.log('Exercise 9.2:', checkAge(85));
console.log('Exercise 9.3:', checkAge(15));


console.log("__________________________________________________");
// 10. Write a program that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".
function checkVotingEligibility(age, isStudent) {
	if (age < 18 && isStudent === 'yes') {
	  return 'You are a student and not old enough to vote';
	} else if (age >= 18 && age <= 65 && isStudent === 'no') {
	  return 'You are eligible to vote';
	} else if (age > 65) {
	  return 'You are a senior citizen';
	} else if (age >= 18 && isStudent === 'yes') {
	  return 'You are old enough to vote';
	}
  }

console.log('Exercise 10.1:', checkVotingEligibility(23, "yes"));
console.log('Exercise 10.2:', checkVotingEligibility(85, "no"));
console.log('Exercise 10.3:', checkVotingEligibility(15, "yes"));

console.log("__________________________________________________");
// 11. Write a program that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".
function checkJobOffer(salary, yearsOfExperience) {
	if (salary < 30000 && yearsOfExperience < 5) {
	  return "Sorry, we cannot offer you the job at this time";
	} else if (salary < 50000 && yearsOfExperience >= 5 && yearsOfExperience <= 10) {
	  return "We can offer you the job at a lower salary";
	} else {
	  return "We can offer you the job at the requested salary";
	}
  }

console.log('Exercise 11.1:', checkJobOffer(55000, 8));

console.log("__________________________________________________");
// 12. Write a program that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".
function checkTestScore(score) {
	if (score < 60) {
	  return "You failed the test";
	} else if (score >= 60 && score <= 70) {
	  return "You passed the test, but your grade is not great";
	} else if (score >= 71 && score <= 80) {
	  return "You got a B";
	} else if (score >= 81 && score <= 90) {
	  return "You got an A";
	} else if (score > 90) {
	  return "You got an A+ - Great job!";
	}
  }

console.log('Exercise 12.1: ', checkTestScore(78));

console.log("__________________________________________________");
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
console.log("__________________________________________________");
// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.
function checkGrade(grade) {
	let message = "";
	grade = grade.toUpperCase();
	switch (grade) {
	  case 'A':
	  case 'B':
	  case 'C':
		message = 'Passing grade';
		break;
	  case 'D':
	  case 'F':
		message = 'Failing grade';
		break;
	  default:
		message = 'Invalid grade';
		break;
	}
  
	return message;
  }

  console.log('Exercise 14.1: ', checkGrade("A"));
  console.log('Exercise 14.2: ', checkGrade("f"));

console.log("__________________________________________________");
// 15. Write a program that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.
function calculateDogYears(humanAge) {
	if (humanAge <= 0) {
	  return "Error: Invalid age. Please enter a positive number.";
	}
  
	let dogAge = humanAge * 7;
	return `Your age in dog years is ${dogAge}.`;
  }

  console.log('Exercise 15.1: ', calculateDogYears(25));

console.log("__________________________________________________");