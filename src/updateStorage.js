import {allLists, createList, createTodoItem} from './storage.js';
import {selectedList} from './DOMrendering';



function addList(value) {
  const newList = createList(value);
  allLists.push(newList);
  updateStorage();
}

function addTodo(value) {
  const newTodo = createTodoItem(value, false);
  let index = getListIndex();
  allLists[index].todos.push(newTodo);
  updateStorage();
}


function updateStorage() {
  localStorage.setItem('allLists', JSON.stringify(allLists))
}



function editTodo(info, ID) {
  let i = getListIndex();
  allLists[i].todos[ID].info = info;
  updateStorage();
}


function editChecked(checkedState, ID) {
  let i = getListIndex();
  allLists[i].todos[ID].checked = checkedState;
  updateStorage();
}


function updateCompleted() {
  let i = getListIndex();
  let todos = allLists[i].todos;
  todos.forEach((todo, index) => {
    if (todo.checked == true){
      allLists[i].todos.splice(index, 1);
    }
  })
  updateStorage();
}

function getListIndex() {
  for (let i=0; i<allLists.length; i++) {
    if (allLists[i].id == selectedList){
      return i;
    }
  }
}







export {addList, addTodo, selectedList, editTodo, editChecked, updateCompleted};