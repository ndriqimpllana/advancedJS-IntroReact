// Build a task assistant app 
// function declaration : greet the user or set up context
// arrow funtion log task details
//async funtion simulate loading or checking a task status

//include if else one ternary operation

//how do your functions support one another
//why you did choose each type
//can you simplify or impove your logic

//Function declaration

function greetUser(user) {
    return `Welcome, ${user}! Let's manage your tasks`;
}

console.log(greetUser('Kate'));

let tasks = [];

const addTask = (task) => {
    tasks.append(task);
    console.log(`New task added: ${task}`);
}

