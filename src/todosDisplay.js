import { updateStorage } from "./updateStorage.js";

const todosDisplay = (function () {
  const todoContainer = document.querySelector("#todo-container");
  const todoItemTemplate = document.querySelector("#todoItem-template");

  //todo form
  const addTodoForm = document.querySelector("#addTodo-form");
  addTodoForm.addEventListener("submit", addTodoHandler);
  const addTodoInput = document.querySelector("#addTodo-input");

  function renderTodos(selectedlistTodos) {
    todoContainer.innerHTML = "";
    if (selectedlistTodos == []) {
      return;
    }

    selectedlistTodos.forEach((todo, index) => {
      const todoElement = document.importNode(todoItemTemplate.content, true);

      //todoItem div
      const todoDivElement = todoElement.querySelector(".todo-item");
      todoDivElement.id = index;

      //checkbox
      const todoCheckbox = todoElement.querySelector(".todo-checkbox");
      todoCheckbox.checked = todo.checked;
      todoCheckbox.addEventListener("click", editCheckedHandler);

      //input
      const todoText = todoElement.querySelector(".todo-text");
      todoText.value = todo.info;
      todoText.addEventListener("change", editTodoHandler);

      //add description button
      const addDescBtn = todoElement.querySelector(".addDescBtn");
      addDescBtn.addEventListener("click", editDescriptionHandler);

      todoContainer.appendChild(todoDivElement);
    });

    addTodoInput.value = null;
  }

  function addTodoHandler(e) {
    e.preventDefault();
    if (addTodoInput.value == "" || null) {
      return;
    }
    updateStorage.addTodo(addTodoInput.value);
  }

  function editTodoHandler(e) {
    e.preventDefault();
    let newInfo = e.target.value;
    let todoID = e.target.parentNode.id;
    updateStorage.editTodo(newInfo, todoID);
  }

  function editCheckedHandler(e) {
    let newCheckedState = e.target.checked;
    let todoID = e.target.parentNode.id;
    updateStorage.editChecked(newCheckedState, todoID);
  }

  const descriptionTemplate = document.querySelector("#descriptionTemplate");
  function editDescriptionHandler(e) {
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

