
import {listDisplay} from './listDisplay.js';
import {todosDisplay} from './todosDisplay.js';

(function() {

  listDisplay.renderMyLists();

  const firstList = document.getElementById(localStorage.getItem('selectedList.ID'));
  firstList.classList.add('listFocus');

  todosDisplay.renderTodos();

  
})();











