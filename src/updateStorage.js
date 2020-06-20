import { listDisplay } from "./listDisplay.js";
import { todosDisplay } from "./todosDisplay.js";

const updateStorage = (function () {

  let allLists;
  let selectedList;

  //factory functions 
  function createList(name) {
    return { name: name, id: Date.now(), todos: [] };
  }

  function createTodoItem(info, checked, description, date, priority) {
    return { info: info, checked: checked, description: description, date: date, priority: priority};
  }

  //change
  function addList(value) {
    const newList = createList(value);
    allLists.push(newList);
    saveList();
    listDisplay.renderMyLists(allLists);
    listDisplay.refocusList(selectedList);
  }

  function addTodo(value) {
    const newTodo = createTodoItem(value, false, '', '', '');
    let i = getListIndex();

    allLists[i].todos.push(newTodo);
    saveList();
    todosDisplay.renderTodos(getTodos());
  }

  function editTodo(info, ID) {
    let i = getListIndex();
    allLists[i].todos[Number(ID)].info = info;
    saveList();
  }

  function editChecked(checkedState, ID) {
    let i = getListIndex();
    allLists[i].todos[Number(ID)].checked = checkedState;
    saveList();
  }

  function editDescription(ID, description, date, priority) {
    let i = getListIndex();
    let selectedTodo = allLists[i].todos[Number(ID)];
    selectedTodo.description = description;
    selectedTodo.date = date;
    selectedTodo.priority = priority;
    allLists[i].todos[Number(ID)] = selectedTodo;
    saveList();
  }

  function updateCompleted() {
    let i = getListIndex();
    let todos = allLists[i].todos;
    let remove = [];
    todos.forEach((todo) => {
      if (todo.checked == true) {
        remove.push(todo);
      }
    });
    let remaining = allLists[i].todos.filter(value => !remove.includes(value));
    allLists[i].todos = remaining;
    saveList();
    todosDisplay.renderTodos(getTodos());
  }


  function deleteList() {
    let i = getListIndex();
    allLists.splice(i, 1);
    saveList();
    selectedList = allLists[0].id;
    saveSelectedList();
    listDisplay.renderMyLists(allLists);
    listDisplay.refocusList(selectedList);
    todosDisplay.renderTodos(getTodos());
    listDisplay.changeListTitle(getListName());
  }

  function toggleSelectedList(id) {
    selectedList = id;
    saveSelectedList();
    listDisplay.refocusList(selectedList);
    listDisplay.changeListTitle(getListName());
    todosDisplay.renderTodos(getTodos());
  }


  //update storage
  function saveList() {
    localStorage.setItem("allLists", JSON.stringify(allLists));
  }

  function saveSelectedList() {
    localStorage.setItem("selectedList.ID", selectedList);
  }

  //get 
  function getAllLists() {
    allLists = JSON.parse(localStorage.getItem("allLists"));
  }

  function getSelectedList() {
    selectedList = localStorage.getItem("selectedList.ID");
  }

  function getListIndex() {
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == selectedList) {
        return i;
      }
    }
  }

  function getListName() {
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == selectedList) {
        return allLists[i].name;
      }
    }
  }
 
  function getTodos() {
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == selectedList) {
        return allLists[i].todos;
      }
    }
  }

  function onload() {
    getAllLists();
    getSelectedList();
    listDisplay.renderMyLists(allLists);
    listDisplay.refocusList(selectedList);
    listDisplay.changeListTitle(getListName());
    todosDisplay.renderTodos(getTodos());
  
  }



  return {
    addList,
    addTodo,
    editTodo,
    editChecked,
    editDescription,
    updateCompleted,
    deleteList,
    toggleSelectedList,
    onload,
  };
})();



export { updateStorage };

