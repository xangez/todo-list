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
      todoDivElement.id = index.toString();

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


 function editDescriptionHandler(e) {
    let selectedTodoItem = e.target.parentNode.parentNode;
    const selectedTodoDesc = selectedTodoItem.querySelector(".descriptionContainer");
    if (selectedTodoDesc.style.display !== "grid") {
      selectedTodoDesc.style.display = "grid";
      document.addEventListener('click', outsideClickListener);
    } else {
     selectedTodoDesc.style.display = "none";

    }

      let element = selectedTodoItem;
      function outsideClickListener(event){
          if (!element.contains(event.target) && isVisible(selectedTodoDesc)) { 
            selectedTodoDesc.style.display = 'none';
            removeClickListener();
          }
      }
  
      const removeClickListener = () => {
          document.removeEventListener('click', outsideClickListener);
      }
  
      const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  }

    // function getDescriptionValues() {
    //   console.log('hi');
    //   // let description = selectedTodoDesc.querySelector(".descriptionInput").value;
    //   // let date = selectedTodoDesc.querySelector(".descriptionDate").value;
    //   // let priority = selectedTodoDesc.querySelector("select").value; 
    //   // updateStorage.editDescription(description, date, priority);
    // }
  



  return {
    renderTodos,
  };
})();

export { todosDisplay };

