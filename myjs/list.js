// 1a, 1b - create lists and name lists: done!

// 1c - remove lists: done!
let selectedList = null;

class List {
    constructor(name) { 
      this.id = getNewId('list-');
      this.name = name;
      this.lists = [];
    }
    getTask() {

    }
  
  }
  let list = new List(1, 'hardware store'); 

  // MODEL MY PRINTING/ADDING HTML FUNCTIONS AFTER THIS FUNCTION BELOW!
  function showLists() {
    // hold the html that will be displayed in the list sidebar
    let listsHtml = '';
    // iterate through the lists to get their names
    lists.forEach((list) => {
      // Make it so each list that is created has its own id as it loops through below.
      listsHtml += `<div id="div-${list.id}" class="col s12 m12">
      <div onclick="selectPopulateList('${list.id}', '${list.name}')" id="${list.id}" class="collection-item detail">
      
        <label><span>${list.name}<span>
        </label>
        
      </div>
      <button class="btn" onclick="removeList('${list.id}')">
      <i class="far fa-trash-alt"></i>
      </button>
        <div class="divider">
        </div>`;
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
  function removeList(listid) {
    let text = document.getElementById(listid).innerText;
    console.log(listid);
    lists = lists.filter(function (item) {
      return text != item.name;
    })
    // showLists again
    showLists();
    }

// 7a - USE LOCAL STORAGE TO STORE LIST NAMES
//localStorage can only store strings.
// To store arrays or objects, you would have to convert them to strings 
// To do this, use the JSON.stringify() method before passing to setItem()
// window.localStorage.setItem(listName, List);

// Code commented out below is example // from slide 10 from Browser Storage // /// lecture, may be helpful on this ToDo app
// const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// DBOpenRequest.onsuccess = function(event) {
//   db = DBOpenRequest.result;
// };
// See also slide 11 for more variables and function examples
   