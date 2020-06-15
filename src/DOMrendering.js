import {allLists} from './storage.js';
import {addList, addTodo, editTodo, editChecked} from './updateStorage.js'

let selectedList = allLists[0].id;


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




const todosDisplay = (function() {

  const todoContainer = document.querySelector('#todo-container');  
  const todoItemTemplate = document.querySelector('#todoItem-template');
  
  //todo form
  const addTodoForm = document.querySelector('#addTodo-form');
  addTodoForm.addEventListener('submit', addTodoAndRender)
  const addTodoInput = document.querySelector('#addTodo-input');

  function addTodoAndRender(e) {
    e.preventDefault();
    if (addTodoInput.value == '' || null){
      return;
    }
    addTodo(addTodoInput.value);
    renderTodos();
  }
  
  
  function renderTodos() {
    todoContainer.innerHTML = '';
    let selectedlistTodos = getTodos();
  
    selectedlistTodos.forEach((todo, index) => {
      const todoElement = document.importNode(todoItemTemplate.content, true);
  
      const todoFormElement = todoElement.querySelector('.todo-item');
      todoFormElement.id = index;

      const todoCheckbox = todoElement.querySelector('.todo-checkbox');
      todoCheckbox.checked = todo.checked;
      todoCheckbox.addEventListener('click', editCheckedController)
  
      const todoText = todoElement.querySelector('.todo-text');
      todoText.value = todo.info;

      todoText.addEventListener('change', editTodoController);
  
      todoContainer.appendChild(todoElement);
    });
  
    addTodoInput.value = null;
  }
  
  
  function getTodos() {
    for (let i=0; i<allLists.length; i++) {
      if (allLists[i].id == selectedList) {
         return allLists[i].todos;
      }
    }
  }
    

  function editTodoController(e){
    e.preventDefault();
      let newInfo = e.target.value;
      let todoID = e.target.parentNode.id;
      editTodo(newInfo, todoID);
  }

  function editCheckedController(e) {
    let newCheckedState = e.target.checked;
    let todoID = e.target.parentNode.id;
    editChecked(newCheckedState, todoID);
  }


  return {
    renderTodos,
  }
  
})();

const dropDownMenuController = (function() {
  const dropDownBtn = document.querySelector('#dropDownBtn');
  dropDownBtn.addEventListener('click', toggleMenu);


  const dropDownMenu = document.querySelector('#dropDownMenu');

  let menuDisplay = 'none';
  function toggleMenu() {
    if (menuDisplay == 'none'){
      dropDownMenu.style.display = 'grid';
      menuDisplay = 'grid';
    }
    else {
      dropDownMenu.style.display = 'none';
      menuDisplay = 'none';
    }
  }



})();



export {listDisplay, todosDisplay, selectedList};