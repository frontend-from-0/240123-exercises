console.log('- - - - - - - - - - - - - - - - - EXERCISE 1 - - - - - - - - - - - - - - - - - ');
// 1. Write a loop that prints out the numbers from 1 to 10.
for (let i = 1; i<=10; i++) {
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - EXERCISE 2 - - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...
for (let i = 1; i<20; i = i+2){
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - EXERCISE 3 - - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...
for (let i =2; i<=20; i+=2) {
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - EXERCISE 4 - - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [300, 10, 23, 42, 505, 12, 7, 4, 900, 1200];
let num = findMaxNumberInArray[0];
for (let i = 1; i < findMaxNumberInArray.length; i++) {
	if (num < findMaxNumberInArray[i]) {
		num = findMaxNumberInArray[i];
	}
}

console.log(num);


console.log('- - - - - - - - - - - - - - - - - EXERCISE 5 - - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];
let num1 = findMinNumberInArray[0];
for (let i = 1; i < findMinNumberInArray.length; i++) {
	if (num1>findMinNumberInArray[i]) {
		num1 = findMinNumberInArray[i];
	}
}

console.log(num1);

console.log('- - - - - - - - - - - - - - - - - EXERCISE 6 - - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let newString = "";

for (let i = string.length-1; i >= 0; i--) {
	newString = newString + string[i]
}
console.log(newString);
console.log('- - - - - - - - - - - - - - - - - EXERCISE 7 - - - - - - - - - - - - - - - - - ');
// 7. Write a while loop that counts from 10 to 1 and prints out each number.

let i = 10;
while (i >= 1) {
	console.log(i);
	i--;
}

console.log('- - - - - - - - - - - - - - - - - EXERCISE 8 - - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
function getRandomNumber () {
	return Math.floor(Math.random()*10)+1;
}

let iteration = 1;
let randomNumber = getRandomNumber();
let randomNumbers = [randomNumber];
while(randomNumber <= 8) {
	randomNumber = getRandomNumber();
	randomNumbers.push(randomNumber);
	iteration++;
}

console.log("Iterations:", iteration, "Random Number:", randomNumber, "Numbers:", randomNumbers);

console.log('- - - - - - - - - - - - - - - - - EXERCISE 9 - - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
let number = 1;
do {
	console.log(number);
	number++;
}

while (number <= 10);


console.log('- - - - - - - - - - - - - - - - - EXERCISE 10 - - - - - - - - - - - - - - - - ');
// 10. Write a for...in loop that prints out the keys and values of an object.
const person = {name: "John", surname: "Doe", age: 30, city: "New York"};
// Array olsaydi boyle olurdu: ["John", "Doe", 30 , "New York"];
// Array element position numbers: 0, 1, 2, 3
// Object keys: name, surname, age, city 

for (const objectKey in person) {
	console.log(`${objectKey}: ${person[objectKey]}`);
}


console.log('- - - - - - - - - - - - - - - - - EXERCISE 11 - - - - - - - - - - - - - - - - ');
// 11. Write a for...in loop that sums the values of an object.
const obj = {a: 10, b: 20, c: 30, d: 23};
let sum = 0;
for (const key in obj) {
	sum += obj[key];
}

console.log(sum);

console.log('- - - - - - - - - - - - - - - - - EXERCISE 12 - - - - - - - - - - - - - - - - ');
// 12. Write a loop that finds the average of an array of numbers.
const numbers12 = [10, 20, 30, 40, 50];

let sum1 = 0;

for (i = 0; i < numbers12.length; i++) {
	sum1 += numbers12[i];
}

let average = sum / numbers12.length;

console.log(`The average of the numbers is ${average}.`);

console.log('- - - - - - - - - - - - - - - - - EXERCISE 13 - - - - - - - - - - - - - - - - ');
// 13. Write a loop that prints out the sum of all even numbers between 1 and 50.
let sum2 = 0;

for (i = 0; i <= 50; i += 2) {
	sum2 += i;
}

console.log(`The sum of all even numbers between 1 and 50 is ${sum2}.`);

console.log('- - - - - - - - - - - - - - - - - EXERCISE 14 - - - - - - - - - - - - - - - - ');
// 14. Write a loop that finds the second largest number in an array of numbers.
let numbers14 = [10, 5, 20, 8, 15];
numbers14.sort(function(a, b) {
	return b - a;
	}
);
console.log(numbers14);
console.log(`The second largest number is ${numbers14[1]}.`);

console.log('- - - - - - - - - - - - - - - - - EXERCISE 15 - - - - - - - - - - - - - - - - ');
// 15. Write a loop that counts the number of vowels in a given string.
const string15 = 'Hello, how are you?';
const vowels = 'aeiouAEIOU';
let countsNumVovels = 0;
for (let i = 0; i < string15.length; i++) {
	for (let ii = 0; ii < vowels.length; ii++) {
		if ( string15[i].includes(vowels[ii])) {
			countsNumVovels++;
		}
	}
}
console.log(`The number of vowels in "${string15}" is ${countsNumVovels}.`);

console.log('- - - - - - - - - - - - - - - - - EXERCISE 16 - - - - - - - - - - - - - - - - ');
// 16. Write a loop that calculates the sum of all digits in a given number.
let sum3 = 0;
function sumAllDigits(num) {
	let numString = num.toString();
	for (let i = 0; i < numString.length; i++) {
		sum3 += parseInt(numString[i]);
	}
	return sum3;
}

console.log(`The sum of all given digits is ${sumAllDigits(123456789)}.`);
