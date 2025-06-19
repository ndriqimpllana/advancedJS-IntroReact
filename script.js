/*
function Character(name, classType, level, health) {
    this.name = name;
    this.classType = classType;
    this.level = level;
    this.health = health;
    this.inventory = [];
    this.stats = {attack: 10 * level, defence: 8 * level, speed: 5* level};

}

Character.prototype.levelUp = function() {
    this.level += 1;
    this.stats.attack += 5;
    this.stats.defence += 2;
    this.stats.speed += 4;
    console.log(`${this.name} has leveled up to level ${this.level}!`);
}

Character.prototype.takeDamage = function(damage) {
    this.health -= damage;
    if (this.health < 0)this.health = 0;
    console.log(`${this.name} took ${damage} damage and now has ${this.health}`);
    
    }

    Character.prototype.getSummary = function() {
        console.log(` Character Summary:
            Name: ${this.name}
            Class: ${this.classType}
            Level: ${this.level}
            Health: ${this.health}`)
            console.log("Stats:");
            for (let stat in this.stats) {
                console.log(`${stat}: ${this.stats[stat]}`);
            }
    };

let progorn = new Character("Progorn", "Warrior", 1, 100);
let aragorn = new Character("Aragorn", "Warrior", 39, 1000);


aragorn.getSummary();
aragorn.levelUp();

document.getElementById('header').textContent = "Hello DOM!";


const header = document.getElementById('header');

const header1 = document.querySelector("h1");

header.textContent = " Prrakituki magamuki";

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph added to the DOM directly from javascript!";
document.body.appendChild(newParagraph);

const button = document.getElementById("change-btn");

button.addEventListener("click", function() {
    alert("Button Clicked!");
});

function greet(name, callback) {
    const greetingMessage = document.getElementById
}



fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error.", error));



   

    const promise = new Promise((resolve, reject) => {
        let success = true;
        if(success) {
            resolve('Operation succeeded');
        }else {
            reject('Operation Failed');
        }
    });


    promise.then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log(error);
    });


    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error.', error));


    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            console.log(data);
        }catch(error) {
            console.error('Error.', error);
        }
    }

    fetchData();
*/


async function fetchUserData() {
    // Simulating a delay of 3 seconds to fetch user data
    await new Promise(resolve => setTimeout(resolve, 3000));
    return { name: 'John Doe', age: 30, email: "john@example.com"};

}

async function displayUserData() {
    try {
        const userData = await fetchUserData();

        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.textContent = `Name: ${userData.name}, Age: ${userData.age}, Email: ${userData.email}`;
    } catch (error) {
        console.error('Error fetching used data', error);
        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.textContent = 'Failed to fetch user data';
    }
    
}
document.addEventListener('DOMContentLoaded', displayUserData);