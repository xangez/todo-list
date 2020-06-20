import { updateStorage } from "./updateStorage.js";

const dropDownMenu = (function () {
  const dropDownBtn = document.querySelector("#dropDownBtn");
  dropDownBtn.addEventListener("click", toggleMenu);
  const menuOptions = document.querySelectorAll(".menuOption");

  const dropDownMenu = document.querySelector("#dropDownMenu");

  let currentState = 1;
  let open = false;

  function toggleMenu() {
    if (open == false) {
      dropDownMenu.style.display = "grid";
      open = true;
      document.addEventListener('mousedown', outsideClickListener);

      toggleDisabled("reEnable");
      refreshOptions();
      addMenuOptionEvents();
    } else {
      dropDownMenu.style.display = "none";
      open = false;
    }
  }

  function outsideClickListener(event){
    let element = dropDownMenu;
    const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

    const removeClickListener = () => {
      document.removeEventListener('click', outsideClickListener);
    }

    if (!element.contains(event.target) && (event.target !== dropDownBtn) && isVisible(element)) { 
      element.style.display = 'none';
      removeClickListener();
      open = false;
    }

 
  }



  function refreshOptions() {
    currentState = 1;
    menuOptions[0].textContent = "Clear Completed";
    menuOptions[1].textContent = "Rename List";
    menuOptions[2].textContent = "Delete List";
  }

  function addMenuOptionEvents() {
    menuOptions[0].addEventListener("click", clearCompletedControl);
    menuOptions[1].addEventListener("click", renameList);
    menuOptions[2].addEventListener("click", deleteList);
  }

  function clearCompletedControl() {
    if (currentState == 1) {
      menuOptions[0].textContent = "Confirm Clear?";
      menuOptions[0].style.backgroundColor = "var(--blue)";
      toggleDisabled(0);
      currentState = 2;
    } else {
      toggleMenu();
      updateStorage.updateCompleted();
    }
  }

  function renameList() {
    menuOptions[1].textContent = "Confirm?";
    menuOptions[1].style.backgroundColor = "var(--blue)";
    toggleDisabled(1);
  }

  function deleteList() {
    if (currentState == 1) {
      menuOptions[2].textContent = "Confirm Delete?";
      menuOptions[2].style.backgroundColor = "var(--blue)";
      toggleDisabled(2);
      currentState = 2;
    } else {
      toggleMenu();
      updateStorage.deleteList();
    }
  }

  function toggleDisabled(selectedOption) {
    if (selectedOption == "reEnable") {
      menuOptions.forEach((option) => {
        option.disabled = false;
        option.style.backgroundColor = "var(--black)";
        option.classList.remove("noHover");
      });
    } else {
      menuOptions.forEach((option, index) => {
        if (selectedOption !== index) {
          option.disabled = true;
          option.classList.add("noHover");
        }
      });
    }
  }
})();

export { dropDownMenu };

