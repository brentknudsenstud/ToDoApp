// 2 - create limitless tasks

// 3 - mark task complete
// created this functionality using materialize css and javascipt framework


class Task {
    constructor(text) {
      this.id = getNewId('task-');
      this.text = text;
      this.completed = false;
    }
    setCompleted() { }
    editTasks() { }
  
  }

  let task = new Task(1, 'saw');
  // Pattern function showTasks() below after the showLists() function in list.js
  function showTasks() {
    // hold the html that will be displayed in the task sidebar
    let tasksHtml = '';
    // iterate over the tasks in the current list
    tasks.forEach((task) => {
    // Make it so each task that is created has its own id as it loops through below
      tasksHtml += `
      <div id="div-${task.id}" class="col s8">
           <div id="${task.id}" class="collection-item detail">
           <label>
           <input type="checkbox" />
           <span>${task.text}</span>
         </label></div>
      <button class="btn" onclick="removeTask('${task.id}')">
      <i class="far fa-trash-alt"></i>
      </button>
      </div>`;
    });
    // print out the tasks
    document.getElementById('what-task').innerHTML = tasksHtml;

  }
  // The function below was patterned after the addLists() function in list.js
  function addTasks() {
      const text =
        document.getElementById('enter-task').value;
      if (text) {
        tasks.push(new Task(text)
        )
        showTasks();
      }
     // window.localStorage.setItem(lists, JSON.stringify(text));
    }

    function removeTask(taskid) {
      let text = document.getElementById(taskid).innerText;
      console.log(taskid);
      tasks = tasks.filter(function (item) {
        return taskid !== item.id;
      })
      // showTasks again
      showTasks();
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
//function removeTask(id, name) {
//   list.removeTask(id, name);
//   print();
// }
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
