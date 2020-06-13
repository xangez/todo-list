import {allLists} from './factories.js';
import {createList} from './factories';

import {renderMyLists, removeListContainer} from './DOMrendering';

//adding listform
const addListForm = document.querySelector('#addList-form');
const addListInput = document.querySelector('#addList-input');
addListForm.addEventListener('submit', addList);

//todo form
// const addTodoForm = document.querySelector('#addTodo-form');
// addTodoForm.addEventListener('submit', addTodo);


function addList(e) {
  e.preventDefault();
  let listname = addListInput.value;
  const newList = createList(listname);
  allLists.push(newList);

  removeListContainer();
  renderMyLists();
}

export {addList};
//todo items
// function addTodo(e) {
//   e.preventDefault();
//   let todoInfo = addTodoInput.value;
//   const newTodo = createTodoItem(todoInfo);
// }
