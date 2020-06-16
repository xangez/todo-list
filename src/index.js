
import {listDisplay} from './listDisplay.js';
import {todosDisplay} from './todosDisplay.js';


(function() {

  listDisplay.renderMyLists();

  const firstList = document.getElementById(selectedList);
  firstList.classList.add('listFocus');

  todosDisplay.renderTodos();

  
})();











