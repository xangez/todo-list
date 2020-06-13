import {allLists, createList} from './factories.js';
import {selectedList} from './DOMrendering';

function addList(value) {
  const newList = createList(value);
  allLists.push(newList);
}

function addTodo(value) {
  const newTodo = createTodoItem(value);
  for (i=0; i<allLists.length; i++) {
    if (allLists[i].id == selectedList){
      allLists[i].todos.push(newTodo);
    }
  }
}

export {addList, addTodo};