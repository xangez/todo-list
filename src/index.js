
import {renderMyLists, renderTodos, selectedList} from './DOMrendering';

(function() {
  renderMyLists();
  const firstList = document.getElementById(selectedList);
  firstList.classList.add('listFocus');
  renderTodos();


  
})();











