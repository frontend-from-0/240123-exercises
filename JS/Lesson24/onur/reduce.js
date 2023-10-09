
// Exercise 1:
// Calculate the sum of all numbers in the given array.
const numbersEx1 = [1, 2, 3, 4, 5];


const sumAllNums = numbersEx1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Exercise 1:", sumAllNums);
console.log("------------------------------------------------");


// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4, 543, 24234];

const findMaxNumber = numbersEx2.reduce((max, currentValue) => {
  if (currentValue > max) {
    max = currentValue;
  }
  return max;
}, -Infinity);

console.log("Exercise 2:", findMaxNumber);
console.log("------------------------------------------------");


// Exercise 3: Explain the code
// Count the occurrences of each element in the given array and return an object with the counts.
const elements = ['a', 'b', 'a', 'c', 'b', 'a'];

const elementCounts = elements.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue] === undefined) {
    accumulator[currentValue] = 1;
  } else {
    accumulator[currentValue]++;
  }
  return accumulator;
}, {});


console.log("Exercise 3:", elementCounts); // Output: { a: 3, b: 2, c: 1 }
console.log("------------------------------------------------");


// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];

const calculateAverageOfAllNumbers = numbersEx4.reduce((acc, numbers, currentIndex, array) => {
  acc += numbers;
  if (currentIndex === array.length - 1) {
    return acc / array.length;
  } else {
    return acc
  }
}, 0)
console.log("Exercise 4:", calculateAverageOfAllNumbers);
console.log("------------------------------------------------");

// Exercise 5: Explain the code below
// Count the number of unique elements in the array.
const numbersEx5 = [1, 2, 3, 2, 4, 3, 5];

const uniqueCount = numbersEx5.reduce((acc, value) => {

  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;

}, []);

const lengthUniqueNumbers = uniqueCount.length


console.log("Exercise 5:", lengthUniqueNumbers);







