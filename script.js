let storeInventory = {
    electronics: ['Laptop', 'Smartphone', 'Tablet'],
    clothing: ['T-shirt', 'Jeans', 'Jacket'],
}


console.log(storeInventory.electronics[2]);
console.log(storeInventory.clothing[1]);

storeInventory.clothing.push('Sweater');
console.log(storeInventory.clothing);


for (let category in storeInventory) {
    console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}:`);
    for (let product of storeInventory[category]) {
        console.log(`${product}`);
    }
}


let randomNum = Math.random();
console.log(randomNum);


let randomBetween1and10 = Math.floor(Math.random() * 10) + 1;
console.log(randomBetween1and10);

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


console.log(`Rolled dice is: ${rollDice()}`);
console.log(rollDice());