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
    return `Hello, ${user}! Let's manage your taskList`;
}

let taskList = []

const addTask = (task) => {
    taskList.push(task)

    console.log(`New task added: ${task}`)
}

const removeTask = (task) => {

    if (taskList.includes(task)) {
        taskList = taskList.filter(e =>
            e !== task)

        console.log(`Task ${task} removed`)
    } else {
        console.log('Task not included')
    }
}

const viewTasks = () => {
    console.log(taskList)
}

async function assistant() {
    const dataLoaded = await Promise.resolve('tasks loaded')
    console.log(dataLoaded)


    const error = dataLoaded !== 'tasks loaded' ? 'Error loading data' : null

    if (error) {
        console.log(`${error}`)
        return
    } else {
        console.log("Successfully loaded data!")
        // simulating loading the data 
        addTask("do dishes")
        addTask('clean house')
    }

    // user actions that happen after 
    removeTask('walk dog')
    viewTasks()
}

assistant()