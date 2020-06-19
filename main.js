/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dropDownMenu.js":
/*!*****************************!*\
  !*** ./src/dropDownMenu.js ***!
  \*****************************/
/*! exports provided: dropDownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropDownMenu\", function() { return dropDownMenu; });\n/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ \"./src/updateStorage.js\");\n\n\nconst dropDownMenu = (function () {\n  const dropDownBtn = document.querySelector(\"#dropDownBtn\");\n  dropDownBtn.addEventListener(\"click\", toggleMenu);\n  const menuOptions = document.querySelectorAll(\".menuOption\");\n\n  const dropDownMenu = document.querySelector(\"#dropDownMenu\");\n\n  let menuDisplay = \"none\";\n  let currentState = 1;\n\n  function toggleMenu() {\n    if (menuDisplay == \"none\") {\n      dropDownMenu.style.display = \"grid\";\n      menuDisplay = \"grid\";\n\n      toggleDisabled(\"reEnable\");\n      refreshOptions();\n      addMenuOptionEvents();\n    } else {\n      dropDownMenu.style.display = \"none\";\n      menuDisplay = \"none\";\n    }\n  }\n\n  function refreshOptions() {\n    currentState = 1;\n    menuOptions[0].textContent = \"Clear Completed\";\n    menuOptions[1].textContent = \"Rename List\";\n    menuOptions[2].textContent = \"Delete List\";\n  }\n\n  function addMenuOptionEvents() {\n    menuOptions[0].addEventListener(\"click\", clearCompletedControl);\n    menuOptions[1].addEventListener(\"click\", renameList);\n    menuOptions[2].addEventListener(\"click\", deleteList);\n  }\n\n  function clearCompletedControl() {\n    if (currentState == 1) {\n      menuOptions[0].textContent = \"Confirm Clear?\";\n      menuOptions[0].style.backgroundColor = \"var(--blue)\";\n      toggleDisabled(0);\n      currentState = 2;\n    } else {\n      toggleMenu();\n      _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].updateCompleted();\n    }\n  }\n\n  function renameList() {\n    menuOptions[1].textContent = \"Confirm?\";\n    menuOptions[1].style.backgroundColor = \"var(--blue)\";\n    toggleDisabled(1);\n  }\n\n  function deleteList() {\n    if (currentState == 1) {\n      menuOptions[2].textContent = \"Confirm Delete?\";\n      menuOptions[2].style.backgroundColor = \"var(--blue)\";\n      toggleDisabled(2);\n      currentState = 2;\n    } else {\n      toggleMenu();\n      _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].deleteList();\n    }\n  }\n\n  function toggleDisabled(selectedOption) {\n    if (selectedOption == \"reEnable\") {\n      menuOptions.forEach((option) => {\n        option.disabled = false;\n        option.style.backgroundColor = \"var(--black)\";\n        option.classList.remove(\"noHover\");\n      });\n    } else {\n      menuOptions.forEach((option, index) => {\n        if (selectedOption !== index) {\n          option.disabled = true;\n          option.classList.add(\"noHover\");\n        }\n      });\n    }\n  }\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/dropDownMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listDisplay.js */ \"./src/listDisplay.js\");\n/* harmony import */ var _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosDisplay.js */ \"./src/todosDisplay.js\");\n/* harmony import */ var _dropDownMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropDownMenu.js */ \"./src/dropDownMenu.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateStorage.js */ \"./src/updateStorage.js\");\n\n\n\n\n\n\nconst main = (function () {\n  _storage_js__WEBPACK_IMPORTED_MODULE_3__[\"storage\"].checkAllLists();\n  _storage_js__WEBPACK_IMPORTED_MODULE_3__[\"storage\"].checkSelectedList();\n  _updateStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"updateStorage\"].onload();\n  _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"];\n  _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"];\n  _dropDownMenu_js__WEBPACK_IMPORTED_MODULE_2__[\"dropDownMenu\"];\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listDisplay.js":
/*!****************************!*\
  !*** ./src/listDisplay.js ***!
  \****************************/
