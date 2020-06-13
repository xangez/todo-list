import {allLists} from './factories';
import {addList} from './formControllers';

const toggleListsContainer = document.querySelector('#togglelists-container');

//adding listform
const addListInput = document.querySelector('#addList-input');
const addListForm = document.querySelector('#addList-form');
addListForm.addEventListener('submit', addList);

//currently openlist
const openListName = document.querySelector('.openList-name');
const openListContainer = document.querySelector('.openList-container');
const todoItemTemplate = document.querySelector('#todoItem-template');

//todo form
const addTodoForm = document.querySelector('#addTodo-form');
const addTodoInput = document.querySelector('#addTodo-input');

let selectedList = allLists[0].id;


//lists
function renderMyLists() {

  const listContainer = document.createElement('div');
  listContainer.id = 'list-container';
  

  allLists.forEach(list => {
    const listItem = document.createElement('div');
    listItem.classList = 'list';
    listItem.id = list.id;
    listItem.textContent = list.name;
    listContainer.appendChild(listItem);
  })

  toggleListsContainer.insertBefore(listContainer, addListForm);
  addListInput.value = null;
  listContainer.addEventListener('click', toggleLists);

  //refocus previous selected list
  const previousSelectedList = document.getElementById(selectedList);
  previousSelectedList.classList.add('listFocus');

}

function removeListContainer() {
  const listContainer = document.querySelector('#list-container');
  listContainer.remove();
}

//todos

function renderTodos() {

  removeTodoContainer();

  let selectedlistTodos = getTodos();

  const todoContainer = document.createElement('div');
  todoContainer.id = 'todo-container';


  selectedlistTodos.forEach(todo => {
    const todoElement = document.importNode(todoItemTemplate.content, true);
    const todoText = todoElement.querySelector('#todo-text');
    todoText.value = todo.info;
    todoContainer.appendChild(todoElement);
  });

  openListContainer.insertBefore(todoContainer, addTodoForm);
  addTodoInput.value = null;
  
}


function removeTodoContainer() {
  const todoContainer = document.querySelector('#todo-container');
  todoContainer.remove();
}


function getTodos() {
  for (let i=0; i<allLists.length; i++) {
    if (allLists[i].id == selectedList) {
       return allLists[i].todos;
    }
  }
}

//toggling

function toggleLists(e) {
  const listItems = document.querySelectorAll('.list');
  listItems.forEach(list => {
    list.classList.remove('listFocus');
  })

  selectedList = e.target.id;


  if (e.target.classList == 'list') {
    e.target.classList.add('listFocus');
  }

  openListName.textContent = e.target.textContent;
  renderTodos();
}

export {renderMyLists, renderTodos, selectedList, removeListContainer};