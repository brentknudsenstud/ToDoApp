// 1a, 1b - create lists and name lists

// 1c - remove lists

class List {
    constructor(id,name) { 
      this.id = id;
      this.name = name;
    }
    addTask() {
  
    }
    removeTask() {
  
    }
    getTask() {

    }
  
  }
  let list = new List(1, 'hardware store') 

  function showList() {
    // hold the html that will be displayed in the list sidebar
    let listsHtml = '<div id="what-list" class="collection">';
    // iterate through the lists to get their names
    lists.forEach((list) => {
      // Make it so each list that is created has its own id as it loops through below.
      listsHtml += '<a id="${list.id}" href="#" class="collection-item detail">${list.name}</a>';
    });
  }
  //print out the lists
  document.getElementById('what-list').innerHTML = listsHtml;

  function addLists() {
    const text =
      document.getElementById('what-list').value;
    if (text) {
      currentList.lists.push({
        text: text,
        completed: false,
      })
      showList();
    }
    window.localStorage.setItem(lists, JSON.stringify(text));
  }

// 6b - delete lists without completing them first
  function removeLists() {
    const text = 
    document.getElementById('remove-list').value;
    if (text) {
      currentList.lists.pop({ // not sure if this is right
        text: text,
        completed: true,
      })
      showList();
    }

}

// 7a - use local storage to store list names
//localStorage can only store strings.
// To store arrays or objects, you would have to convert them to strings 
// To do this, use the JSON.stringify() method before passing to setItem()
window.localStorage.setItem(listName, List);

const list = {
  name: ""
}
  