/*! exports provided: listDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listDisplay\", function() { return listDisplay; });\n/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ \"./src/updateStorage.js\");\n\n\n\nconst listDisplay = (function () {\n  const listContainer = document.querySelector(\"#list-container\");\n  listContainer.addEventListener(\"click\", toggleLists);\n\n  const addListForm = document.querySelector(\"#addList-form\");\n  addListForm.addEventListener(\"submit\", addListController);\n\n  const addListInput = document.querySelector(\"#addList-input\");\n\n  const listTitle = document.querySelector(\"#listTitle\");\n\n  function addListController(e) {\n    e.preventDefault();\n    if (addListInput.value == \"\" || null) {\n      return;\n    }\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].addList(addListInput.value);\n    addListInput.value = null;\n  }\n\n  function renderMyLists(allLists) {\n    listContainer.innerHTML = \"\";\n\n    allLists.forEach((list) => {\n      const listItem = document.createElement(\"div\");\n      listItem.classList = \"list\";\n      listItem.id = list.id;\n      listItem.textContent = list.name;\n      listContainer.appendChild(listItem);\n    });\n\n  }\n\n  function refocusList(selectedList) {\n    const selectedListElement = document.getElementById(selectedList);\n    selectedListElement.classList.add(\"listFocus\");\n  }\n\n  function toggleLists(e) {\n    const listItems = document.querySelectorAll(\".list\");\n    listItems.forEach((list) => {\n      list.classList.remove(\"listFocus\");\n    });\n\n    if (e.target.classList == \"list\") {\n      e.target.classList.add(\"listFocus\");\n    }\n\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].toggleSelectedList(e.target.id);\n  }\n\n  function changeListTitle(name) {\n    listTitle.textContent = name;\n  }\n\n  return {\n    renderMyLists,\n    changeListTitle,\n    refocusList,\n  };\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/listDisplay.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n\nconst storage = (function() {\n  const sampleLists = [\n    {\n      name: \"Drawing\",\n      id: \"list0\",\n      todos: [{ info: \"figure drawing\", checked: true }],\n    },\n    { name: \"Programming\", id: \"list1\", todos: [] },\n    {\n      name: \"Stuff to read\",\n      id: \"list2\",\n      todos: [\n        { info: \"mistborn\", checked: false },\n        { info: \"harry potter\", checked: false },\n        { info: \"hobbit\", checked: false },\n      ],\n    },\n  ];\n\n  function checkAllLists() {\n    if (localStorage.getItem(\"allLists\") === null) {\n      localStorage.setItem(\"allLists\", JSON.stringify(sampleLists));\n    }\n\n  }\n\n  function checkSelectedList() {\n    if (localStorage.getItem(\"selectedList.ID\") === null) {\n      localStorage.setItem(\"selectedList.ID\", sampleLists[0].id);\n    }\n  }\n\n  return {\n    checkAllLists,\n    checkSelectedList,\n  }\n\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/todosDisplay.js":
/*!*****************************!*\
  !*** ./src/todosDisplay.js ***!
  \*****************************/
/*! exports provided: todosDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todosDisplay\", function() { return todosDisplay; });\n/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ \"./src/updateStorage.js\");\n\n\nconst todosDisplay = (function () {\n  const todoContainer = document.querySelector(\"#todo-container\");\n  const todoItemTemplate = document.querySelector(\"#todoItem-template\");\n\n  //todo form\n  const addTodoForm = document.querySelector(\"#addTodo-form\");\n  addTodoForm.addEventListener(\"submit\", addTodoHandler);\n  const addTodoInput = document.querySelector(\"#addTodo-input\");\n\n  function renderTodos(selectedlistTodos) {\n    todoContainer.innerHTML = \"\";\n    if (selectedlistTodos == []) {\n      return;\n    }\n\n    selectedlistTodos.forEach((todo, index) => {\n      const todoElement = document.importNode(todoItemTemplate.content, true);\n\n      //\n      const todoDivElement = todoElement.querySelector(\".todo-item\");\n      todoDivElement.id = index;\n\n      //checkbox\n      const todoCheckbox = todoElement.querySelector(\".todo-checkbox\");\n      todoCheckbox.checked = todo.checked;\n      todoCheckbox.addEventListener(\"click\", editCheckedHandler);\n\n      //input\n      const todoText = todoElement.querySelector(\".todo-text\");\n      todoText.value = todo.info;\n      todoText.addEventListener(\"change\", editTodoHandler);\n\n      //add description button\n      const addDescBtn = todoElement.querySelector(\".addDescBtn\");\n      addDescBtn.addEventListener(\"click\", editDescriptionHandler);\n\n      todoContainer.appendChild(todoDivElement);\n    });\n\n    addTodoInput.value = null;\n  }\n\n  function addTodoHandler(e) {\n    e.preventDefault();\n    if (addTodoInput.value == \"\" || null) {\n      return;\n    }\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].addTodo(addTodoInput.value);\n  }\n\n  function editTodoHandler(e) {\n    e.preventDefault();\n    let newInfo = e.target.value;\n    let todoID = e.target.parentNode.id;\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].editTodo(newInfo, todoID);\n  }\n\n  function editCheckedHandler(e) {\n    let newCheckedState = e.target.checked;\n    let todoID = e.target.parentNode.id;\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].editChecked(newCheckedState, todoID);\n  }\n\n  const descriptionTemplate = document.querySelector(\"#descriptionTemplate\");\n  function editDescriptionHandler(e) {\n    const descriptionElement = document.importNode(descriptionTemplate.content, true);\n    const descriptionInput = descriptionElement.querySelector(\".descriptionInput\");\n    const descriptionDate = descriptionElement.querySelector(\".descriptionDate\");\n    e.target.parentNode.appendChild(descriptionInput);\n    e.target.parentNode.appendChild(descriptionDate);\n\n  }\n\n  return {\n    renderTodos,\n  };\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/todosDisplay.js?");

/***/ }),

