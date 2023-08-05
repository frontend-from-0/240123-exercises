// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. 
// Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student 
// class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and 
// log them to console.
console.log("Example 1; ");

class Person {
    constructor(name, age, gender){
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    greet(){
        console.log(`Greetings from ${this._name}`);
    }
}

class Student extends Person{
    constructor(name, age, gender, major){
        super(name, age, gender);
        this._major = major;
    }

    greet(){
        console.log(`Greetings from ${this._name}, a student who is studying ${this._major}`);
    }
}

const person = new Person("Saffet", 26, "Male");
const student = new Student("Ramazan", 30, "Male", "Electrical&Electronics Engineering");

console.log(person);
console.log(student);

console.log("==================================");
// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the 
// console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area 
// properties. Override the describe() method in the Square class to log a description of the square to the console 
// (e.g. "This is a blue square with a side length of 5 and an area of 25").
console.log("Example 2; ");

class Shape{
    constructor(name, color){
        this._name = name;
        this._color = color;
    }

    describe(){
        console.log(`This is a ${this._color} ${this._name}`);
    }
}

class Square extends Shape{
    constructor(color, sideLenght){
        super("square",color);
        this._sideLenght = sideLenght;
        this._area = sideLenght*sideLenght;
    }

    describe(){
        console.log(`This is a ${this._color} ${this._name} with a side lenght of ${this._sideLenght} and area of ${this._area}`);
    }
}

const myShape = new Shape("rectangular", "purple");
myShape.describe();

const mySquare = new Square("blue", 4);
mySquare.describe();

console.log("==================================");
// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console 
// indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. 
// Override the start() method in the Car class to log a different message to the console indicating that the car has started.
console.log("Example 3; ");

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(){
        console.log(`the vehicle make ${this.make}, model ${this.model} and year ${this.year} has started`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numDoors){
        super(make, model, year);
        this.numDoors = numDoors;
    }

    start(){
        console.log(`the car ${this.make} ${this.model} ${this.year} and number of door is ${this.numDoors} has started`);
    }
}

const vehicleInstance = new Vehicle("Audi", "RS6", 2019);
const carInstance = new Car("Nissan", "GTR", "2017", 2);

vehicleInstance.start();
carInstance.start();

console.log("==================================");
// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. 
// Add a transactionHistory property that is an array of objects representing each transaction made on the account, 
// with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, 
// date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the 
// transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, 
// and a get currentBalance() getter method that calculates and returns the current balance of the account based on the 
// transaction history.
console.log("Exercise 4: ");

class BankAccount{
    constructor(balance, interestRate){
        this._balance = balance;
        this._interestRate = interestRate;
        this._transactionHistory = [];
    }

    deposit(amount){
        if(amount>0){
            this._balance += amount;
            const transaction = {
                type: "Deposit",
                amount: amount,
                date: new Date().toLocaleDateString()
            };
            this._transactionHistory.push(transaction);
            console.log(`Succesfully deposited ${amount} into the bank account`);
        }
        else{
            console.log("Please provide a positive value.");
        }
    }

    withdraw(amount){
        if(amount>0){
            if(this._balance >= amount){
                this._balance -= amount;
                const transaction = {
                    type: "Widthrawal",
                    amount : amount,
                    date: new Date().toLocaleDateString()
                }
                this._transactionHistory.push(transaction);
                console.log(`Successfully witdhrew ${amount} from the account.`);
            }
            else{
                console.log("Insufficient balance.");
            }
        }
        else{
            console.log("Provide a positive value.");
        }
    }

    get transactionHistory() {
        return [...this._transactionHistory];
    }

    set transactionHistory(history) {
        this._transactionHistory = history;
    }

    get currentBalance() {
        let balance = this._balance;
        for(const transaction in this._transactionHistory) {
            if(transaction.type === "deposit"){
                balance += transaction.amount;
            }
            else if(transaction.type === "withdrawal"){
                balance -= transaction.amount;
            }
        }
        return balance;
    }

}

const account = new BankAccount(1000, 0.005);

console.log("Balance: ",account._balance);
console.log("Interest rate: ",account._interestRate);


account.deposit(400);
console.log("New balance: ",account._balance);

account.withdraw(600);
console.log("New balance: ",account._balance);

console.log("Transaction History: ", account._transactionHistory);

console.log("Current Balance: ", account._balance);

console.log("==================================");