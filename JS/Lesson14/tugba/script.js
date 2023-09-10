  // From Lesson13: generate random number in a range from 0 to 10
// BONUS: generate random number in a range from 0 to 10
// Use Math.floor() and Math.random() to do that.
// Math.random() generate random number between 0 and 1 (not including 1)
// Math.floor() 

const randomNumber = Math.floor(Math.random() * 11);

console.log("Random number:", randomNumber);

// 1. Use the `length` property to find the length of a string and print it to the console.
const stringExercise1 = 'Object-oriented programming is a powerful paradigm.';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const lengthOfString = stringExercise1.length;

console.log("Length of the string:", lengthOfString);
=======
=======
>>>>>>> Stashed changes
console.log("Exercise1: ", stringExercise1.length);
console.log('------------------------');

console.log('Object-oriented programming is'.length);
console.log('------------------------');
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes


console.log('------------------------');
// 2. Use the `slice` method to extract 'Debugging code' from the string below and print it to the console.
const stringExercise2 = 'Debugging code can be a frustrating but necessary task.';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const extractedPhrase = stringExercise2.slice(0, 14);

console.log("Extracted phrase:", extractedPhrase);
=======
const sliceMethod = stringExercise2.slice(0, 14);
console.log("Exercise2: ", sliceMethod);

>>>>>>> Stashed changes
=======
const sliceMethod = stringExercise2.slice(0, 14);
console.log("Exercise2: ", sliceMethod);

>>>>>>> Stashed changes

// 3. Use the `toUpperCase` method to convert a string to uppercase and print it to the console.
const stringExercise3 = 'Python is a popular language for data analysis and machine learning.';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
const stringToUpperCase = stringExercise3.toUpperCase();
console.log("Exercise3: ", stringToUpperCase);
console.log('------------------------');
// 4. Use the `toLowerCase` method to convert a string to lowercase and print it to the console.
const stringExercise4 = 'FUNCTIONAL PROGRAMMING EMPHASIZES PURE FUNCTIONS AND IMMUTABLE DATA.';
const stringToLowerCase = stringExercise4.toLocaleLowerCase();
console.log("Exercise4: ", stringToLowerCase);
console.log('------------------------');
// 5.a Use the `indexOf` method to find the index of "l" character in the string stringExercise5 and print it to the console.
const stringExercise5 = 'JavaScript is a versatile language used for web development and beyond.';
const letterİndexOf = stringExercise5.indexOf("l");
console.log("Exercise5.a: ", letterİndexOf);

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

// 5.b Use the `indexOf` method to find the index of "language" in the string stringExercise5 and print it to the console.
const stringExercise = 'JavaScript is a versatile language used for web development and beyond.';
const indexOfLanguage = stringExercise5.indexOf('language');

console.log("Index of 'language':", indexOfLanguage);

// 6. Use the `lastIndexOf` method to find the last index of of "l" character in the string stringExercise5 and print it to the console.
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const stringExercise6 = 'JavaScript is a versatile language used for web development and beyond.';
const lastIndexOfL = stringExercise5.lastIndexOf('l');

console.log("Last index of 'l':", lastIndexOfL);
=======
const letterLastİndexOf = stringExercise5.lastIndexOf("l");
console.log("Exercise6: ", letterLastİndexOf);
>>>>>>> Stashed changes
=======
const letterLastİndexOf = stringExercise5.lastIndexOf("l");
console.log("Exercise6: ", letterLastİndexOf);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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

=======
=======
>>>>>>> Stashed changes
const stringExercise8 = 'Algorithms are a fundamental part of computer science.';
const stringSplit = stringExercise8.split(" ");
console.log("Exercise8: ", stringSplit);
console.log('------------------------');
// 9. Use the `join` method to join an array of strings into a single string and print it to the console.
const arrayExercise9 = ["An", "array",  "of", "strings"];
console.log("Exercise9: ", arrayJoin);
console.log('------------------------');
// 10. Use the `replace` method to replace "can help" with "help" in the string stringExercise10 and print the result to the console.
const removeWord = "can help";
const addWord = "help";
const replaceWords = stringExercise10.split(removeWord).join(addWord);
console.log(replaceWords);
console.log('------------------------');
>>>>>>> Stashed changes
// 11. Use the `startsWith` method to check if strings below starts with a price, and print the result to the console.
const string1Exercise11 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise11 = "Bundle deal: Save $50 when you buy two products together";

