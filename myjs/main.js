  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
// objects

const lists = {
  1: {name: 'Shopping list'},
  2: {name: 'Honey do list'},
  // extra lists below
}

const currentList = {
  name: 'Shopping List',
  todos: [

  ]
}

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

// Insert sample function code from slide 14 below
function show() {
  //hold the html that will be displayed in the list sidebar
  let listsHtml = '<div id="what-list" class="collection">';
  // iterate through the lists to get their names
  lists.forEach((list) => {
    listsHtml += '<a id="list-name1" href="#!" class="collection-item detail">${list.name}</a>';
  });
  //print out the lists
  document.getElementById('what-list').innerHTML = listsHtml;

  //print out the name of the current list
  document.getElementById(''). innerText = currentList.name;

  // iterate over the tasks in the current list
  let tasksHtml = '<div id="what-task" class="collection">';
  currentList.tasks.forEach((list) => {
    tasksHtml +='<a id="?" href="#!" class="collection-item">${tasks.text}</a>';
  });

  //print out the tasks
  document.getElementById('what-task').innerHTML = tasksHtml;
}

  // 1a - create lists

  // 1b- name lists

  // 2 - create limitless tasks

  // 3 - mark task complete

  // 4 - clear completed task

  // 5 - edit task

  // 6a - delete tasks without completing them first

  // 6b - delete lists without completing them first

  // 7a - use local storage to store list names

  // 7b - use local storage to store tasks in each list

  // 7c - use local storage to store login info - name, password