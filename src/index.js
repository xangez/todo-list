// import home from './home';
// import menu from './menu';
// import contacts from './contacts';

(function(){

  const mainContainer = document.querySelector('main-container');

  //mylists
  const toggleListsContainer = document.querySelector('#togglelists-container');
  const listContainerTemplate = document.querySelector('#listContainer-template');


  //todo form
  const addTodoForm = document.querySelector('.addTodo-form');
  addTodoForm.addEventListener('submit', addTodo);

  //openlist
  const openListName = document.querySelector('.openList-name');
  const openListContainer = document.querySelector('openList-container');

  function addTodo(e) {
    e.preventDefault();
    openListName.textContent = 'hi';
  }

  

  function createList(name) {
    return {name: name, tasks:[]}
  } 

  function createTodoItem(info) {
    return {info: info};
  }

  

  function renderOpenList() {
    mainContainer.lastChild.remove();
    const openListTemplate = document.querySelector('openList-template');



  }



})();

