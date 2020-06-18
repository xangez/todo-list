import { listDisplay } from "./listDisplay.js";
import { todosDisplay } from "./todosDisplay.js";

const updateStorage = (function () {

  let allLists;
  let selectedList;
  function createList(name) {
    return { name: name, id: Date.now(), todos: [] };
  }

  function createTodoItem(info, checked) {
    return { info: info, checked: checked };
  }

  function addList(value) {
    const newList = createList(value);

    allLists = getAllLists();
    allLists.push(newList);
    updateStorage();
    listDisplay.renderMyLists(allLists);
  }

  function addTodo(value) {
    allLists = getAllLists();

    const newTodo = createTodoItem(value, false);
    let i = getListIndex();

    allLists[i].todos.push(newTodo);
    updateStorage();
    todosDisplay.renderTodos(getTodos());
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
    allLists = getAllLists();

    let i = getListIndex();
    allLists[i].todos[ID].checked = checkedState;
    updateStorage();
  }

  function updateCompleted() {
    allLists = getAllLists();

    let i = getListIndex();
    let todos = allLists[i].todos;
    todos.forEach((todo, index) => {
      if (todo.checked == true) {
        allLists[i].todos.splice(index, 1);
      }
    });
    updateStorage();
    todosDisplay.renderTodos(getTodos());
  }

  function deleteList() {
    allLists = getAllLists();
    let i = getListIndex();
    allLists.splice(i, 1);
    updateStorage();
    selectedList = allLists[0].id;
    updateSelectedList();
    listDisplay.renderMyLists(allLists);
    todosDisplay.renderTodos(getTodos());
    listDisplay.changeListTitle(getListName());
  }

  function updateSelectedList() {
    localStorage.setItem("selectedList.ID", selectedList);
  }

  function toggleSelectedList(id) {
    selectedList = id;
    updateSelectedList();
    listDisplay.changeListTitle(getListName());
    todosDisplay.renderTodos(getTodos());
  }


  //

  function getListIndex() {
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == getSelectedList()) {
        return i;
      }
    }
  }

  function getAllLists() {
    return JSON.parse(localStorage.getItem("allLists"));
  }

  function getSelectedList() {
    return localStorage.getItem("selectedList.ID");
  }

  function getListName() {
    allLists = getAllLists();
    selectedList = getSelectedList();
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == selectedList) {
        return allLists[i].name;
      }
    }

  }
 
  function getTodos() {
    selectedList = getSelectedList();
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == selectedList) {
        return allLists[i].todos;
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
    getTodos,
    getListName,
    getSelectedList,
    toggleSelectedList
  };
})();



export { updateStorage };

