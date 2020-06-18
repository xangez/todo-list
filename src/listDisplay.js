import { updateStorage } from "./updateStorage.js";


const listDisplay = (function () {
  const listContainer = document.querySelector("#list-container");
  listContainer.addEventListener("click", toggleLists);

  const addListForm = document.querySelector("#addList-form");
  addListForm.addEventListener("submit", addListController);

  const addListInput = document.querySelector("#addList-input");

  const listTitle = document.querySelector("#listTitle");

  function addListController(e) {
    e.preventDefault();
    if (addListInput.value == "" || null) {
      return;
    }
    updateStorage.addList(addListInput.value);
    addListInput.value = null;
  }

  function renderMyLists(allLists) {
    listContainer.innerHTML = "";

    allLists.forEach((list) => {
      const listItem = document.createElement("div");
      listItem.classList = "list";
      listItem.id = list.id;
      listItem.textContent = list.name;
      listContainer.appendChild(listItem);
    });

    refocusPreviousList();
  }

  function refocusPreviousList() {
    const previousSelectedList = document.getElementById(updateStorage.getSelectedList());
    previousSelectedList.classList.add("listFocus");
  }

  function toggleLists(e) {
    const listItems = document.querySelectorAll(".list");
    listItems.forEach((list) => {
      list.classList.remove("listFocus");
    });

    if (e.target.classList == "list") {
      e.target.classList.add("listFocus");
    }

    updateStorage.toggleSelectedList(e.target.id);
  }

  function changeListTitle(name) {
    listTitle.textContent = name;
  }

  return {
    renderMyLists,
    changeListTitle,
    refocusPreviousList,
  };
})();

export { listDisplay };

