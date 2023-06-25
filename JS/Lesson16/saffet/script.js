// 1. Write a loop that prints out the numbers from 1 to 10.
console.log("Example 1:");

for(let i = 1; i<11; i++){
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...
console.log("Example 2:");

for (let i = 1; i<20; i = i+2){
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...
console.log("Example 3:");
for (let i =2; i<=20; i+=2) {
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
console.log("Example 4:");

const findMaxNumberInArray = [300, 10, 23, 42, 505, 12, 7, 4, 900, 32];

let num = findMaxNumberInArray[0];

for(let i = 0; i < findMaxNumberInArray.length; i++){
	if(findMaxNumberInArray[i]>num){
		num = findMaxNumberInArray[i];
	}
}
console.log(num);

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
console.log("Example 5:");

const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];

for(let i = 0; i < findMinNumberInArray.length; i++){
	if(findMinNumberInArray[i]<num){
		num = findMinNumberInArray[i];
	}
}
console.log(num);

console.log('- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
console.log("Example 6:");

const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

let newString = "";

for(let i = string.length -1; i>0; i--){
	newString = newString + string[i];
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
console.log("Example 7:");
let i = 10;

while(i>=1) {
	console.log(i);
	i--;
}
console.log('- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
console.log("Example 8:");

function generateRandomNum(){
	return Math.floor(Math.random()*10-1);
}
let count = 1;
let randomNum = generateRandomNum();
while(randomNum < 8 ){
	randomNum = generateRandomNum();
	count++;
}
console.log(count);

console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
console.log("Example 9:");
let number = 1;
do {
	console.log(number);
	number++;
} while (number<=10);

console.log('- - - - - - - - - - - - - - - - - ');
// 10. Write a for...in loop that prints out the keys and values of an object.
console.log("Example 10:");
const person = {name: "John", surname: "Doe", age: 30, city: "New York"};
// Array olsaydi boyle olurdu: ["John", "Doe", 30 , "New York"];
// Array element position numbers: 0, 1, 2, 3
// Object keys: name, surname, age, city 

for (const key in person){
	console.log(`${key}: ${person[key]}`);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 11. Write a for...in loop that sums the values of an object.
console.log("Example 11:");
const obj = {a: 10, b: 20, c: 30, d: 23};
let sum = 0;
for(const key in obj) {
	sum+= obj[key];
}
console.log(sum);
console.log('- - - - - - - - - - - - - - - - - ');
// 12. Write a loop that finds the average of an array of numbers.
console.log("Example 12:");

const numbers12 = [10, 20, 30, 40, 50];

let sumArray = 0 ;

for(let i = 0; i< numbers12.length; i ++){
	sumArray = sumArray + numbers12[i];
}
let averageArray = sumArray / numbers12.length;
console.log(averageArray);

console.log('- - - - - - - - - - - - - - - - - ');
// 13. Write a loop that prints out the sum of all even numbers between 1 and 50.
console.log("Example 13:");

for(let i = 1; i<50; i++){
	if(i % 2 === 0){
		console.log(i);
	}
}

console.log('- - - - - - - - - - - - - - - - - ');



//????????????


// 14. Write a loop that finds the second largest number in an array of numbers.----------------------????????????????????????????????
console.log("Example 14:");
const numbers14 = [10, 5, 20, 8, 15];


console.log(numbers14);
console.log('- - - - - - - - - - - - - - - - - ');
// 15. Write a loop that counts the number of vowels in a given string.
console.log("Example 15:");

const string15 = 'Hello, how are you?';
const vowels = 'aeiouAEIOU';
let countVowel = 0;

for (letter of string15){
	if(vowels.includes(letter)){
		countVowel++;
	}
} 
console.log("Number of vowel letters: ",countVowel);

console.log('- - - - - - - - - - - - - - - - - ');
// 16. Write a loop that calculates the sum of all digits in a given number.
console.log("Example 16:");

function sumDigits(num) {
	let total = 0;
	
	while(num){
		total += num % 10;
		num = Math.floor(num/10);
	}
	return total;
}
 
console.log(sumDigits(12345)); // Output: 15
console.log('- - - - - - - - - - - - - - - - - ');

