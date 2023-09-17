// 1. Write a loop that prints out the numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
	console.log("Exercise 1: ", i);
}

console.log("- - - - - - - - - - - - - - - - - ");

// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7....

for (let i = 1; i <= 20; i += 2) {
	console.log("Exercise 2: ", i);
}

console.log("- - - - - - - - - - - - - - - - - ");

// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...

for (let i = 2; i <= 20; i += 2) {
	console.log("Exercise 3: ", i);
}

console.log("- - - - - - - - - - - - - - - - - ");

// 4. Write a loop that finds the maximum number in an array of numbers.

const findMaxNumberInArray = [3, 10, 23, 42, 55, 12, 7, 4, 90];
let maxnumber = findMaxNumberInArray[0];

for (let i = 1; i < findMaxNumberInArray.length; i++) {
	if (findMaxNumberInArray[i] > maxnumber) {
		maxnumber = findMaxNumberInArray[i];
	}
}
console.log("Exercise 4: ", maxnumber);

console.log("- - - - - - - - - - - - - - - - - ");

// 5. Write a loop that finds the minimum number in an array of numbers.

const findMinNumberInArray = [10, 1, 23, 42, 55, 12, 7, 4];
let minNumber = findMinNumberInArray[0];

for (let i = 1; i < findMinNumberInArray.length; i++) {
	if (findMinNumberInArray[i] < minNumber) {
		minNumber = findMinNumberInArray[i];
	}
}
console.log("Exercise 5: ", minNumber);

console.log("- - - - - - - - - - - - - - - - - ");

// 6. Write a loop that reverses a given string.

const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
function reverseString(str) {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}
console.log("Exercise 6: ", reverseString(string));

console.log("- - - - - - - - - - - - - - - - - ");

// 7. Write a while loop that counts from 10 to 1 and prints out each number.

let number7= 10;
while(number7>=1) {
	console.log("Exercise 7: ", number7);
	number7--;
 }

console.log('- - - - - - - - - - - - - - - - - ');

// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.

function getRandomNumber () {
	return Math.floor(Math.random()*10)+1;
	} 
	
	let iteration = 1;
	let randomNumber = getRandomNumber();
	let randomNumbers = [randomNumber];
	
	while(randomNumber <= 8){
	randomNumber = getRandomNumber();
	randomNumbers.push(randomNumber);
	iteration++;
	}
	
	console.log('Iterations:', iteration, 'random number: ', randomNumber, 'Numbers: ', randomNumbers);
	
	console.log('- - - - - - - - - - - - - - - - - ');

// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
let number9 = 1;
do {
	console.log(number9);
	number9++;
} while (number9 <= 10);

// 10. Write a for...in loop that prints out the keys and values of an object.

let person10 = {
    name: "John",
    surname: "Doe",
    age: 30,
    city: "New York"
  };
  
  for (let key in person10) {
    console.log(`Key: ${key}, Value: ${person10[key]}`);
  }
  
console.log('- - - - - - - - - - - - - - - - - ');

// 11. Write a for...in loop that sums the values of an object.

let obj = { a: 10, b: 20, c: 30 };
let sum11 = 0;

for (let key in obj) {
	sum11 += obj[key];
}
console.log("Exercise 11: ", "Sum:", sum11);
  
console.log('- - - - - - - - - - - - - - - - - ');

// 12. Write a loop that finds the average of an array of numbers.

const numbers12 = [10, 20, 30, 40, 50, 100, 100, 130, 420];
let sumArray = 0;

for (let i = 0; i < numbers12.length; i++) {
	sumArray += numbers12[i]
}
let averageArray = sumArray / numbers12.length;
console.log("Exercise 12: ", averageArray);


console.log('- - - - - - - - - - - - - - - - - ');

// 13. Write a loop that prints out the sum of all even numbers between 1 and 50.

let sum = 0;

for (let i = 2; i <= 50; i += 2) {
  sum += i;
}

console.log("Sum of even numbers:", sum);


let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
	evenSum += i;
}
console.log("Exercise 13: ", evenSum);


console.log('- - - - - - - - - - - - - - - - - ');

// 14. Write a loop that finds the second largest number in an array of numbers.
const numbers14 = [10, 5, 20, 8, 15, 554352587, 234, 697, 764764];

let max = Math.max(numbers14[0], numbers14[1]);
let secondMax = Math.min(numbers14[0], numbers14[1]);

for (let i = 2; i < numbers14.length; i++) {
	if (numbers14[i] > max) {
		secondMax = max;
		max = numbers14[i];
	} else if (secondMax < max && numbers14[i] > secondMax) {
		secondMax = numbers14[i];
	}
}
console.log("Exercise 14: ", "The second largest number: ", secondMax);


console.log('- - - - - - - - - - - - - - - - - ');

// 15. Write a loop that counts the number of vowels in a given string.

const string15 = 'Hello, how are you?';
const vowels = 'aeiouAEIOU';
let vowelCount = 0;

for (let i = 0; i < string15.length; i++) {
  const char = string15[i].toLowerCase();
  if (vowels.includes(char)) {
    vowelCount++;
  }
}

console.log("Number of vowels:", vowelCount, string15);


console.log('- - - - - - - - - - - - - - - - - ');

// 16. Write a loop that calculates the sum of all digits in a given number.
function sumDigits(num) {
	let sum = 0;
	let numString = num.toString();
	for (let i = 0; i < numString.length; i++) {
		sum += parseInt(numString[i]);
	}
	return sum;
console.log("Sum of digits:", sum);
}

console.log(sumDigits(12345)); // Output: 15

let vowelsCount = 0;

for (let i = 0; i < string15.length; i++) {
	for (let a = 0; a < vowels.length; a++) {
		if (string15[i].includes(vowels[a])) {
			vowelsCount++;
		}
	}
}

console.log("Exercise 15: ", "The number of vowels in string15: ", vowelsCount);


console.log('- - - - - - - - - - - - - - - - - ');

// 16. Write a loop that calculates the sum of all digits in a given number.

function sumDigits(num) {
	let sum = 0;
	let numString = num.toString();
	for (let i = 0; i < numString.length; i++) {
		sum += parseInt(numString[i]);
	}
	return sum;
}
console.log("Exercise 15: ", sumDigits(12345)); // Output: 15
console.log('- - - - - - - - - - - - - - - - - ');
