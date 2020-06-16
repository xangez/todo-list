import {updateStorage} from './updateStorage.js'



const dropDownMenu = (function() {
  const dropDownBtn = document.querySelector('#dropDownBtn');
  dropDownBtn.addEventListener('click', toggleMenu);
  const menuOptions = document.querySelectorAll('.menuOption');


  const dropDownMenu = document.querySelector('#dropDownMenu');

  let menuDisplay = 'none';
  let currentState = 1;


  function toggleMenu() {
    if (menuDisplay == 'none'){
      dropDownMenu.style.display = 'grid';
      menuDisplay = 'grid';

      toggleDisabled('reEnable')
      refreshOptions();
      addMenuOptionEvents();
    }
    else {

      dropDownMenu.style.display = 'none';
      menuDisplay = 'none';
    }
  }

  function refreshOptions() {
    currentState = 1;
    menuOptions[0].textContent = 'Clear Completed';
    menuOptions[1].textContent = 'Rename List';
    menuOptions[2].textContent = 'Delete List';

  }

  function addMenuOptionEvents() {

    menuOptions[0].addEventListener('click', clearCompletedControl);
    menuOptions[1].addEventListener('click', renameList);
    menuOptions[2].addEventListener('click', deleteList);
  }

  function clearCompletedControl() {
    if (currentState == 1){
      menuOptions[0].textContent = 'Confirm?'
      menuOptions[0].style.backgroundColor = 'var(--blue)'
      toggleDisabled(0);
      currentState = 2;
    }
    else {
      toggleMenu();
      updateCompleted();
      todosDisplay.renderTodos();
    }
  }

  function renameList() {
    menuOptions[1].textContent = 'Confirm?'
  }

  function deleteList() {
    menuOptions[2].textContent = 'Confirm?'
  }


  function toggleDisabled(selectedOption) {
    if (selectedOption == 'reEnable') {
      menuOptions.forEach(option => {
        option.disabled = false;
        option.style.backgroundColor = 'transparent';
       });
    }
    else {
      menuOptions.forEach((option, index) => {
        if (selectedOption !== index) {
          option.disabled = true;
        }
      });
    }

  }


})();
