import { updateStorage } from "./updateStorage.js";
import { storage } from "./storage.js";

const todosDisplay = (function() {
  const todoContainer = document.querySelector("#todo-container");
  const todoItemTemplate = document.querySelector("#todoItem-template");

  //todo form
  const addTodoForm = document.querySelector("#addTodo-form");
  addTodoForm.addEventListener("submit", addTodoAndRender);
  const addTodoInput = document.querySelector("#addTodo-input");

  function addTodoAndRender(e) {
    e.preventDefault();
    if (addTodoInput.value == "" || null) {
      return;
    }
    updateStorage.addTodo(addTodoInput.value);
    renderTodos();
  }

  function renderTodos() {
    todoContainer.innerHTML = "";
    let selectedlistTodos = storage.getTodos();
    if (selectedlistTodos == []) {
      return;
    }

    selectedlistTodos.forEach((todo, index) => {
      const todoElement = document.importNode(todoItemTemplate.content, true);

      const todoFormElement = todoElement.querySelector(".todo-item");
      todoFormElement.id = index;

      const todoCheckbox = todoElement.querySelector(".todo-checkbox");
      todoCheckbox.checked = todo.checked;
      todoCheckbox.addEventListener("click", editCheckedController);

      const todoText = todoElement.querySelector(".todo-text");
      todoText.value = todo.info;

      todoText.addEventListener("change", editTodoController);

      todoContainer.appendChild(todoElement);
    });

    addTodoInput.value = null;
  }

  function editTodoController(e) {
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
  };
})();

export { todosDisplay };

