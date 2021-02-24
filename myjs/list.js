// 1a, 1b - create lists and name lists

// 1c - remove lists

class List {
    constructor(
      id,
      name
      ) { }
    addTask() {
  
    }
    removeTask() {
  
    }
  
  }
  let list = new List(1, 'hardware store') 

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
  }

  function removeLists() {

}

// 6b - delete lists without completing them first

// 7a - use local storage to store list names
  