import {allLists, createList, createTodoItem} from './storage.js';
import {selectedList} from './DOMrendering';



function addList(value) {
  const newList = createList(value);
  allLists.push(newList);
  updateStorage();
}

function addTodo(value) {
  const newTodo = createTodoItem(value, false);
  let index = getList();
  allLists[index].todos.push(newTodo);
  updateStorage();
}


function updateStorage() {
  localStorage.setItem('allLists', JSON.stringify(allLists))
}



function editTodo(info, ID) {
  let index = getList();
  allLists[index].todos[ID].info = info;
  updateStorage();
}


function editChecked(checkedState, ID) {
  let index = getList();
  allLists[index].todos[ID].checked = checkedState;
  updateStorage();
}

function getList() {
  for (let i=0; i<allLists.length; i++) {
    if (allLists[i].id == selectedList){
      return i;
    }
  }
}







export {addList, addTodo, selectedList, editTodo, editChecked};