import {allLists, createList} from './factories.js';

import {renderMyLists} from './DOMrendering';


const addListInput = document.querySelector('#addList-input');


function addList(e) {
  e.preventDefault();
  let listname = addListInput.value;
  const newList = createList(listname);
  allLists.push(newList);

  renderMyLists();
}



// function addTodo(e) {
//   e.preventDefault();
//   let todoInfo = addTodoInput.value;
//   const newTodo = createTodoItem(todoInfo);
// }

export {addList};