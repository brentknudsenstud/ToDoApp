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
  
  let task = new Task(1, 'saw');
  // Pattern function showTasks() below after the showLists() function in list.js
  function showTasks() {
    
    // iterate over the tasks in the current list
    let tasksHtml = '';
    tasks.forEach((task) => {
    // Make it so each list that is created has its own id as it loops through below
      tasksHtml += `<a id="${task.id}" href="#!" class="collection-item detail">${task.text}</a>`;
    });
    // print out the tasks
    document.getElementById('what-task').innerHTML = tasksHtml;

  }
  // The function below was patterned after the addLists() function in list.js
  function addTasks() {
      const text =
        document.getElementById('add-task').value;
      if (text) {
        lists.push(new Task(text)
        )
        showTasks();
      }
     // window.localStorage.setItem(lists, JSON.stringify(text));
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
// // hold the html that will displayed in the task 'sidebar'
// let removeTasksHtml = '<div id="remove-task" class="collection">';
// // iterate through the tasks to remove them
// currentList.tasks.forEach((removetask) => {
//   // Make it so each task that is created has its own id as it loops through below.
//   removeTasksHtml += `<a id="${removetask.id}" href="#" class="collection-item detail">${removetask.name}</a>`;
// });

// document.getElementById("remove-task").innerHTML = removeTasksHtml



// 7b - use local storage to store tasks in each list
// Should I put this function or whatever it's called in the list.js file?
