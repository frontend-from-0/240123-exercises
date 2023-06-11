
/* 1. */

let x = 5;
const y = 3;
let z = x + y;

console.log("x:", x);
console.log("y:", y);
console.log("z:", z);

/* 2. */

let name = "onder martin";
let age = 47;
let phrase = "Hello, world! My name is " + name + ". I'm " + age + " years old.";

console.log(phrase);

/* 3. */

let number1 = 10;
let number2 = 3;
let result = number1 / number2;
let number3 = number1 - number2;

console.log("number1:", number1);
console.log("number2:", number2);
console.log("result:", result);
console.log("number3:", number3);

/* 4. */

let firstName = "Onder";
let lastName = "Martin";
let fullName = firstName + " " + lastName;

console.log("fullName:", fullName);

/* 5. */

let number4 = 7;
let number5 = 2;
let result2 = number4 * number5;
console.log('Exercise 5:', result2);

/* 6. */
const PI = Math.PI;
console.log("PI:", PI);

/* 7. */

let counter = 0;

counter = counter + 1;
console.log("Counter after increment 1:", counter);

counter += 1;
console.log("Counter after increment 2:", counter);

counter++;
console.log("Counter after increment 3:", counter);

/* 8. */

let temperature = 20;
temperature += 5;

console.log("Updated temperature:", temperature);

/* 9. */

let TODAY_DATE = new Date();

console.log("Today's date:", TODAY_DATE);


/* 10. */

let number6 = 6;
let number7 = ++number6;

console.log("number6:", number6);
console.log("number7:", number7);

/* 11. */
let number8 = 8;
let number9 = number8++;

console.log("number8:", number8);
console.log("number9:", number9);

/* 12. */
let number10 = -3;
result = number10 * 2;

console.log("Result:", result);


console.log("Result:", result);

/* 13. */

let a = 2;
let b = 3;
++a;
result = a + b;

console.log("Result:", result);


/* bonus. */
let randomNumber = Math.floor(Math.random() * 11);
console.log("Random number between 0 and 10:", randomNumber);
