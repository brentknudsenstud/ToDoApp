// 2 - create limitless tasks

// 3 - mark task complete
class Task {
    constructor(text, id) {
      this.id = id;
      this.text = text;
      this.completed = false;
    }
    setCompleted() { }
    editTasks() { }
  }

  function showTask() {
    // hold the html that will displayed in the task 'sidebar'
    let tasksHtml = '<div id="add-task" class="collection">';
    // iterate through the tasks to get their names
    tasks.forEach((task) => {
      // Make it so each task that is created has its own id as it loops through below.
      tasksHtml += `<a id="${task.id}" href="#" class="collection-item detail">${task.name}</a>`;
    });
    // print out the tasks
    document.getElementById('add-task').innerHTML = tasksHtml;
    //print out the name of the current list
    document.getElementById('selected-list-output').innerText = currentList.name;
  
    // iterate over the tasks in the current list
    let tasksHtml = '<div id="what-task" class="collection">';
    currentList.tasks.forEach((list) => {
      tasksHtml += `<a id="?" href="#!" class="collection-item">${tasks.text}</a>`;
    });
  }
  
  function addTasks() {
    // get the task from the task input box
    const text =
      document.getElementById('enter-task').value;
    if (text) {
      currentList.tasks.push({
        text: text,
        completed: false
      })
      showTask();
    }
  }

  function markTasksCompleted() {

}
// 4 - clear completed task
function clearCompletedTasks() {

}
// 5 - edit task
function editTasks() {

}


// 6a - delete tasks without completing them first
// How will I let the user do that? Create a button for the user to do that. Have a remove button for each line.
function removeTask(id, name) {
  list.removeTask(id, name);
  print();
}
document.getElementById("remove-task").innerHTML = removeTasksHtml


// hold the html that will displayed in the task 'sidebar'
let removeTasksHtml = '<div id="remove-task" class="collection">';
// iterate through the tasks to remove them
tasks.forEach((removetask) => {
  // Make it so each task that is created has its own id as it loops through below.
  removeTasksHtml += `<a id="${removetask.id}" href="#" class="collection-item detail">${removetask.name}</a>`;
});




// 7b - use local storage to store tasks in each list
// Should I put this function or whatever it's called in the list.js file?
