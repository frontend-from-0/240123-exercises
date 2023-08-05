// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.
class Person{
    constructor(name, age, gender){
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    greet(){
        console.log("Hello I am " + this._name);
    }
}

class Student extends Person {
    constructor(name, age, gender, major){
        super(name, age, gender);
        this._major = major;
    }
    greet(){
        console.log("Hello I am " + this._name + ". My major is " + this._major);
    }
}

const person1 = new Person("Salih", 25, "male");
const student1 = new Student("Selin", 20, "female", "Computer Science");

person1.greet();
student1.greet();

console.log("___________________________________");
// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").

class Shape {
    constructor(name, color){
        this._name = name;
        this._color = color;
    }
    describe(){
        console.log("This is a " + this._color + " " + this._name);
    }
}

class Square extends Shape{
    constructor(name = "Square", color, sideLength, area){
        super(name, color);
        this._sideLength = sideLength;
        this._area = area;
    }
    describe(){
        console.log("This is a " + this._color + " " + this._name + " with side length of " + this._sideLength + " and an area of " + this._area);
    }
}

const shape1 = new Shape("Circle", "blue");
const square1 = new Square("Square", "blue", 5, 25);

shape1.describe();
square1.describe();


console.log("___________________________________");
// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.

class Vehicle{
    constructor(make, model, year){
        this._make = make;
        this._model = model;
        this._year = year;
    }
    start(){
        console.log("The " + this._model + " model vehicle has started.");
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numDoors){
        super(make, model, year);
        this._numDoors = numDoors;
    }
    start(){
        console.log("The " + this._model + " model car has started. And it has " + this._numDoors + "doors.");
    }
}

const vehicle1 = new Vehicle("Toyota", "Corolla", 2019);
const car1 = new car("Toyota", "Corolla Hybrit", 2023, 5);

vehicle1.start();
car1.start();

console.log("___________________________________");
// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.
class BankAccount{
    constructor(balance, interestRate){
        this._balance = balance;
        this._interestRate = interestRate;
        this._transactionHistory = [];
    }
    // I get help from chatGPT for the writing deposit. Then try myself for the withdraw.
    deposit(amount) {
        if (amount <= 0) {
          throw new Error("Deposit amount must be greater than zero.");
        }
        // Add a new transaction object to the transactionHistory array
        const depositTransaction = {
        type: "deposit",
        amount: amount,
        date: new Date().toLocaleDateString(),
        };
  
        // Update the balance by adding the deposited amount
        this._balance += amount;
  
        // Push the transaction object to the transactionHistory array
        this._transactionHistory.push(depositTransaction);
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new Error("Withdraw amount must be greater than zero.");
          }
        
          const withdrawTransaction = {
            type: "withdraw",
            amount: amount,
            date: new Date().toLocaleDateString(),
          };

          this._balance -= amount;
          this._transactionHistory.push(withdrawTransaction);
    }

    get transactionHistory() {
        return this._transactionHistory.slice();
    }

    get currentBalance() {
        // Calculate the current balance based on transactionHistory
        let currentBalance = this._balance;
      
        return currentBalance;
      }

}

// Example usage:
const myAccount = new BankAccount(0,0);

console.log("Initial Balance:", myAccount.currentBalance);

myAccount.deposit(100);
myAccount.withdraw(30);
myAccount.deposit(50);

console.log("Current Balance:", myAccount.currentBalance); // Output: 120

console.log("Transaction History:");
console.log(myAccount.transactionHistory);