import {allLists} from './factories';
import {addList} from './formControllers'

const listContainer = document.querySelector('#list-container');
listContainer.addEventListener('click', toggleLists);

//adding listform
const addListForm = document.querySelector('#addList-form');
addListForm.addEventListener('submit', addList);

const addListInput = document.querySelector('#addList-input');

//currently openlist
const todoContainer = document.querySelector('#todo-container');

const openListName = document.querySelector('.openList-name');
const todoItemTemplate = document.querySelector('#todoItem-template');

//todo form
const addTodoForm = document.querySelector('#addTodo-form');
const addTodoInput = document.querySelector('#addTodo-input');


let selectedList = allLists[0].id;


//lists
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



//todos

function renderTodos() {
  todoContainer.innerHTML = '';
  let selectedlistTodos = getTodos();

  selectedlistTodos.forEach(todo => {
    const todoElement = document.importNode(todoItemTemplate.content, true);
    const todoText = todoElement.querySelector('#todo-text');
    todoText.value = todo.info;
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



//toggling

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
  renderTodos();
}




export {renderMyLists, renderTodos, selectedList};