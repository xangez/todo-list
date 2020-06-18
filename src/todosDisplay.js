import { updateStorage } from "./updateStorage.js";

const todosDisplay = (function () {
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
  }

  function renderTodos(selectedlistTodos) {
    todoContainer.innerHTML = "";
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

      const addDescBtn = todoElement.querySelector(".addDescBtn");
      addDescBtn.addEventListener("click", editDescription);

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

  const descriptionTemplate = document.querySelector("#descriptionTemplate");
  function editDescription(e) {
    const descriptionElement = document.importNode(descriptionTemplate.content, true);
    const descriptionInput = descriptionElement.querySelector(".descriptionInput");
    const descriptionDate = descriptionElement.querySelector(".descriptionDate");
    e.target.parentNode.appendChild(descriptionInput);
    e.target.parentNode.appendChild(descriptionDate);

  }

  return {
    renderTodos,
  };
})();

export { todosDisplay };

