console.log('Hello');
console.log('I Like Pizza')

//window.alert('Hello There my name is arfa') alert

// This is a comment 
document.getElementById("myH1").textContent = 'Lolok'
document.getElementById("myP1").textContent = 'This is'
document.getElementById("myP2").textContent = 'cool'

//let age = 12
//let price = 25.000
//let gpa = 4.0
//let count = 1


//console.log(`Halo, aku berumur ${age} tahun. harga roti itu ${price} rupiah dan nilai ku ${gpa}`)
//console.log(typeof price)
console.log()

//if (age <= 18 && age > 12) {
 //   console.log('You are a Teenager')
//} else if (age <= 12) {
//    console.log('You are not a teen yet')
//}

//while (count < 5) {
//    console.log(count)
//    count += 1
//}

console.log(`==== Projects =====`)
console.log()

class Task{
    constructor(id, description){
        this.id = id;
        this.description = description;
        this.isCompleted = false;
    }

    toggleComplete() {
        this.isCompleted = !this.isCompleted;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const id = this.tasks.length + 1;
        const newTask = new Task(id, description);
        this.tasks.push(newTask);
        console.log(`Added: "${description}"`);
    }
    listTask(){
        if (this.tasks.length == 0){
            console.log('No Tasks found!');
            return;
        }
        this.tasks.forEach(task => {
            const status = task.isCompleted ? "Finished" : "Unfinished";
            console.log(`${task.id}. ${status} ${task.description}`)
        })
    }
}

// == Main File ==
const myManager = new TaskManager();
myManager.listTask();
myManager.addTask("Learning Python!")
myManager.addTask("Learning JS!")
myManager.listTask()

