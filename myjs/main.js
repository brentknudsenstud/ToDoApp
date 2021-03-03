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

let lists = [
  {
    id: "fjdslf",
    name: 'Hardware Shopping List',
    tasks: [
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
  {
    id: "fjdslf",
    name: 'Garden Shopping List',
    tasks: [
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
showLists();
