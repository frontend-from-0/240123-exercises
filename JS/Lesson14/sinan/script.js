// From Lesson13: generate random number in a range from 0 to 10
// BONUS: generate random number in a range from 0 to 10
// Use Math.floor() and Math.random() to do that.
// Math.random() generate random number between 0 and 1 (not including 1)
// Math.floor() 

const randomNumberFrom0To10 = Math.floor(Math.random()*10+1);

console.log(randomNumberFrom0To10);
// 1. Use the `length` property to find the length of a string and print it to the console.
const stringExercise1 = 'Object-oriented programming is a powerful paradigm.';
console.log("Exercise1: ", stringExercise1.length);

console.log('Object-oriented programming is'.length);

console.log('------------------------');
// 2. Use the `slice` method to extract 'Debugging code' from the string below and print it to the console.
const stringExercise2 = 'Debugging code can be a frustrating but necessary task.';
console.log("exercise2: ", stringExercise2.slice(0,14));

console.log('------------------------');
// 3. Use the `toUpperCase` method to convert a string to uppercase and print it to the console.
const stringExercise3 = 'Python is a popular language for data analysis and machine learning.';
console.log("exercise3: ",stringExercise3.toUpperCase());
console.log('------------------------');
// 4. Use the `toLowerCase` method to convert a string to lowercase and print it to the console.
const stringExercise4 = 'FUNCTIONAL PROGRAMMING EMPHASIZES PURE FUNCTIONS AND IMMUTABLE DATA.';
console.log("Exercise4: ",stringExercise4.toLowerCase());

console.log('------------------------');
// 5.a Use the `indexOf` method to find the index of "l" character in the string stringExercise5 and print it to the console.
const stringExercise5 = 'JavaScript is a versatile language used for web development and beyond.';
console.log("Exercise5: ",stringExercise5.indexOf('l'));

console.log('------------------------');
// 5.b Use the `indexOf` method to find the index of "language" in the string stringExercise5 and print it to the console.
console.log("Exercise5.b: ", stringExercise5.indexOf('language'));
console.log('------------------------');
// 6. Use the `lastIndexOf` method to find the last index of of "l" character in the string stringExercise5 and print it to the console.
console.log("Exercise6: ", stringExercise5.lastIndexOf('l'));
console.log('------------------------');
// 7. Use the `charAt` method to retrieve first, 10th, 3rd from the end and the last characters from the string stringExercise7 and print them to the console.
const stringExercise7 = 'Git is a popular version control system used by developers.';
console.log("Exercise7: ", stringExercise7.charAt(0));
console.log("Exercise7: ", stringExercise7.charAt(9));
console.log("Exercise7: ", stringExercise7.charAt(stringExercise7.length-3));

console.log('------------------------');
// 8. Use the `split` method to split a string into an array of substrings and print it to the console.
const stringExercise8 = 'Algorithms are a fundamental part of computer science.';
console.log("Exercise8: ", stringExercise8.split(" "));
console.log('------------------------');
// 9. Use the `join` method to join an array of strings into a single string and print it to the console.
const arrayExercise9 = ["An", "array",  "of", "strings"];
console.log("Exercise9: ", arrayExercise9.join("-"));
console.log('------------------------');
// 10. Use the `replace` method to replace "can help" with "help" in the string stringExercise10 and print the result to the console.
const stringExercise10 = "Software design patterns can help simplify complex can help systems.";
console.log("Exercise10: ", stringExercise10.replace("can help", "help"));

// What's the best approach to find and replace all occurences?

console.log('------------------------');
// 11. Use the `startsWith` method to check if strings below starts with a price, and print the result to the console.
const string1Exercise11 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise11 = "Bundle deal: Save $50 when you buy two products together";
console.log("Exercise11: ", string1Exercise11.startsWith("$"));
console.log("Exercise11: ", string2Exercise11.startsWith("$"));

console.log('------------------------');
// 12. Use the `endsWith` method to check if a string ends with a "!" (exclamation mark), and print the result to the console.
const string1Exercise12 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise12 = "Bundle deal: Save $50 when you buy two products together!";


console.log('------------------------');
// 13. Use the `includes` method to check if a string includes a "%" character and print the result to the console.
const string1Exercise13 = "$9.99 - Sale! 50% off all items in store";
const string2Exercise13 = "Bundle deal: Save $50 when you buy two products together!";


console.log('------------------------');
// 14. Use the `substring` method to extract the word "Databases" from string stringExercise14 based on two indices and print it to the console.
// Question: What is the difference between `substring()` and `slice()`?
const stringExercise14 = 'Databases are an essential component of many applications.';

console.log('------------------------');
// 15. Remove extra spaces from the string stringExercise15 and print the result to the console.
const stringExercise15 = "    Hello world    ";

console.log('------------------------');
// 16. Extract the price and currency from a string below using "slice" method and print it to console.
const planPriceString = "Premium plan - 9.99 USD/month."; // Should return "9.99 USD"
