// 1. Write a loop that prints out the numbers from 1 to 10.
for (let i = 1; i<=10; i++) {
	console.log(i);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...
for (let i = 1; i<20; i = i+2){
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...
for (let i =2; i<=20; i+=2) {
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [300, 10, 23, 42, 505, 12, 7, 4, 900];
let num = findMaxNumberInArray[0];
for(let i = 0; i<findMaxNumberInArray.length; i++) {
if(num<findMaxNumberInArray[i+1]){
	num = findMaxNumberInArray[i+1];
}
}
console.log(num);

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];
let num1 = findMinNumberInArray[0];

for (let i= 1; i<findMinNumberInArray.length; i++) {
	if(num1>findMinNumberInArray[i]) {
			num1 = findMinNumberInArray[i];
	}
}
console.log(num1);
console.log('- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let newString = "";
for (let i = string.length - 1; i >= 0; i--) {
newString = newString + string[i]; 
// . + t 
// .t + i
// .ti + l
}
console.log(newString);

const arrayEx6 = [1,2,3,5,242,32,23,232,112,233];
let newArray = [];

for(let i = arrayEx6.length-1; i >= 0; i--){
	newArray.push(arrayEx6[i]);
}
console.log(newArray);

console.log('- - - - - - - - - - - - - - - - - ');
// 7. Write a while loop that counts from 10 to 1 and prints out each number.
let number7= 10;
while(number7>=1) {
	console.log("Exercise 7: ", number7);
	number7--;
 }

console.log('- - - - - - - - - - - - - - - - - ');

// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.

let totalIterationsNumber = 0;
let randomNumbers = 0 [randomNumber];

while (randomNumber <= 8) {
	randomNumber = Math.floor(Math.random() * 10) + 1;
	totalIterationsNumber++;
}
console.log("Exercise 8: ", 'Total number of iterations: ', totalIterationsNumber);


console.log("- - - - - - - - - - - - - - - - - ");
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
let number9 = 1;
do {
	console.log(number9);
	number9++;
} while (number9 <= 10);

console.log('- - - - - - - - - - - - - - - - - ');
// 10. Write a for...in loop that prints out the keys and values of an object.
let person = {
    name: "John",
    surname: "Doe"
    age: 30,
    city: "New York"
  };
  
  for (let key in person) {
    console.log(`Key: ${key}, Value: ${person[key]}`);
  }
  
console.log('- - - - - - - - - - - - - - - - - ');

// 11. Write a for...in loop that sums the values of an object.

const myObject = {
    value1: 10,
    value2: 20,
    value3: 30
  };
  
  let sum = 0;
  
  for (let key in myObject) {
    sum += myObject[key];
  }
  
  console.log("Sum:", sum);
  
console.log('- - - - - - - - - - - - - - - - - ');

// 12. Write a loop that finds the average of an array of numbers.

const numbers = [10, 20, 30, 40, 50];
let sumArray = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;
console.log("Average:", averageArray);


console.log('- - - - - - - - - - - - - - - - - ');
// 13. Write a loop that prints out the sum of all even numbers between 1 and 50.

let sum = 0;

for (let i = 2; i <= 50; i += 2) {
  sum += i;
}

console.log("Sum of even numbers:", sum);


console.log('- - - - - - - - - - - - - - - - - ');
// 14. Write a loop that finds the second largest number in an array of numbers.
const numbers14 = [10, 5, 20, 8, 15];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i] > secondLargest && numbers[i] < largest) {
    secondLargest = numbers[i];
  }
}
console.log("Second largest number:");

console.log('- - - - - - - - - - - - - - - - - ');

// 15. Write a loop that counts the number of vowels in a given string.
const string15 = 'Hello, how are you?';
const vowels = 'aeiouAEIOU';
let vowelCount = 0;

for (let i = 0; i < givenString.length; i++) {
  const char = givenString[i].toLowerCase();
  if (vowels.includes(char)) {
    vowelCount++;
  }
}

console.log("Number of vowels:", vowelCount sitringis15);

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
console.log('- - - - - - - - - - - - - - - - - ');

