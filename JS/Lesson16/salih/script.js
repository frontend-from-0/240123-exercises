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
let i = 10;
while(i>=1) {
	console.log(i);
	i--;
}
// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }

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
let number = 1;
do {
	console.log(number);
	number++;
} while (number<=10);

console.log('- - - - - - - - - - - - - - - - - ');
// 10. Write a for...in loop that prints out the keys and values of an object.
const person = {name: "John", surname: "Doe", age: 30, city: "New York"};
// Array olsaydi boyle olurdu: ["John", "Doe", 30 , "New York"];
// Array element position numbers: 0, 1, 2, 3
// Object keys: name, surname, age, city 

for (const key in person){
	console.log(`Ecersite 10: ${key}: ${person[key]}`);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 11. Write a for...in loop that sums the values of an object.
const obj = {a: 10, b: 20, c: 30, d: 23};
let sum = 0;
for(const key in obj) {
	sum+= obj[key];
}
console.log(sum);
console.log('- - - - - - - - - - - - - - - - - ');
// 12. Write a loop that finds the average of an array of numbers.
const numbers12 = [10, 20, 30, 40, 500];
function sumArray(numbers){
	let sum=0;
	for (i=0; i< numbers.length; i++){
		sum += numbers[i];
	};
	return sum/numbers.length;
}
console.log('Exercise 12.1: ', sumArray(numbers12));

console.log('- - - - - - - - - - - - - - - - - ');
// 13. Write a loop that prints out the sum of all even numbers between 1 and 50.
function sumEvenNumbers(firstNum, secondNum){
	let small, big, sum=0;
	if (firstNum > secondNum){ 
		small = secondNum;
		big = firstNum;
	} else {
		small = firstNum;
		big = secondNum;
	};
	console.log('11-The Small Number is ', small, '. The Big Number is ', big); //I used them to follow the code.
	for (i=small; i < big+1; i++){
		console.log('22-The Small Number is ', small, '. The Big Number is ', big, 'The i Number is ', i); //I used them to follow the code.
		if (i % 2 == 0){
			sum += small;
			console.log('33-The sum is ', sum); //I used them to follow the code.
		};
	};
	return sum;
}

console.log('Exercise 13.1: ', sumEvenNumbers(1, 50));
console.log('- - - - - - - - - - - - - - - - - ');
// 14. Write a loop that finds the second largest number in an array of numbers.
const numbers14 = [10, 5, 20, 8, 15, 42];
function orderingSmalToBig(numbers){
	let bigNumber = 0;
	for (i = 0; i<numbers.length; i++){
		for(j = i; j < numbers.length; j++){
			console.log('The i is: ', i, ' || The j is: ', j);
			console.log('The Numbers-i is: ', numbers[i], ' || The numbers-j is: ', numbers[j]);
			if(numbers[j]>numbers[i]){
				bigNumber = numbers[j];
				numbers[j]=numbers[i];
				numbers[i]=bigNumber;
				bigNumber=0;
				console.log('Inside If new Numbers is: ', numbers);
			}
		}
	}
	return numbers;
}

console.log('Exercise 14.1: ', orderingSmalToBig(numbers14)[1]);
console.log('_________________________________________________________________________ ');
// 15. Write a loop that counts the number of vowels in a given string.
const string15 = 'Hello, how are you? Are you Fine?';
const vowels = 'aeiouAEIOU';
function vowelsNumber(givenString, vowelList){
	let sum =0;
	console.log(givenString.length);
	for (i =0; i< givenString.length; i++){
		console.log('Current givenString Letter is: ', givenString[i]);
		if(vowelList.includes(givenString[i])){
			console.log('Inside If givenString Letter is: ', givenString[i], ' || i is: ', i);
			sum += 1;
		}
	}
	return sum;
}

console.log('Exercise 15.1: ', vowelsNumber(string15, vowels));
console.log('- - - - - - - - - - - - - - - - - ');
// 16. Write a loop that calculates the sum of all digits in a given number.
function sumDigits(num) {
	let sum=0;
	const numString = num.toString();
	console.log(numString.length);
	for (i=0; i<numString.length;i++){
		console.log('Current Sum is: ', sum, ' || Current value is: ', numString[i]);
		sum += Number(numString[i]);
	}
	return sum;
}
console.log('Exercise 16: ', sumDigits(12345)); // Output: 15
console.log('- - - - - - - - - - - - - - - - - ');

