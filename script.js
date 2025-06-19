let book = {
    title: "Gray Wolf",
    author: "Dug mc guggie",
    year: 2012,
    getSummary: function() {
        return `${this.title} by ${this.author}, published in the ${this.year}`;
    }
};

console.log(book.getSummary());


let carvana = {
    name: "Carvana",
    model: "Vrum Vrum",
    year:201,
    start: function() {
        console.log(`${this.name} is starting to pover up !!!`);
    }
}

let monkey = {
    name: "monkey car",
    model: "sick poop",
    year: 3454,
    start: function() {
        console.log(`${this.name} is in the broooom!!!!!!! `);
    }
}

carvana.start();
monkey.start();


function greet() {
    console.log(this);
}

greet();


function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(`${this.name} is starting`);
    }
}

let lightning = new Car('Lightnning', 'McQueen', 2006);
let mater = new Car('Mater', 'Tow Truck', 2002);

lightning.start();
mater.start();



let student = {
    name: "Alice",
    age: 33,
    address: {
        street: "IDK 456 Street",
        city: "Brooksville",
        zipCode: '62702'
    },
    courses: ['Javacsript', 'HTML', 'PYTHON']
};

console.log(student.address.city);
console.log(student.courses[2]);

student.address.city = "New York";
console.log(student.address.city);

console.log(student);

for (let key in student.address) {
    console.log(`${key}: ${student.address[key]}`);
}

let costumer = {
    name: 'Jane Doe',
    contact: {
        phone: '123-456-7890',
        email: 'jong@gmail.com'
    },
    shippingAddress: {
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zip: '62701'
    }
};

console.log(costumer.contact.email);
console.log(costumer.shippingAddress.city);