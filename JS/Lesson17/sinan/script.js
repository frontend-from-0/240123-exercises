// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4];
function sumIntegers (numbers) {
 let sum = 0;
 for (let i =0; i<numbers.length; i++) {
  sum+= numbers[i];
 }
 return sum;
}
console.log("Exercise 1: ",sumIntegers (integersEx1) );
console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5
function getAverage (numbers) {
  let sumArray = sumIntegers (numbers);
  return sumArray / numbers.length;
}
console.log("Exercise 2:", getAverage(integersEx1));
console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"

let stringE3 = ["Hello", "World", "!"];

function concatString(strings){
  let newString = "";
  for(let i =0; i<strings.length; i++){
    newString = newString + " " + strings[i] ;
  }
  return newString;
};

console.log("ex3:", concatString(stringE3));

console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx = [1, 2, 3, 4, 7, 10];

function getOddNumbers(numbers){
  let newArray = [];
  for(let i = 0 ; i< numbers.length ; i++){
    if (!isEven(numbers[i])) newArray.push(numbers[i]);
  } 
  return newArray;
}

console.log("Ex4", getOddNumbers(arrayEx));
console.log("Ex4", getOddNumbers([11, 2, 3, 23, 7, 10]));
console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]

function isEven(number){
  return number % 2 === 0;
}

function selectIfEven(numbers){
  let evenArray = [];
  for (i = 0; i < numbers.length; i++){
    if (isEven(numbers[i])) evenArray.push(numbers[i]);

  }
  return evenArray;
};

console.log('Exercise 5.1: ', selectIfEven([1, 2, 3, 4, 7, 10]));
console.log('Exercise 5.2: ', selectIfEven([1, 32, 38, 4, 74, 10]));


console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]
function removeNumbers(arrayOfNumber, numberToRemove) {
  let newArray2 = [];

  for (let i = 0; i<arrayOfNumber.length; i++) {
    if(arrayOfNumber[i] !== numberToRemove) {
      newArray2.push(arrayOfNumber[i]);
    }
  }
  return newArray2;
};
console.log("exercise 6:", removeNumbers([1, 2, 3, 4, 2], 2));
console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
function getObjectKeys(objectToCheck) {
  return Object.keys(objectToCheck);
};

console.log("exercise 7:", getObjectKeys({name: "John", age: 30, city: "New York"}));
console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]
function getObjectValues(objectToCheck) {
  return Object.values(objectToCheck);
};
console.log("exercise 8:", getObjectValues({name: "John", age: 30, city: "New York"}));
console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false

function ifItsTrue(object1, randomKey) {
  if (typeof object1 !== "object") {
    console.log("Provided value is not an object");
  } else {
    if (randomKey in object1) return true;
  }
}

function isKeyInTheObject(testObject, key) {
  if (testObject.hasOwnProperty(key)) return true;
}

console.log("Ex 9.1:", ifItsTrue({name: "John", age: 30, city: "New York"}, "John"));
console.log("Ex 9.2:", isKeyInTheObject({name: "John", age: 30, city: "New York"}, "age"));

console.log('----------------------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}

console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}

console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}

// 13. Array Destructuring
// Given the following array, use array destructuring to assign the values of x, y, and z to their respective variables: 
const coordinates = [10, 20, 30];

// 14. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
  name: 'John Doe',
  age: 25,
};

// 15. Array Destructuring with Default Values
// Given the following array, use array destructuring with default values to assign the values of a, b, and c, with default values of 1, 2, and 3 respectively:
const numbers = [4];


// 16. Object Destructuring with Renaming
// Given the following object, use object destructuring with renaming to assign the value of name to a variable named fullName:
const personE16 = {
  name: 'John Doe',
};


// 17. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables:
const personE17 = {
  name: 'John Doe',
  age: 25,
  address: {
    city: 'New York',
  },
};
