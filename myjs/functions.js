function getNewId(prefix) {
    return prefix + Math.random().toString(36).substr(2, 10);
  }

  function selectPopulateList(id, name) {
    selectedList = id;
    document.getElementById('selected-list-output').innerText = name;
    console.log(name);
  }