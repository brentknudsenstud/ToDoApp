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
    let tasksHtml = '<div id="task-container" class="col <!-- s12 m12 -->">';
    // iterate over the tasks in the current list
    tasks.forEach((task) => {
    // Make it so each task that is created has its own id as it loops through below
      tasksHtml += `
      
        <div id="${task.id}" class="collection-item detail">
          <label>
            <input type="checkbox" />
            <span>${task.text}</span>
            <span><button class="btn" onclick="removeTask('${task.id}')">
              <i class="far fa-trash-alt"></i>
            </button><span>
          </label>
        </div>
         <div class="divider"></div>`;
    });
    tasksHtml += '</div>'

    // print out the tasks
    document.getElementById('what-task').innerHTML = tasksHtml;

  }
  // The function below was patterned after the addLists() function in list.js
  function addTasks() {
      const text =
        document.getElementById('enter-task').value;
      if (text) {
        tasks.push(new Task(text)); // somehow connect the tasks to the list they are in (optional-ish)
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
    // did this through materialize's css and js
}
// 4 - clear completed task
function clearCompletedTasks() {

  /* create an eventListener or onclick event that responds to the tasks that are completed (checkbox present) so that the function below runs; make sure that it only responds to those task items that are checked that checks for checked items */
  let taskComplete = [...document.querySelectorAll("#task-container input")]
  .filter(function(atask) {
      return atask.checked == true;
  }); 
  tasks = tasks.filter(function (atask) {
  taskComplete;
  if (taskComplete == false) {
    // syntax inside parentheses for does the text exist in my task array
  }
});
  showTasks();
  console.log(taskComplete);
  // Create a function that loops through the tasks and filters out the ones that are completed, use filter method
  // filter: checked or not checked
  // return true for any objects that have an unchecked box
 

}
// 5 - edit task
function editTasks() {

}


// 6a - delete tasks without completing them first: done!
// 7b - use local storage to store tasks in each list
// Should I put this function or whatever it's called in the list.js file?
