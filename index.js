/*
[] add description array to work in tandem with the tasks
  [] modify the task funciton to accomodate
*/




// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// A new task will be created as incomplete
// add a description for the task
function newTask(title, description) {
  const newTask = {
    title: title,
    complete: false,
    description: description,
    logTaskState: function() {
      // const title = taskTitles[taskIndex];
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function(task) {
      this.complete = true;
    },
  };
  return newTask
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", 'clean the 💩!! out of the box'); // task 0
const task2 = newTask("Do Laundry", 'yikes'); // task 1
const tasks = [task1, task2]


task1.logTaskState();
task1.completeTask()
task1.logTaskState();

console.log(tasks);
