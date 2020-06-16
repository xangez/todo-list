import {updateStorage} from './updateStorage.js'
import {todosDisplay} from './todosDisplay.js'


const listDisplay = (function() {

  
  let allLists;
  function getAllLists() {
    allLists = JSON.parse(localStorage.getItem("allLists"));
  }

  const listContainer = document.querySelector('#list-container');
  listContainer.addEventListener('click', toggleLists);
  
  const addListForm = document.querySelector('#addList-form');
  addListForm.addEventListener('submit', addListController);
  
  const addListInput = document.querySelector('#addList-input');

  const openListName = document.querySelector('.openList-name');


  function addListController(e) {
    e.preventDefault();
    if (addListInput.value == '' || null){
      return;
    }
    updateStorage.addList(addListInput.value);
    renderMyLists();
  }

  function renderMyLists() {
    listContainer.innerHTML = '';  
  
    getAllLists();
    allLists.forEach(list => {
      const listItem = document.createElement('div');
      listItem.classList = 'list';
      listItem.id = list.id;
      listItem.textContent = list.name;
      listContainer.appendChild(listItem);
    })
  
    addListInput.value = null;
  
    //refocus previous selected list
    const previousSelectedList = document.getElementById(localStorage.getItem("selectedList.ID"));
    previousSelectedList.classList.add('listFocus');
  
  }


  function toggleLists(e) {
    const listItems = document.querySelectorAll('.list');
    listItems.forEach(list => {
      list.classList.remove('listFocus');
    });
  
    localStorage.setItem("selectedList.ID", e.target.id);

  
  
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