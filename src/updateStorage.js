import {allLists, createList, createTodoItem} from './storage.js';
import {selectedList} from './DOMrendering';



function addList(value) {
  const newList = createList(value);
  allLists.push(newList);
  updateStorage();
}

function addTodo(value) {
  const newTodo = createTodoItem(value);
  for (let i=0; i<allLists.length; i++) {
    if (allLists[i].id == selectedList){
      allLists[i].todos.push(newTodo);
      updateStorage();
    }
  }
}

// function editTodo(info, ID) {
//   for (let i=0; i<allLists.length; i++) {
//     if (allLists[i].id == selectedList){
//       allLists[i].todos[ID] = info;
//     }
//   }

// }

function updateStorage() {
  localStorage.setItem('allLists', JSON.stringify(allLists))
}

export {addList, addTodo, selectedList};