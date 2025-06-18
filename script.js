let car = {
    name: 'Lightning McQueen',
    model: 'Race Car',
    year: 2006,
    start: function() {
        console.log(`Kachow!" ${this.year} ${this.name} is ready to roll!`);
    },

drive: function() {
    console.log(`${this.name} is zooming at top speed! Vroom-vroom!`);
},
brake: function() {
    console.log(`${this.name} creeches to a halt!`);
},
honk: function() {
    console.log(`${this.name} honks: "beep beep in the clouds!!`);
}
};


car.start();


let student = {
    name: "alex",
    age: 21,
    enrolled: true,
    courses: ["javascript", "python", "html"],
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

student.city = "New York";
student.greet();
student.courses.push("css");
console.log(student.courses);
console.log(student);


let person = {
    name: "alice",
    age: 40,
    sex: true
};

for ( let key in person) {
    console.log(`${key}: ${person[key]}`);
}

