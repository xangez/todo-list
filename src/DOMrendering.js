import {allLists} from './storage.js';
import {addList, addTodo, editTodo} from './updateStorage.js'

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

  return {
    renderTodos,
  }
  
})();

// const editTodoDisplay = (function() {
//   const todoContainer = document.querySelector('#todo-container');
//   todoContainer.addEventListener('submit', editTodoAndRender);
  
    
//   function editTodoAndRender(e){
//     if (e.target.classList.contains('todo-text')){
//       e.preventDefault();
//       let newInfo = e.target.value;
//       let todoID = e.target.parentNode.id;
//       editTodo(newInfo, todoID);
//     }
//     todoDisplay.renderTodos();
//   }

// })();

const editTodoDisplay = (function() {
  const todoItems = document.querySelectorAll('.something');
  console.log(todoItems);
  todoItems.forEach(todo => todo.addEventListener('submit', editTodoAndRender));
  
    
  function editTodoAndRender(e){
    e.preventDefault();
      console.log(e.target.childNodes);
    //   let newInfo = formElements[1].value;
    //   let todoID = e.target.id;
    //   editTodo(newInfo, todoID);
    
    // todoDisplay.renderTodos();
  }

})();

export {listDisplay, todosDisplay, selectedList, editTodoDisplay};