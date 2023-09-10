// From Lesson13: generate random number in a range from 0 to 10
// BONUS: generate random number in a range from 0 to 10
// Use Math.floor() and Math.random() to do that.
// Math.random() generate random number between 0 and 1 (not including 1)
// Math.floor() 

const randomNumber = Math.floor(Math.random() * 11);

console.log("Random number:", randomNumber);

// 1. Use the `length` property to find the length of a string and print it to the console.
const stringExercise1 = 'Object-oriented programming is a powerful paradigm.';
const lengthOfString = stringExercise1.length;

console.log("Length of the string:", lengthOfString);


console.log('------------------------');
// 2. Use the `slice` method to extract 'Debugging code' from the string below and print it to the console.
const stringExercise2 = 'Debugging code can be a frustrating but necessary task.';
const extractedPhrase = stringExercise2.slice(0, 14);

console.log("Extracted phrase:", extractedPhrase);

// 3. Use the `toUpperCase` method to convert a string to uppercase and print it to the console.
const stringExercise3 = 'Python is a popular language for data analysis and machine learning.';
const uppercaseString = stringExercise3.toUpperCase();

console.log("Uppercase string:", uppercaseString);

// 4. Use the `toLowerCase` method to convert a string to lowercase and print it to the console.
const stringExercise4 = 'FUNCTIONAL PROGRAMMING EMPHASIZES PURE FUNCTIONS AND IMMUTABLE DATA.';
const lowercaseString = stringExercise4.toLowerCase();

console.log("Lowercase string:", lowercaseString);


// 5.a Use the `indexOf` method to find the index of "l" character in the string stringExercise5 and print it to the console.
const stringExercise5 = 'JavaScript is a versatile language used for web development and beyond.';
const indexOfL = stringExercise5.indexOf('l');

console.log("Index of 'l':", indexOfL);

// 5.b Use the `indexOf` method to find the index of "language" in the string stringExercise5 and print it to the console.
const stringExercise = 'JavaScript is a versatile language used for web development and beyond.';
const indexOfLanguage = stringExercise5.indexOf('language');

console.log("Index of 'language':", indexOfLanguage);

// 6. Use the `lastIndexOf` method to find the last index of of "l" character in the string stringExercise5 and print it to the console.
const stringExercise6 = 'JavaScript is a versatile language used for web development and beyond.';
const lastIndexOfL = stringExercise5.lastIndexOf('l');

console.log("Last index of 'l':", lastIndexOfL);

// 7. Use the `charAt` method to retrieve first, 10th, 3rd from the end and the last characters from the string stringExercise7 and print them to the console.
const stringExercise7 = 'Retrieve characters from a string using charAt method.';
const firstCharacter = stringExercise7.charAt(0);
const tenthCharacter = stringExercise7.charAt(9);
const thirdFromEndCharacter = stringExercise7.charAt(stringExercise7.length - 3);
const lastCharacter = stringExercise7.charAt(stringExercise7.length - 1);

console.log("First character:", firstCharacter);
console.log("Tenth character:", tenthCharacter);
console.log("Third from the end character:", thirdFromEndCharacter);
console.log("Last character:", lastCharacter);

// 8. Use the `split` method to split a string into an array of substrings and print it to the console.
const stringToSplit = 'Splitting a string into an array of substrings.';
const arrayOfSubstrings = stringToSplit.split(' ');

console.log("Array of substrings:", arrayOfSubstrings);

// 9. Use the `join` method to join an array of strings into a single string and print it to the console.
const arrayOfStrings = ['Join', 'an', 'array', 'of', 'strings', 'into', 'a', 'single', 'string.'];
const joinedString = arrayOfStrings.join(' ');

console.log("Joined string:", joinedString);

// 10. Use the `replace` method to replace "can help" with "help" in the string stringExercise10 and print the result to the console.
const stringExercise10 = "Software design patterns can help simplify complex can help systems.";
const replacedString = stringExercise10.replace("can help", "help");

console.log("Replaced string:", replacedString);

// 11. Use the `startsWith` method to check if strings below starts with a price, and print the result to the console.
const string1Exercise11 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise11 = "Bundle deal: Save $50 when you buy two products together";

const startsWithPrice1 = string1Exercise11.startsWith("$");
const startsWithPrice2 = string2Exercise11.startsWith("$");

console.log("String 1 starts with price:", startsWithPrice1);
console.log("String 2 starts with price:", startsWithPrice2);

// 12. Use the `endsWith` method to check if a string ends with a "!" (exclamation mark), and print the result to the console.
const string1Exercise12 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise12 = "Bundle deal: Save $50 when you buy two products together!";

const endsWithExclamation1 = string1Exercise12.endsWith("!");
const endsWithExclamation2 = string2Exercise12.endsWith("!");

console.log("String 1 ends with exclamation mark:", endsWithExclamation1);
console.log("String 2 ends with exclamation mark:", endsWithExclamation2);

// 13. Use the `includes` method to check if a string includes a "%" character and print the result to the console.
const string1Exercise13 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise13 = "Bundle deal: Save $50 when you buy two products together!";


console.log('------------------------');
// 14. Use the `substring` method to extract the word "Databases" from string stringExercise14 based on two indices and print it to the console.
// Question: What is the difference between `substring()` and `slice()`?
const stringExercise14 = 'Databases are an essential component of many applications.';
const extractedWord = stringExercise14.substring(0, 9);

console.log("Extracted word:", extractedWord);

// 15. Remove extra spaces from the string stringExercise15 and print the result to the console.
const stringExercise15 = "Hello world";
const trimmedString = stringExercise15.trim().replace(/\s+/g, ' ');
console.log("Exercise15: ", stringExercise15)

console.log("Trimmed string:", trimmedString);

// 16. Extract the price and currency from a string below using "slice" method and print it to console.
const planPriceString = "Premium plan - 9.99 USD/month.";
const extractedPriceCurrency = planPriceString.slice(planPriceString.indexOf(" ") + 1, planPriceString.indexOf("/"));

console.log("Extracted price and currency:", extractedPriceCurrency);
