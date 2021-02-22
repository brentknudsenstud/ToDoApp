//  document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.sidenav');
//    var instances = M.Sidenav.init(elems, options);
//  });
// objects

// const lists = {
//   1: {name: 'Shopping list'},
//   2: {name: 'Honey do list'},
//   // extra lists below
// }

// const currentList = {
//   name: 'Shopping List',
//   todos: [

//   ]
// }

const tasks = [
  {text: 'bananas',
  completed: false},
  {text: '1 lb ground turkey',
  completed: false}
]

const lists = {
  1: {
    name: 'Shopping List',
    lists: [
      {text: 'bananas',
      completed: false,},
      {
        text: '1 lb ground turkey',
        completed: false,
      }
    ]
  },
}
 
const currentList = lists[0];
const currentTask = tasks[0];

// Insert sample function code from slide 14 below
function showList() {
  //hold the html that will be displayed in the list sidebar
  let listsHtml = '<div id="what-list" class="collection">';
  // iterate through the lists to get their names
  lists.forEach((list) => {
    //Make it so each list that is created has its own id as it loops through below.
    listsHtml += '<a id="${list.id}" href="#" class="collection-item detail">${list.name}</a>';
  });
}
  //print out the lists
  document.getElementById('what-list').innerHTML = listsHtml;

function showTask() {
// hold the html that will displayed in the task 'sidebar'
let tasksHtml = '<div id="add-task" class="collection">';
// iterate through the tasks to get their names
tasks.forEach((task) => {
// Make it so each task that is created has its own id as it loops through below.
tasksHtml += '<a id="${task.id}" href="#" class="collection-item detail">${task.name}</a>';
});
// print out the tasks
document.getElementById('add-task').innerHTML = tasksHtml;
  //print out the name of the current list
  document.getElementById('selected-list-output'). innerText = currentList.name;

  // iterate over the tasks in the current list
  let tasksHtml = '<div id="what-task" class="collection">';
  currentList.tasks.forEach((list) => {
    tasksHtml +='<a id="?" href="#!" class="collection-item">${tasks.text}</a>';
  });
}

function addTasks() {
// get the task from the task input box
const text = 
document.getElementById('enter-task').value;
if(text) {
  currentList.tasks.push({
    text: text,
    completed: false
  })
  showTask();
}
}
  // 1a, 1b - create lists and name lists
function addLists() {
  const text =
  document.getElementById('what-list').value;
  if(text) {
    currentList.lists.push({
      text: text,
      completed: false,
    })
    showList();
  }
}
// 1c - remove lists

function removeLists() {

}
  // 2 - create limitless tasks

  // 3 - mark task complete
function markTasksCompleted() {

}
  // 4 - clear completed task
function clearCompletedTasks() {

}
  // 5 - edit task
function editTasks() {

}
  // 6a - delete tasks without completing them first
  // 6b - delete lists without completing them first

  // 7a - use local storage to store list names

  // 7b - use local storage to store tasks in each list

  // 7c - use local storage to store login info - name, password