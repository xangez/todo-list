import {updateStorage} from './updateStorage.js'




const todosDisplay = (function() {

  let allLists;
  function getAllLists() {
    allLists = JSON.parse(localStorage.getItem("allLists"));
  }


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
    updateStorage.addTodo(addTodoInput.value);
    renderTodos();
  }
  
  
  function renderTodos() {
    todoContainer.innerHTML = '';
    let selectedlistTodos = getTodos();
    if (selectedlistTodos == []) {
      return;
    }
  
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
    getAllLists();
    for (let i=0; i<allLists.length; i++) {
      if (allLists[i].id == localStorage.getItem('selectedList.ID')) {
         return allLists[i].todos;
      }
    }
  }
    

  function editTodoController(e){
    e.preventDefault();
      let newInfo = e.target.value;
      let todoID = e.target.parentNode.id;
      updateStorage.editTodo(newInfo, todoID);
  }

  function editCheckedController(e) {
    let newCheckedState = e.target.checked;
    let todoID = e.target.parentNode.id;
    updateStorage.editChecked(newCheckedState, todoID);
  }


  return {
    renderTodos,
  }
  
})();

export {todosDisplay}