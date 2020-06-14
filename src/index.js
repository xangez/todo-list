
import {listDisplay, todosDisplay, selectedList} from './DOMrendering.js';

(function() {

  listDisplay.renderMyLists();

  const firstList = document.getElementById(selectedList);
  firstList.classList.add('listFocus');

  todosDisplay.renderTodos();

  
})();











