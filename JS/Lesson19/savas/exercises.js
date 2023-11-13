console.log("Exercise 1:-------------------------------------------------------------");
// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.

class Person {
    constructor (firstName, age, gender) {
        this._firstName = firstName;
        this._age = age;
        this._gender = gender;
    }

    get firstName () {
        return this._firstName.toUpperCase();
    }

    get age () {
        return this._firstName;
    }

    get gender () {
        return this._firstName;
    }

    set firstName (firstNameParam) {
        return this._firstName = firstNameParam;
    }

    set age (ageParam) {
        return this._age = ageParam;
    }

    set gender (genderParam) {
        return this._gender = genderParam;
    }
    
    greet () {
        console.log(`Hello ${this._firstName} ${this._age} ${this._gender}`);
    }
};

const john = new Person ('John', 30, 'Male', 'student');
const karen = new Person ('Karen', 40, 'Female')
john.greet();
karen.greet();

class Student extends Person {
    constructor (firstName, age, gender, status) {
        super(firstName, age, gender);
        this._status = status;
    }

    get status () {
        return this._status;
    }

    set status (statusParam) {
        return this._status = statusParam;
    }

    greet () {
        console.log(`Hello, this is ${this._firstName} (${this._age}, ${this._gender}). I am a ${this._status}.`);
    }
}

const kyle = new Student('Kyle', 18, 'Female', 'Student');
kyle.greet();


console.log("Exercise 2:-------------------------------------------------------------");
// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").

class Shape {
    constructor (name, color) {
        this._name = name;
        this._color = color;
    }

    describe () {
    console.log(`This is a ${this._color} ${this._name}`);
    }
}

class Square extends Shape {
    constructor (name, color, sideLength, area) {
        super (name, color);
        this._sideLength = sideLength;
        this._area = area;
    }

    describe () {
        console.log(`This is a ${this._color} ${this._name} with a side length of ${this._sideLength} and an area of ${this._area}`)
    }
}

const shape1 = new Square ('square', 'blue', 5, 25);
shape1.describe();


console.log("Exercise 3:-------------------------------------------------------------");
// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.

class Vehicle {
    constructor (make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    start () {
        console.log(`${this._year} model ${this._make} ${this._model} has started.`)
    }
}

const teslaModelY = new Vehicle ('Tesla', 'Model Y', 2023);
teslaModelY.start();

class Car extends Vehicle {
    constructor (make, model, year, numDoors) {
        super (make, model, year);
        this._numDoors = numDoors;
    }

    start () {
        console.log(`${this._year} model ${this._make} ${this._model} has ${this._numDoors} doors.`);
    }
}

const teslaModelS = new Car ('Tesla', 'Model S', 2023, 5);
teslaModelS.start();

console.log("Exercise 4:-------------------------------------------------------------");
// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

class BankAccount {
    constructor (balance, interestRate) {
        this._balance = balance;
        this._interestRate = interestRate;
        this._transactionHistory = [];
    }

    deposit (amount) {
        if (amount > 0) {
            this._balance += amount;
            const transaction = {type: "deposit", amount: amount, date: new Date().toLocaleDateString()};
            this._transactionHistory.push(transaction);
            console.log(`You deposited $${amount} to your account. Your new balance is $${this._balance}.`)
        } else {
            console.log(`Please start the deposit process.`)
        }
    }

    withdraw (amount) {
        if (amount > 0) {
            this._balance -= amount;
            const transaction = {type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()};
            this._transactionHistory.push(transaction);
            console.log(`You withdrew $${amount} from your account. Your new balance is $${this._balance}.`)
        } else {
            console.log(`Please start the withdrawal process.`)
        }
    }

    get transactionHistory() {
        return this._transactionHistory;
    }

    get currentBalance() {
        return this._balance;
    }

}

const bankAccount1 = new BankAccount (1000, 0.05);
console.log(`Bank Account 1' balance is: $${bankAccount1._balance}`)
bankAccount1.deposit(300);
console.log(bankAccount1.transactionHistory);
console.log('Your current balance is  $', bankAccount1._balance);
console.log('--------');

console.log(`Bank Account 1' balance is: $${bankAccount1._balance}`)
bankAccount1.withdraw(500);
console.log(bankAccount1.transactionHistory);
console.log('Your current balance is  $', bankAccount1._balance);