/***/ "./src/updateStorage.js":
/*!******************************!*\
  !*** ./src/updateStorage.js ***!
  \******************************/
/*! exports provided: updateStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStorage\", function() { return updateStorage; });\n/* harmony import */ var _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listDisplay.js */ \"./src/listDisplay.js\");\n/* harmony import */ var _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosDisplay.js */ \"./src/todosDisplay.js\");\n\n\n\nconst updateStorage = (function () {\n\n  let allLists;\n  let selectedList;\n\n  //factory functions \n  function createList(name) {\n    return { name: name, id: Date.now(), todos: [] };\n  }\n\n  function createTodoItem(info, checked) {\n    return { info: info, checked: checked };\n  }\n\n  //change\n  function addList(value) {\n    const newList = createList(value);\n    allLists.push(newList);\n    saveList();\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].renderMyLists(allLists);\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].refocusList(selectedList);\n  }\n\n  function addTodo(value) {\n    const newTodo = createTodoItem(value, false);\n    let i = getListIndex();\n\n    allLists[i].todos.push(newTodo);\n    saveList();\n    _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos(getTodos());\n  }\n\n  function editTodo(info, ID) {\n    let i = getListIndex();\n    allLists[i].todos[ID].info = info;\n    saveList();\n  }\n\n  function editChecked(checkedState, ID) {\n    let i = getListIndex();\n    allLists[i].todos[ID].checked = checkedState;\n    saveList();\n  }\n\n  function updateCompleted() {\n    let i = getListIndex();\n    let todos = allLists[i].todos;\n    todos.forEach((todo, index) => {\n      if (todo.checked == true) {\n        allLists[i].todos.splice(index, 1);\n      }\n    });\n    saveList();\n    _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos(getTodos());\n  }\n\n  function deleteList() {\n    let i = getListIndex();\n    allLists.splice(i, 1);\n    saveList();\n    selectedList = allLists[0].id;\n    saveSelectedList();\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].renderMyLists(allLists);\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].refocusList(selectedList);\n    _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos(getTodos());\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].changeListTitle(getListName());\n  }\n\n  function toggleSelectedList(id) {\n    selectedList = id;\n    saveSelectedList();\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].refocusList(selectedList);\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].changeListTitle(getListName());\n    _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos(getTodos());\n  }\n\n\n  //update storage\n  function saveList() {\n    localStorage.setItem(\"allLists\", JSON.stringify(allLists));\n  }\n\n  function saveSelectedList() {\n    localStorage.setItem(\"selectedList.ID\", selectedList);\n  }\n\n  //get \n  function getAllLists() {\n    allLists = JSON.parse(localStorage.getItem(\"allLists\"));\n  }\n\n  function getSelectedList() {\n    selectedList = localStorage.getItem(\"selectedList.ID\");\n  }\n\n  function getListIndex() {\n    for (let i = 0; i < allLists.length; i++) {\n      if (allLists[i].id == selectedList) {\n        return i;\n      }\n    }\n  }\n\n  function getListName() {\n    for (let i = 0; i < allLists.length; i++) {\n      if (allLists[i].id == selectedList) {\n        return allLists[i].name;\n      }\n    }\n  }\n \n  function getTodos() {\n    for (let i = 0; i < allLists.length; i++) {\n      if (allLists[i].id == selectedList) {\n        return allLists[i].todos;\n      }\n    }\n  }\n\n  function onload() {\n    getAllLists();\n    getSelectedList();\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].renderMyLists(allLists);\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].refocusList(selectedList);\n    _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].changeListTitle(getListName());\n    _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos(getTodos());\n  \n  }\n\n\n\n  return {\n    addList,\n    addTodo,\n    editTodo,\n    editChecked,\n    updateCompleted,\n    deleteList,\n    toggleSelectedList,\n    onload,\n  };\n})();\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/updateStorage.js?");

/***/ })

/******/ });