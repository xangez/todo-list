import {allLists, createList, createTodoItem} from './storage.js';
import {selectedList} from './DOMrendering';



function addList(value) {
  const newList = createList(value);
  allLists.push(newList);
}

function addTodo(value) {
  const newTodo = createTodoItem(value);
  for (let i=0; i<allLists.length; i++) {
    if (allLists[i].id == selectedList){
      allLists[i].todos.push(newTodo);
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

export {addList, addTodo, selectedList};