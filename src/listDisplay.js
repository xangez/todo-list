import { updateStorage } from "./updateStorage.js";
import { todosDisplay } from "./todosDisplay.js";
import { storage } from './storage.js'

const listDisplay = (function () {
  const listContainer = document.querySelector("#list-container");
  listContainer.addEventListener("click", toggleLists);

  const addListForm = document.querySelector("#addList-form");
  addListForm.addEventListener("submit", addListController);

  const addListInput = document.querySelector("#addList-input");

  const openListName = document.querySelector(".openList-name");

  function addListController(e) {
    e.preventDefault();
    if (addListInput.value == "" || null) {
      return;
    }
    updateStorage.addList(addListInput.value);
    renderMyLists();
  }

  function renderMyLists() {
    listContainer.innerHTML = "";

    let allLists = storage.getAllLists();
    allLists.forEach((list) => {
      const listItem = document.createElement("div");
      listItem.classList = "list";
      listItem.id = list.id;
      listItem.textContent = list.name;
      listContainer.appendChild(listItem);
    });

    addListInput.value = null;

    refocusPreviousList();
  }

  function refocusPreviousList() {
    const previousSelectedList = document.getElementById(storage.getSelectedList());
    previousSelectedList.classList.add("listFocus");
  }

  function toggleLists(e) {
    const listItems = document.querySelectorAll(".list");
    listItems.forEach((list) => {
      list.classList.remove("listFocus");
    });

    localStorage.setItem("selectedList.ID", e.target.id);

    if (e.target.classList == "list") {
      e.target.classList.add("listFocus");
    }


    changeListTitleDisplay(e.target.textContent);
    todosDisplay.renderTodos();
  }

  function changeListTitleDisplay(name) {
    openListName.textContent = name;
  }

  return {
    renderMyLists,
    changeListTitleDisplay,
    refocusPreviousList,
  };
})();

export { listDisplay };

