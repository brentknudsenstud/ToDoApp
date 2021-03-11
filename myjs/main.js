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

let tasks = [
   // new Task ('bananas'),
   // new Task ('1 lb ground turkey'),
];

let lists = [
  {
    id: "fjdslf",
    name: 'Hardware Shopping List',
    tasks: tasks
  },
  {
    id: "fjdsfl",
    name: "Garden Shopping List",
    tasks: tasks
  }
];
     

const currentList = lists[0];
showLists();
