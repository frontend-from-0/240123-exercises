//Example
// function doSomething(parameter) {
//   // base condition for recursive function
//   if (condition) {
//     return value;
//   } else {
//     // If condition is not met, we modify parameter is some way.....
//     // Usually, after modification, we call the same function again (or the function calls itself)
//     return doSomething(modifiedParameter);
//   }
// }

// Factorial of 5 is 5*4*3*2*1
function getFactorial(number) {
	if (number < 0 || typeof number !== 'number') {
		console.log('Please provide a number >= 0');
		return;
	} else {
		if (number === 0) {
			return 1;
		} else {
			return number * getFactorial(number - 1);
		}
	}
}
/* 
getFactorial(5)
  5 * getFactorial(4)
  5 * 4 * getFactorial(3)
  5 * 4 * 3 * getFactorial(2)
  5 * 4 * 3 * 2 * getFactorial(1)
  5 * 4 * 3 * 2 * 1 * getFactorial(0)
  5 * 4 * 3 * 2 * 1 * 1
  
*/
console.log('5', getFactorial(5));
console.log('-26', getFactorial(-26));
console.log('String', getFactorial('sadasfasd'));

// 1. Write a recursive function to print out all the elements of an array.
const arr = [1, 2, 3];
function printArr(array, index = 0) {
	if (index <= array.length - 1) {
		console.log(array[index]);
		printArr(array, index + 1);
	}
}

function printArrLoop(array) {
	for (let i = 0; i <= array.length - 1; i++) {
		console.log(array[i]);
	}
}
printArr(arr);
printArrLoop(arr);
// 2. Write a recursive function to capitalize the first letter of each word in a sentence.
const ex2sentence =
	'a recursive function to capitalize the first letter of each word in a sentence.  ';
function toCapitalizeEachWord(givenString) {
	if (typeof givenString !== 'string') {
		console.log('Invalid Type or input');
		return '';
	} else if (givenString === ''){ // this should be a separate case so we do not log 'Invalid Type or input' message after capitalazing all the words in the sentense.
    return '';
  } else {
		const indexOfFirstSpace = givenString.indexOf(' ');
		const firstLetter = givenString[0].toUpperCase();
		let restOfFirstWord,
			restOfTheSentense = '';

		if (indexOfFirstSpace === -1) {
			restOfFirstWord = givenString.slice(1);
		} else {
			// 'afaasdas sfdsds'
			const firstWord = givenString.slice(0, indexOfFirstSpace); // afaasdas
			const restOfSentence = givenString.slice(indexOfFirstSpace + 1); // sfdsds

			restOfFirstWord = firstWord.slice(1);
			restOfTheSentense = toCapitalizeEachWord(restOfSentence);
		}
		return firstLetter + restOfFirstWord + ' ' + restOfTheSentense;
	}
}

console.log(toCapitalizeEachWord('a'));
console.log(toCapitalizeEachWord('afaasdas sfdsds sfasf asdsa'));
console.log(toCapitalizeEachWord(ex2sentence));

// 3. Write a recursive function to flatten an object with nested objects into a single-level object.
const nestedObj = {
	name: 'John',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'New York',
		country: 'USA',
	},
	hobbies: ['reading', 'coding'],
	social: {
		twitter: '@johndoe',
		linkedIn: 'johndoe',
	},
};
// 4. Write a recursive function to count the number of vowels in a string.
const sentenceEx4 = 'Hello, how are you?';
const vowels = ['a', 'e', 'i', 'o', 'u'];

// 5. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

// 6. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

// 7. Write a recursive function to find the maximum depth of a nested object.
const nestedObjEx7 = {
	a: 1,
	b: {
		c: 2,
		d: {
			e: 3,
			f: {
				g: 4,
			},
		},
	},
	h: 5,
};
// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';
// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};
