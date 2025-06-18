function greetEveryone(names) {
    for (let i=0; i < names.length; i++) {
        console.log("Hi," + names[i]);
    }
}

greetEveryone(["Ali", "Sara", "John"]);


function filterPositives(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            result.push(numbers[i]);
        }
    }
    return result
}
console.log(filterPositives([-1, 2, -3, 4, 5]));

function sumNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i ++) {
        total += numbers[i];
    }
    return total;
}
console.log(sumNumbers([10, 20, 30, 40]));


function itsEven(num) {
    return num % 2 === 0;
}

console.log(itsEven(6)); // true
console.log(itsEven(7)); // false

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(6)); // false
console.log(isOdd(7)); // true


function greetUser() {
    console.log("hello, student!");
}

greetUser(); // Output: hello, student!

function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(4, 19));


function greet(name) {
    console.log("hello," + name);
}

greet("Ali"); 

function countToFive() {
    for (let i = 0; i <=5; i++) {
        console.log(i);
    }
}

countToFive();

function printRange(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}

printRange(20); 

function