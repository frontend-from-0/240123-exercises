//Example
// function doSomething(parameter) {
//   // base condition for recursive function
//   if (condition) {
//     return value;
//   } else {
//     // If condition is not met, we modify parameter is some way
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
console.log('Example----------------------------');

console.log('5', getFactorial(5));
console.log('-26', getFactorial(-26));
console.log('String', getFactorial('sadasfasd'));

console.log('Exercise1----------------------------');
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

console.log('----------------------------');
// 2. Write a recursive function to capitalize the first letter of each word in a sentence.
// const ex2sentence =
// 	'a recursive function to capitalize the first letter of each word in a sentence.  ';
// function toCapitalizeEachWord(givenString) {
// 	if (typeof givenString !== 'string') {
// 		console.log('Invalid Type or input');
// 		return '';
// 	} else if (givenString === '') { // this should be a separate case so we do not log 'Invalid Type or input' message after capitalazing all the words in the sentense.
// 		return '';
// 	} else {
// 		const indexOfFirstSpace = givenString.indexOf(' ');
// 		const firstLetter = givenString[0].toUpperCase();
// 		let restOfFirstWord,
// 			restOfTheSentense = '';

// 		if (indexOfFirstSpace === -1) {
// 			restOfFirstWord = givenString.slice(1);
// 		} else {
// 			// 'afaasdas sfdsds'
// 			const firstWord = givenString.slice(0, indexOfFirstSpace); // afaasdas
// 			const restOfSentence = givenString.slice(indexOfFirstSpace + 1); // sfdsds

// 			restOfFirstWord = firstWord.slice(1);
// 			restOfTheSentense = toCapitalizeEachWord(restOfSentence);
// 		}
// 		return firstLetter + restOfFirstWord + ' ' + restOfTheSentense;
// 	}
// }

// console.log(toCapitalizeEachWord('a'));
// console.log(toCapitalizeEachWord('afaasdas sfdsds sfasf asdsa'));
// console.log(toCapitalizeEachWord(ex2sentence));

// I also did it with a different way. ***

const ex2sentence = 'a recursive function to capitalize the first letter of each word in a sentence.';

function capitalizeFirstLetter(sentence) {
	if (sentence === '') {
		return '';
	} else if (typeof sentence !== 'string') {
		console.log("Invalid input");
	}

	const TotalWords = sentence.split(' ');
	const firstWord = TotalWords[0];
	const remainingWords = TotalWords.slice(1);

	const capitalizedFirstLetter = firstWord[0].toUpperCase() + firstWord.slice(1);

	return capitalizedFirstLetter + ' ' + capitalizeFirstLetter(remainingWords.join(' '));
}


const capitalizedSentence = capitalizeFirstLetter(ex2sentence);

console.log("Exercise 2: ", capitalizedSentence);


console.log('----------------------------');
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

function flattenObject(obj, prefix = "") {
	let resultObject = {};
	for (const key in obj) {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			const nestedKeys = flattenObject(obj[key], prefix + key + '.');
			resultObject = { ...resultObject, ...nestedKeys };
		} else {
			resultObject[prefix + key] = obj[key];
		}
	}
	return resultObject;
}
console.log("Exercise 3:", flattenObject(nestedObj));

console.log('----------------------------');
// 4. Write a recursive function to count the number of vowels in a string.
const sentenceEx4 = 'Hello, how are you?';
const vowels = ['a', 'e', 'i', 'o', 'u'];

function toCountVowelsOfString(sentence, vowels) {
	if (sentence.length === 0) {
		return 0;
	}

	const firstLetter = sentence[0].toLowerCase();
	if (vowels.includes(firstLetter)) {
		return 1 + toCountVowelsOfString(sentence.slice(1), vowels);
	} else {
		return toCountVowelsOfString(sentence.slice(1), vowels);
	}

}
const countVowels = toCountVowelsOfString(sentenceEx4, vowels);
console.log("Exercise 4: ", countVowels);

console.log('----------------------------');
// 5. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

function toRemoveSpecifiedCharacter(sentence, specifiedCharacter) {
	if (sentence.length === 0) {
		return "";
	}
	let firstCharacter = sentence[0].toLowerCase();
	let remainingCharacters = sentence.slice(1);
	if (firstCharacter === specifiedCharacter) {
		return toRemoveSpecifiedCharacter(remainingCharacters, specifiedCharacter);
	} else {
		return firstCharacter + toRemoveSpecifiedCharacter(remainingCharacters, specifiedCharacter);
	}

}

const removeCharacter = toRemoveSpecifiedCharacter(sentenceEx5, charToRemove);
console.log("Exercise 5: ", removeCharacter);

console.log('----------------------------');
// 6. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

function checkToSpesificValue(arr, value, index = 0) {
	if (arr === null && arr === []) {
		return null;
	}
	if (arr.length <= index) {
		return false;
	}

	if (arr[index] === value) {
		return true;
	} else {
		return checkToSpesificValue(arr, value, index + 1);
	}
}
console.log("Exercise 6: ", checkToSpesificValue(numbers, valueToCheck));

console.log('----------------------------');

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

function findMaxDepth(obj, depth = 1) {
	if (typeof obj !== 'object') {
		return null;
	}

	for (const prop in obj) {
		if (typeof obj[prop] === 'object') {
			return findMaxDepth(obj[prop], depth + 1);
		}
	}
	return depth;
}
const findDepth = findMaxDepth(nestedObjEx7);
console.log("Exercise 7: ", findDepth);

console.log('----------------------------');
// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';

function toReverseWordsOfString(sentence) {
	const words = sentence.split(' ');
	if (sentence.length === 0) {
		return '';
	} else {
		const firstWord = words.shift();
		const remainWords = toReverseWordsOfString(words.join(' '));
		if (remainWords === '') {
			return firstWord;
		} else {
			return remainWords + ' ' + firstWord;
		}

	}
}
console.log("Exercise 8: ", toReverseWordsOfString(sentenceEx8));

console.log('----------------------------');
// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';

function toFindLongestWord(sentence) {
	const wordsOfArray = sentence.split(' ');

	function toFindMaxLength(wordsOfArray) {
		if (wordsOfArray.length === 0) {
			return 0;
		}
		const firstWordInArray = wordsOfArray.shift();
		const restOfArray = toFindMaxLength(wordsOfArray);
		return Math.max(firstWordInArray.length, restOfArray);
	}
	return toFindMaxLength(wordsOfArray);
}

console.log("Exercise 9: ", toFindLongestWord(sentenceEx9));

console.log('----------------------------');
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

function hasProperty(obj, key) {
	if (obj.hasOwnProperty(key)) {
		return true;
	}

	for (const prop in obj) {
		if (typeof obj[prop] === 'object' && obj[prop] !== null) {
			if (hasProperty(obj[prop], key)) {
				return true;
			}
		}
	}
}

console.log("Exercise 10: ", hasProperty(person, 'city'));
