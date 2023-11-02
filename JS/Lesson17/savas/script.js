// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4]

function sumIntegers (num) {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

console.log(`Exercise 1.1: ${sumIntegers(integersEx1)}`);
console.log(`Exercise 1.2: ${sumIntegers(integersEx1V2)}`);

console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5

function avgIntegers (num) {
  let avg = 0;
  for (i = 0; i < num.length; i++) {
    avg += num[i];
  }
  return avg = avg / num.length;
}

console.log(`Exercise 2: ${avgIntegers(integersEx1)}`);


console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"
let stringE3 = ["Hello", "World", "!"];

function sumStrings(givenStrings) {
  let sumWords = "";
  for (i = 0; i < givenStrings.length; i++) {
    sumWords += " " + stringE3[i];
  }
  return sumWords;
}

console.log(`Exersise 3: ${sumStrings(stringE3)}`);

console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx = [1, 2, 3, 4, 7, 10];
function findOddNumbers(num) {
  let newOddArray = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
    newOddArray.push(num[i]);
    }
  }
  return newOddArray; 
}

console.log("Exercise 4.1: ", findOddNumbers(arrayEx));
console.log("Exercise 4.2: ", findOddNumbers([1, 2, 3, 4, 7, 9, 10, 11, 14, 15]));

console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]

function findEvenNumbers(num) {
  let newEvenArray = [];
  for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    newEvenArray.push(num[i]);
    }
  }
  return newEvenArray; 
}

console.log("Exercise 5: ", findEvenNumbers(arrayEx));

console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]

function removeNumber(num, removeNum) {
  let remainArray = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== removeNum) {
      remainArray.push(num[i]);
    }
  }
  return remainArray
}

console.log("Exercise 6: ", removeNumber([1, 2, 3, 4, 2], 2));

console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]

function objectKeys(givenObjects) {
  return Object.keys(givenObjects);
}

console.log("Exercise 7: ", objectKeys({name: "John", age: 30, city: "New York"}));

console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]

function objectValues(givenObjects) {
  return Object.values(givenObjects);
}

console.log("Exercise 8: ", objectValues({name: "John", age: 30, city: "New York"}));

console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false

function isKeyHere(givenObjects, givenKeys) {
    if (typeof givenObjects !== "object") {
      console.log("Provide value is not an object");
    } else {
      if (givenKeys in givenObjects) {
        return true;
      } else {
        return false
      }
    };
}

console.log("Exercise 9.1: ", isKeyHere({name: "John", age: 30, city: "New York"}, "age"));
console.log("Exercise 9.2: ", isKeyHere({name: "John", age: 30, city: "New York"}, "surname"));

console.log('----------------------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}

function addKeyValue(object, key, value) {
  object[key] = value;
  return object
}

console.log("Exercise 10: ", addKeyValue({name: "John", age: 30}, "city", "New York"));

console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}

function removeKeyValue(object, key) {
  delete object[key];
  return object
}

console.log("Exercise 11: ", removeKeyValue({name: "John", age: 30, city: "New York"}, "city"));

console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}

function convertToObject(keys, values) {
  let object = {};
  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i];
  }
  return object;
}

console.log("Exercise 12: ", convertToObject(["name", "age", "city"], ["John", 30, "New York"]));

console.log('----------------------------');
// 13. Array Destructuring
// Given the following array, use array destructuring to assign the values of x, y, and z to their respective variables: 
const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;

console.log(`Exercise 13: x = ${x}, y = ${y}, z = ${z}`);

console.log('----------------------------');
// 14. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
  name: 'John Doe',
  age: 25,
};

const { name, age} = personE14;

console.log("Exercise 14: ", personE14);

console.log('----------------------------');
// 15. Array Destructuring with Default Values
// Given the following array, use array destructuring with default values to assign the values of a, b, and c, with default values of 1, 2, and 3 respectively:
const numbers = [4];
const [a = 1, b = 2, c = 3] = numbers;

console.log("Exercise 15: ", a, b, c);  // Anna, the default value for a is always 4. No matter what I did, it didn't work.

console.log('----------------------------');
// 16. Object Destructuring with Renaming
// Given the following object, use object destructuring with renaming to assign the value of name to a variable named fullName:
const personE16 = {
  name: 'John Doe',
};
const {name: fullName} = personE16;

console.log("Exercise 16: Full Name is",fullName);

console.log('----------------------------');
// 17. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables:
const personE17 = {
  name1: 'John Doe',      // I have to change the keys' names of 'name' and 'age' as 'name1' and 'age1', because it doesn't work.
  age1: 25,
  address: {
    city: 'New York',
  },
};
const { name1, age1, address: {city} } = personE17;
console.log("Exercise 17: ", personE17);