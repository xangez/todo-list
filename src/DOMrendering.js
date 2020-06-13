import {allLists} from './factories';
import {addList, addTodo, editTodo} from './formControllers'

const listContainer = document.querySelector('#list-container');
listContainer.addEventListener('click', toggleLists);

//adding listform
const addListForm = document.querySelector('#addList-form');
addListForm.addEventListener('submit', addListAndRender);

const addListInput = document.querySelector('#addList-input');

//currently openlist
const todoContainer = document.querySelector('#todo-container');
//todoContainer.addEventListener('submit', editTodoAndRender);

const openListName = document.querySelector('.openList-name');
const todoItemTemplate = document.querySelector('#todoItem-template');

//todo form
const addTodoForm = document.querySelector('#addTodo-form');
addTodoForm.addEventListener('submit', addTodoAndRender)
const addTodoInput = document.querySelector('#addTodo-input');


let selectedList = allLists[0].id;

function addListAndRender(e) {
  e.preventDefault();
  addList(addListInput.value);
  renderMyLists();
}



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

function addTodoAndRender(e) {
  e.preventDefault();
  addTodo(addTodoInput.value);
  renderTodos();
}

// function editTodoAndRender(e){
//   e.preventDefault();
//   if (e.target.classList == 'todo-item'){
//     let newInfo = e.target.value;
//     let todoID = e.target.id;
//     editTodo(newInfo, todoID);
//   }
//   renderTodos();
// }


function renderTodos() {
  todoContainer.innerHTML = '';
  let selectedlistTodos = getTodos();

  selectedlistTodos.forEach((todo, index) => {
    const todoElement = document.importNode(todoItemTemplate.content, true);

    const todoFormElement = todoElement.querySelector('.todo-item');
    todoFormElement.id = index;

    const todoText = todoElement.querySelector('.todo-text');
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