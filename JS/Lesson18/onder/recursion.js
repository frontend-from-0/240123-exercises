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
  if (number < 0 || typeof number !== "number") {
    console.log("Please provide a number >= 0");
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
console.log("5", getFactorial(5));
console.log("-26", getFactorial(-26));
console.log("String", getFactorial("sadasfasd"));

// 1. Write a recursive function to print out all the elements of an array.
console.log("Example1: ");

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
console.log("================================");

// 2. Write a recursive function to capitalize the first letter of each word in a sentence.
console.log("Example2: ");

const ex2sentence =
  "a recursive function to capitalize the first letter of each word in a sentence.  ";
function toCapitalizeEachWord(givenString) {
  if (typeof givenString !== "string") {
    console.log("Invalid Type or input");
    return "";
  } else if (givenString === "") {
    // this should be a separate case so we do not log 'Invalid Type or input' message after capitalazing all the words in the sentense.
    return "";
  } else {
    const indexOfFirstSpace = givenString.indexOf(" ");
    const firstLetter = givenString[0].toUpperCase();
    let restOfFirstWord,
      restOfTheSentense = "";

    if (indexOfFirstSpace === -1) {
      restOfFirstWord = givenString.slice(1);
    } else {
      // 'afaasdas sfdsds'
      const firstWord = givenString.slice(0, indexOfFirstSpace); // afaasdas
      const restOfSentence = givenString.slice(indexOfFirstSpace + 1); // sfdsds

      restOfFirstWord = firstWord.slice(1);
      restOfTheSentense = toCapitalizeEachWord(restOfSentence);
    }
    return firstLetter + restOfFirstWord + " " + restOfTheSentense;
  }
}

console.log(toCapitalizeEachWord("a"));
console.log(toCapitalizeEachWord("afaasdas sfdsds sfasf asdsa"));
console.log(toCapitalizeEachWord(ex2sentence));
console.log("================================");

// 3. Write a recursive function to flatten an object with nested objects into a single-level object.
console.log("Example3: ");

const nestedObj = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "coding"],
  social: {
    twitter: "@johndoe",
    linkedIn: "johndoe",
  },
};

function flattenObject(obj) {
  let flattened = {};

  function flatten(obj, prefix = " ") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let propName = "";
        if (prefix) {
          propName = prefix + "." + key;
        } else {
          propName = prefix;
        }
        if (typeof obj[key] === "object" && obj[key] !== null) {
          flatten(obj[key], propName);
        } else {
          flattened[propName] = obj[key];
        }
      }
    }
  }
  flatten(obj);
  return flattened;
}

console.log(flattenObject(nestedObj));

console.log("================================");
// 4. Write a recursive function to count the number of vowels in a string.
console.log("Example4: ");

const sentenceEx4 = "Hello, how are you?";
const vowels = ["a", "e", "i", "o", "u"];

function countVowelsRecursive(str, vowels) {
  if (str.length === 0) {
    return 0;
  }

  const firstChar = str[0].toLowerCase();
  const isVowel = vowels.includes(firstChar);

  let count = 0;
  if (isVowel) {
    count = 1;
  } else {
    count = 0;
  }
  count += countVowelsRecursive(str.slice(1), vowels);

  return count;
}

const vowelCount = countVowelsRecursive(sentenceEx4, vowels);
console.log("Number of vowels:", vowelCount);

console.log("================================");
// 5. Write a recursive function to remove all occurrences of a specified character from a string.
console.log("Example5: ");

const sentenceEx5 = "Hello, how are you?";
const charToRemove = "o";

function removeSpecified(sentence, charToRemove) {
  if (sentence.length === 0) {
    return "";
  }

  const firstChar = sentence[0];

  if (firstChar === charToRemove) {
    return removeSpecified(sentence.slice(1), charToRemove);
  } else {
    return firstChar + removeSpecified(sentence.slice(1), charToRemove);
  }
}

const resultEx5 = removeSpecified(sentenceEx5, charToRemove);
console.log(resultEx5);

console.log("================================");

// 6. Write a recursive function to check if an array includes a specific value.
console.log("Example6: ");
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

function removeSpecified(arr, valueToRemove) {
  if (arr.length === 0) {
    return [];
  }

  const firstElement = arr[0];

  if (firstElement === valueToRemove) {
    return removeSpecified(arr.slice(1), valueToRemove);
  } else {
    return [firstElement].concat(removeSpecified(arr.slice(1), valueToRemove));
  }
}

const result2 = removeSpecified(numbers, valueToCheck);
console.log(result2);
// used same function in example 4
console.log("================================");

// 7. Write a recursive function to find the maximum depth of a nested object.
console.log("Example7: ");

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
  let maxDepth = 0;

  if (typeof obj === "object" && obj !== null && obj !== undefined) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const depth = 1 + findMaxDepth(obj[key]);
        maxDepth = Math.max(maxDepth, depth);
      }
    }
  }
  return maxDepth;
}

console.log("Max depth of object is ", findMaxDepth(nestedObjEx7));

console.log("================================");
// 8. Write a recursive function to reverse the order of words in a sentence.
console.log("Example8: ");
const sentenceEx8 = "Hello, how are you?";

function reverseSentence(sentence) {
  const wordsArray = sentence.split(" ");
  console.log(wordsArray);
  if (wordsArray.length <= 1) {
    return sentence;
  }

  let lastWord = wordsArray.pop();
  reversedRest = reverseSentence(wordsArray.join(" "));

  return lastWord + " " + reversedRest;
}

console.log(reverseSentence(sentenceEx8));
console.log("================================");
// 9. Write a recursive function to find the length of the longest word in a sentence.
console.log("Example9: ");
const sentenceEx9 = "The quick brown fox jumps over the lazy dog";

function findLongestWord(sentence) {
  if (sentence.length === 0) {
    return 0;
  }

  const words = sentence.split(" ");

  const firstWord = words[0];

  const restLenght = findLongestWord(words.slice(1).join(" "));

  if (firstWord.length > restLenght) {
    return firstWord.length;
  } else {
    return restLenght;
  }
}

console.log("longest length: ", findLongestWord(sentenceEx9));
console.log("================================");

// 10. Write a recursive function to check if an object contains a specified property.
console.log("Example10: ");
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

function hasProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return true;
  }

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      if (hasProperty(obj[key], prop)) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasProperty(person, "age"));
console.log("================================");
