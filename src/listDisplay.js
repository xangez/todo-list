import {allLists} from './storage.js';
import {updateStorage} from './updateStorage.js'



const listDisplay = (function() {

  const listContainer = document.querySelector('#list-container');
  listContainer.addEventListener('click', toggleLists);
  
  const addListForm = document.querySelector('#addList-form');
  addListForm.addEventListener('submit', addListAndRender);
  
  const addListInput = document.querySelector('#addList-input');

  const openListName = document.querySelector('.openList-name');


  function addListAndRender(e) {
    e.preventDefault();
    if (addListInput.value == '' || null){
      return;
    }
    addList(addListInput.value);
    renderMyLists();
  }

  function renderMyLists() {
    listContainer.innerHTML = '';  
  
    allLists.forEach(list => {
      const listItem = document.createElement('div');
      listItem.classList = 'list';
      listItem.id = list.id;
      listItem.textContent = list.name;
      listContainer.appendChild(listItem);
    })
  
    addListInput.value = null;
  
    //refocus previous selected list
    const previousSelectedList = document.getElementById(selectedList);
    previousSelectedList.classList.add('listFocus');
  
  }


  function toggleLists(e) {
    const listItems = document.querySelectorAll('.list');
    listItems.forEach(list => {
      list.classList.remove('listFocus');
    });
  
    selectedList = e.target.id;
  
  
    if (e.target.classList == 'list') {
      e.target.classList.add('listFocus');
    }
  
    openListName.textContent = e.target.textContent;
    todosDisplay.renderTodos();
  }

  return {
    renderMyLists
  }

})();



export {listDisplay};