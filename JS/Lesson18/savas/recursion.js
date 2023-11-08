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
console.log('5', getFactorial(5));
console.log('-26', getFactorial(-26));
console.log('String', getFactorial('sadasfasd'));


console.log('Exercise 1: This exercise was done in the lesson----------------------');
// 1. Write a recursive function to print out all the elements of an array.
const arr = [1, 2, 3];

function printArr(array, index = 0) {
	if (index <= array.length - 1) {
		console.log(array[index]);
		printArr(array, index + 1); 
	}
}

printArr(arr);

console.log('Exercise 2: This exercise was done in the lesson----------------------');
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

console.log('Exercise 3: ----------------------------------------------------------');
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

function flattenObject(obj) {
	for (key in obj) {
	  if (typeof obj[key] === 'object') {
		console.log(`${key}:`);
		flattenObject(obj[key], key + 1);
	  } else {
		console.log(`${key}: ${obj[key]}`);
	  }
	}
  }
  
flattenObject(nestedObj);

console.log('Exercise 4: ----------------------------------------------------------');
// 4. Write a recursive function to count the number of vowels in a string.
const sentenceEx4 = 'Hello, how are you?';
const vowels = ['a', 'e', 'i', 'o', 'u'];

function findVowels(sentence, index = 0, result = "") {
	if (index >= sentence.length) {
	  console.log(result);
	  return;
	}
  
	const char = sentence.charAt(index).toLowerCase();
  	if (vowels.includes(char)) {
	  result += char;
	}
  
	findVowels(sentence, index + 1, result);
  }
  
  findVowels(sentenceEx4);

console.log('Exercise 5: ----------------------------------------------------------');
// 5. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

function removeO(sentence, index = 0, result = "") {
	if (index >= sentence.length) {
		console.log(result);
		return;
	}

	const char = sentence.charAt(index).replace(charToRemove, '');
	if (vowels.includes(charToRemove)) {
		result += char; 
	}
	removeO(sentence, index + 1, result);
}
removeO(sentenceEx5);

console.log('Exercise 6: ----------------------------------------------------------');
// 6. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;
const valueToCheck2 = 6;
function valueToCheckArray (array, givenValue, index = 0, result = "") {
	if (index >= array.length) {
		console.log(result);
		return;
	}
	
	if (array.includes(givenValue)) {
		result = givenValue;
	}
	valueToCheckArray(array, givenValue, index + 1, result);
}
valueToCheckArray(numbers, valueToCheck);
valueToCheckArray(numbers, valueToCheck2);
valueToCheckArray(numbers, 17);

console.log('Exercise 7: ----------------------------------------------------------');
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

function findMaxDepth(obj) {
	for (key in obj) {
	  if (typeof obj[key] === 'object') {
		findMaxDepth(obj[key], key + 1);
		return;
	  } else {
		const lastKey = Object.keys(obj).pop()
		const lastValue = obj[Object.keys(obj).pop()]
		console.log(`${lastKey}: ${lastValue}`);
	  }
	}
  }
  
findMaxDepth(nestedObjEx7);
// I couldn't get only the last key (g: 4) :/

console.log('Exercise 8: ----------------------------------------------------------');
// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';
function reverseSentence(sentence) {
	if (!sentence || sentence.indexOf(' ') === -1) {
	  return sentence;
	}
	return reverseSentence(sentence.slice(sentence.indexOf(' ') + 1)) + ' ' + sentence.slice(0, sentence.indexOf(' '));
  }
  
  const reversedSentence = reverseSentence(sentenceEx8);
  console.log(reversedSentence);

console.log('Exercise 9: ----------------------------------------------------------');
// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';

function findLongestWordLength(sentence) {
	if (!sentence) {
	  return 0;
	}
	
	const words = sentence.split(' ');
	const firstWordLength = words[0].length;
	const remainingSentenceLength = findLongestWordLength(words.slice(1).join(' '));
	
	return Math.max(firstWordLength, remainingSentenceLength);
  }
  
  const longestWordLength = findLongestWordLength(sentenceEx9);
  console.log(longestWordLength);

console.log('Exercise 10: ----------------------------------------------------------');
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

function hasProperty(obj, property) {
	if (obj.hasOwnProperty(property)) {
	  return true;
	}
	
	if (obj !== null && typeof obj === 'object') {
	  for (let key in obj) {
		if (hasProperty(obj[key], property)) {
		  return true;
		}
	  }
	}
	
	return false;
  }
  
  console.log(hasProperty(person, 'name'));
  console.log(hasProperty(person, 'country'));
  console.log(hasProperty(person, 'email'));
