console.log('-------------Exercise 1------------------');
// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.

class Person {
    constructor(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    greet() {
        console.log(`Hello, My name is ${this._name},My gender is ${this._gender} and I am ${this._age} years old. `)

        console.log(`Hello, my name is ${this._name}, my gender is ${this._gender} and I am ${this._age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, gender, major) {
        super(name, age, gender);
        this._major = major;
    }

    greet() {
        console.log(`Hello, My name is ${this._name}.My gender is ${this._gender}.I am ${this._age} years old.My job is ${this._major} `)

        console.log(`Hello, my name is ${this._name}. My gender is ${this._gender}. I am ${this._age} years old. My job is ${this._major}.`);
    }
}

const person1 = new Person("Onder", 47, "male");
const student1 = new Student("tugba", 39, "female", "IT specialist");

person1.greet();
student1.greet();

console.log('-------------Exercise 2------------------');
// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }
    describe() {
        console.log(`The color of this ${this._name} is ${this._color}.`);
    }
}

class Square extends Shape {
    constructor(color, sideLength) {
        super("square", color);
        this._sideLength = sideLength;
    }

    area() {
        return this._sideLength * this._sideLength;
    }

    describe() {
        console.log(`This is a ${this._color} square with a side length of ${this._sideLength} and an area of ${this.area()}`)
    }
}
const shape1 = new Shape("hexagon", "blue");
shape1.describe();

const square1 = new Square("red", 7);
square1.describe();


console.log('-------------Exercise 3------------------');
// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.

class Vehicle {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    start() {
        console.log(`The vehicle ${this._make} ${this._model} from ${this._year} has started.`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this._numDoors = numDoors;
    }

    start() {
        console.log(`The car ${this._make} ${this._model} with ${this._numDoors} doors from ${this._year} has started`);
    }
}


const myVehicle = new Vehicle('Toyota', 'Corolla', 1998);
const myCar = new Car('Kia', 'Cerato', 2016, 4);


myVehicle.start();
myCar.start();


console.log('-------------Exercise 4------------------');

// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

class BankAccount {
    constructor(balance = 0, interestRate = 0) {
        this._balance = balance;
        this._interestRate = interestRate;
        this._transactionHistory = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("You entered an invalid amount.Please enter a positive amount.");
        } else {
            this._balance += amount;
            const transaction = {
                "type": "deposit",
                "amount": amount,
                "date": new Date().toLocaleDateString(),
            };
            this._transactionHistory.push(transaction);
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("You entered an invalid amount.Please enter a positive amount.");
        } else if (amount > this._balance) {
            console.log("Insufficient balance");
        } else {
            this._balance -= amount;
            const transaction = {
                "type": "withdraw",
                "amount": amount,
                "date": new Date().toLocaleDateString(),
            };
            this._transactionHistory.push(transaction);
        }
    }

    get transactionHistory() {
        return this._transactionHistory.slice();
    }

    get currentBalance() {
        return this._balance;
    }
}

const myAccount = new BankAccount(1200, 0.96);
console.log("Account balance: ", myAccount.currentBalance);

myAccount.deposit(-300);
myAccount.withdraw(2500);

myAccount.deposit(650);
myAccount.withdraw(525);

console.log("Current account balance: ", myAccount.currentBalance);

console.log("Transaction history: ", myAccount.transactionHistory);