<<<<<<< Updated upstream
<<<<<<< Updated upstream
const startsWithPrice1 = string1Exercise11.startsWith("$");
const startsWithPrice2 = string2Exercise11.startsWith("$");

console.log("String 1 starts with price:", startsWithPrice1);
console.log("String 2 starts with price:", startsWithPrice2);

// 12. Use the `endsWith` method to check if a string ends with a "!" (exclamation mark), and print the result to the console.
const string1Exercise12 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise12 = "Bundle deal: Save $50 when you buy two products together!";

const endsWithExclamation1 = string1Exercise12.endsWith("!");
const endsWithExclamation2 = string2Exercise12.endsWith("!");
=======
const string1Price = string1Exercise11.startsWith("$");
console.log("Exercise11.1: ", string1Price);
const string2Price = string2Exercise11.startsWith("$");
console.log("Exercise11.2: ", string2Price);
console.log('------------------------');
// 12. Use the `endsWith` method to check if a string ends with a "!" (exclamation mark), and print the result to the console.
const string1Exercise12 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise12 = "Bundle deal: Save $50 when you buy two products together!";
const string1Signal = string1Exercise12.endsWith("!");
const string2Signal = string2Exercise12.endsWith("!");
console.log("Exercise12.2: ", string2Signal);
>>>>>>> Stashed changes

console.log("String 1 ends with exclamation mark:", endsWithExclamation1);
console.log("String 2 ends with exclamation mark:", endsWithExclamation2);
=======
const string1Price = string1Exercise11.startsWith("$");
console.log("Exercise11.1: ", string1Price);
const string2Price = string2Exercise11.startsWith("$");
console.log("Exercise11.2: ", string2Price);
console.log('------------------------');
// 12. Use the `endsWith` method to check if a string ends with a "!" (exclamation mark), and print the result to the console.
const string1Exercise12 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise12 = "Bundle deal: Save $50 when you buy two products together!";
const string1Signal = string1Exercise12.endsWith("!");
const string2Signal = string2Exercise12.endsWith("!");
console.log("Exercise12.2: ", string2Signal);
>>>>>>> Stashed changes

// 13. Use the `includes` method to check if a string includes a "%" character and print the result to the console.
const string1Exercise13 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise13 = "Bundle deal: Save $50 when you buy two products together!";

const string1İncludes = string1Exercise13.includes("%");
const string2İncludes = string2Exercise13.includes("%");

console.log("Exercise13.1: ", string1İncludes);
console.log("Exercise13.2: ", string2İncludes);



console.log('------------------------');
// 14. Use the `substring` method to extract the word "Databases" from string stringExercise14 based on two indices and print it to the console.
// Question: What is the difference between `substring()` and `slice()`?
const stringExercise14 = 'Databases are an essential component of many applications.';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const extractedWord = stringExercise14.substring(0, 9);

console.log("Extracted word:", extractedWord);
=======
const stringSub = stringExercise14.substr
>>>>>>> Stashed changes
=======
const stringSub = stringExercise14.substr
>>>>>>> Stashed changes

// 15. Remove extra spaces from the string stringExercise15 and print the result to the console.
const stringExercise15 = "Hello world";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const trimmedString = stringExercise15.trim().replace(/\s+/g, ' ');
console.log("Exercise15: ", stringExercise15)

console.log("Trimmed string:", trimmedString);
=======
const stringSpaceDelete = stringExercise15.trim();
console.log("Exercise15: ", stringSpaceDelete);

>>>>>>> Stashed changes
=======
const stringSpaceDelete = stringExercise15.trim();
console.log("Exercise15: ", stringSpaceDelete);

>>>>>>> Stashed changes

// 16. Extract the price and currency from a string below using "slice" method and print it to console.
<<<<<<< Updated upstream
const planPriceString = "Premium plan - 9.99 USD/month.";
const extractedPriceCurrency = planPriceString.slice(planPriceString.indexOf(" ") + 1, planPriceString.indexOf("/"));

console.log("Extracted price and currency:", extractedPriceCurrency);
=======
const planPriceString = "Premium plan - 9.99 USD/month."; // Should return "9.99 USD"
const removeWords = planPriceString.slice(15, 23);
<<<<<<< Updated upstream
console.log("Exercise16: ", removeWords);
>>>>>>> Stashed changes
=======
console.log("Exercise16: ", removeWords);
>>>>>>> Stashed changes
