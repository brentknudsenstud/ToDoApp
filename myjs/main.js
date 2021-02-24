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
  {
    text: 'bananas',
    completed: false
  },
  {
    text: '1 lb ground turkey',
    completed: false
  }
]

const lists = [
  {
    name: 'Shopping List',
    lists: [
      {
        text: 'bananas',
        completed: false,
      },
      {
        text: '1 lb ground turkey',
        completed: false,
      }
    ]
  },
]

const currentList = lists[0];
const currentTask = tasks[0];


// 1a, 1b - create lists and name lists

// 1c - remove lists


// 2 - create limitless tasks

// 3 - mark task complete
