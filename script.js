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