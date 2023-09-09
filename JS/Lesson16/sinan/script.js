// 1. Write a loop that prints out the numbers from 1 to 10.
for (let i =0; i<10; i++) {
	console.log(i);
	}
console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...
for(let i=1; i<20; i+=2){
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...
for(let i =0; i<20; i+=2) {
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [30, 10, 23, 42, 5505, 12, 77777, 4, 900,12300];
let num = findMaxNumberInArray[0];
for (let i = 0; i < findMaxNumberInArray.length; i++){
	if(num < findMaxNumberInArray[i+1]){
	num = findMaxNumberInArray[i+1];
}}
console.log('Exercise 4:',num);

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 5, 12, 7, -2,-15];
let minNumber = findMinNumberInArray[0];
for (let i = 0; i < findMinNumberInArray.length; i++) {
	if(minNumber > findMinNumberInArray[i+1]){
		minNumber = findMinNumberInArray[i+1]
	}
}
console.log('Exercise 5:',minNumber);

console.log('- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let newString = ""; 
for ( let i = string.length-1; i>=0; i--){
	newString = newString + string[i];
}
console.log('Exercise 6:',newString);


const arrayEx6 = [1,2,3,4,5,6,7,89,8,6,3,23,324,123];
let newArray = [];
for (let i=arrayEx6.length-1; i >=0; i--)
{
	newArray.push(arrayEx6[i]);
}
console.log('Exercise 6.1:',newArray);
console.log('- - - - - - - - - - - - - - - - - ');
// 7. Write a while loop that counts from 10 to 1 and prints out each number.
let count = 0;
while(count < 10) {
	console.log(count);
	count++;
}
console.log('- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
function randomNumberGenerator(){
	return randNumber = Math.floor(Math.random()*10)+1;
}
let counter = 1;
let randomNumber = randomNumberGenerator();
let randNumbers = [randomNumber];
while (randomNumber <= 8) {
    randomNumber =  randomNumberGenerator();
	randNumbers.push(randomNumber);
	counter++;
	}
console.log('Exercise 8:\n The counter:',counter,'The last random number:',randomNumber,'Random number array:',randNumbers);

console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.

let doWhileNumbers = 1;
do {
	console.log('Exercises 9:',doWhileNumbers);
	doWhileNumbers++;
}
 while (doWhileNumbers <= 10 );

 
console.log('- - - - - - - - - - - - - - - - - ');
// 10. Write a for...in loop that prints out the keys and values of an object.
const person = {name: "John", surname: "Doe", age: 30, city: "New York"};
// Array olsaydi boyle olurdu: ["John", "Doe", 30 , "New York"];
// Array element position numbers: 0, 1, 2, 3
// Object keys: name, surname, age, city 
for(const key in person) {
	console.log(`${key}:${person[key]}`);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 11. Write a for...in loop that sums the values of an object.
const obj = {a: 10, b: 20, c: 30, d: 23, e:15, f:2};
let sum = 0;
for(const key in obj)
 {
	sum+=obj[key];
 }
console.log('Exercise 11:',sum);

console.log('- - - - - - - - - - - - - - - - - ');
// 12. Write a loop that finds the average of an array of numbers.
const numbers12 = [10, 20, 30, 40, 50];
let sumofArray = 0;
for (let number of numbers12) {
	sumofArray += number;
 }
let average = sumofArray / numbers12.length;
console.log('Exercise 12:',average); 

console.log('- - - - - - - - - - - - - - - - - ');
// 13. Write a loop that prints out the sum of all even numbers between 1 and 50.
let j = 1;
let total = 0;
while(j<=50){
	if (j % 2 == 0){
		total += j; 
	}
	j++;
	console.log(j);
}
console.log('Exercise 13:', total);

console.log('- - - - - - - - - - - - - - - - - ');

// 14. Write a loop that finds the second largest number in an array of numbers.
const numbers14 = [10, 19, 5, 21, 22,30, 20, 8, 15, 17,19];

let largest = numbers14[0];
for (let i = 1; i < numbers14.length; i++) {
  if (numbers14[i] > largest) {
    largest = numbers14[i];
  }
}
let secondLargest = numbers14[0];
for (let i = 1; i < numbers14.length; i++) {
  if (numbers14[i] !== largest && numbers14[i] > secondLargest) {
    secondLargest = numbers14[i];
  }
}

console.log('Exercise 14:',secondLargest); 
console.log('- - - - - - - - - - - - - - - - - ');
// 15. Write a loop that counts the number of vowels in a given string.
 const string15 = 'Hello, how are you?';
const vowels = 'aeiouAEIOU';

let vowelCount = 0;
for (let char of string15) {
  if (vowels.includes(char)) {
    vowelCount++;
	}
}
console.log('Exercise 15:',vowelCount)
console.log('- - - - - - - - - - - - - - - - - ');
// 16. Write a loop that calculates the sum of all digits in a given number.
function sumDigits(num) {
	let sum = 0;
		while (num > 0) {
		sum += num % 10;
		console.log('sum is:',sum,'num is:',num)
		num = Math.floor(num / 10);
		console.log('now sum is:',sum,'now num is:',num)
}
		return sum;
}
	console.log(sumDigits(12345)); // Output: 15
console.log('- - - - - - - - - - - - - - - - - ');
