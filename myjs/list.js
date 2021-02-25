// 1a, 1b - create lists and name lists

// 1c - remove lists
let selectedList = null;

class List {
    constructor(name) { 
      this.id = getNewId('list-');
      this.name = name;
      this.tasks = [];
    }
    addTask() {
  
    }
    removeTask() {
  
    }
    getTask() {

    }
  
  }
  let list = new List(1, 'hardware store') 

  // MODEL MY PRINTING/ADDING HTML FUNCTIONS AFTER THIS FUNCTION BELOW!
  function showLists() {
    // hold the html that will be displayed in the list sidebar
    let listsHtml = '';
    // iterate through the lists to get their names
    lists.forEach((list) => {
      // Make it so each list that is created has its own id as it loops through below.
      listsHtml += `<a onclick="selectPopulateList('${list.id}', '${list.name}')" id="${list.id}" href="#" class="collection-item detail">${list.name}</a>`;
    });
    //print out the lists
  document.getElementById('what-list').innerHTML = listsHtml;
  }
  
  // Pattern the addTasks() function in task.js after the addLists() function below
  function addLists() {
    const text =
      document.getElementById('list-name').value;
    if (text) {
      lists.push(new List(text)
      )
      showLists();
    }
   // window.localStorage.setItem(lists, JSON.stringify(text));
  }

// 6b - delete lists without completing them first
  function removeLists() {
    const text = 
    document.getElementById('remove-list').value;
    if (text) {
      
      showLists();
    }

}

// 7a - USE LOCAL STORAGE TO STORE LIST NAMES
//localStorage can only store strings.
// To store arrays or objects, you would have to convert them to strings 
// To do this, use the JSON.stringify() method before passing to setItem()
// window.localStorage.setItem(listName, List);


  