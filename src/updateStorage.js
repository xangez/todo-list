import { storage } from "./storage.js";

const updateStorage = (function () {

  let allLists;
  function createList(name) {
    return { name: name, id: Date.now(), todos: [] };
  }

  function createTodoItem(info, checked) {
    return { info: info, checked: checked };
  }

  function addList(value) {
    const newList = createList(value);

    allLists = storage.getAllLists();
    allLists.push(newList);
    updateStorage();
  }

  function addTodo(value) {
    allLists = storage.getAllLists();

    const newTodo = createTodoItem(value, false);
    let i = getListIndex();

    allLists[i].todos.push(newTodo);
    updateStorage();
  }

  function updateStorage() {
    localStorage.setItem("allLists", JSON.stringify(allLists));
  }

  function editTodo(info, ID) {
    let i = getListIndex();
    allLists[i].todos[ID].info = info;
    updateStorage();
  }

  function editChecked(checkedState, ID) {
    allLists = storage.getAllLists();

    let i = getListIndex();
    allLists[i].todos[ID].checked = checkedState;
    updateStorage();
  }

  function updateCompleted() {
    allLists = storage.getAllLists();

    let i = getListIndex();
    let todos = allLists[i].todos;
    todos.forEach((todo, index) => {
      if (todo.checked == true) {
        allLists[i].todos.splice(index, 1);
      }
    });
    updateStorage();
  }

  function deleteList() {
    allLists = storage.getAllLists();
    let i = getListIndex();
    allLists.splice(i, 1);
    updateStorage();
    updateSelectedList();
  }

  function updateSelectedList() {
    localStorage.setItem("selectedList.ID", allLists[0].id);
  }

  function getListIndex() {
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == storage.getSelectedList()) {
        return i;
      }
    }
  }

  return {
    addList,
    addTodo,
    editTodo,
    editChecked,
    updateCompleted,
    updateStorage,
    deleteList,
  };
})();

export { updateStorage };

