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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropDownMenu\", function() { return dropDownMenu; });\n/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ \"./src/updateStorage.js\");\n/* harmony import */ var _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosDisplay.js */ \"./src/todosDisplay.js\");\n/* harmony import */ var _listDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listDisplay.js */ \"./src/listDisplay.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\n\nconst dropDownMenu = (function () {\n  const dropDownBtn = document.querySelector(\"#dropDownBtn\");\n  dropDownBtn.addEventListener(\"click\", toggleMenu);\n  const menuOptions = document.querySelectorAll(\".menuOption\");\n\n  const dropDownMenu = document.querySelector(\"#dropDownMenu\");\n\n  let menuDisplay = \"none\";\n  let currentState = 1;\n\n  function toggleMenu() {\n    if (menuDisplay == \"none\") {\n      dropDownMenu.style.display = \"grid\";\n      menuDisplay = \"grid\";\n\n      toggleDisabled(\"reEnable\");\n      refreshOptions();\n      addMenuOptionEvents();\n    } else {\n      dropDownMenu.style.display = \"none\";\n      menuDisplay = \"none\";\n    }\n  }\n\n  function refreshOptions() {\n    currentState = 1;\n    menuOptions[0].textContent = \"Clear Completed\";\n    menuOptions[1].textContent = \"Rename List\";\n    menuOptions[2].textContent = \"Delete List\";\n  }\n\n  function addMenuOptionEvents() {\n    menuOptions[0].addEventListener(\"click\", clearCompletedControl);\n    menuOptions[1].addEventListener(\"click\", renameList);\n    menuOptions[2].addEventListener(\"click\", deleteList);\n  }\n\n  function clearCompletedControl() {\n    if (currentState == 1) {\n      menuOptions[0].textContent = \"Confirm Clear?\";\n      menuOptions[0].style.backgroundColor = \"var(--blue)\";\n      toggleDisabled(0);\n      currentState = 2;\n    } else {\n      toggleMenu();\n      _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].updateCompleted();\n      _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos();\n    }\n  }\n\n  function renameList() {\n    menuOptions[1].textContent = \"Confirm?\";\n    menuOptions[1].style.backgroundColor = \"var(--blue)\";\n    toggleDisabled(1);\n  }\n\n  function deleteList() {\n    if (currentState == 1) {\n      menuOptions[2].textContent = \"Confirm Delete?\";\n      menuOptions[2].style.backgroundColor = \"var(--blue)\";\n      toggleDisabled(2);\n      currentState = 2;\n    } else {\n      toggleMenu();\n      _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].deleteList();\n      _listDisplay_js__WEBPACK_IMPORTED_MODULE_2__[\"listDisplay\"].renderMyLists();\n      _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos();\n      _listDisplay_js__WEBPACK_IMPORTED_MODULE_2__[\"listDisplay\"].changeListTitle(_storage_js__WEBPACK_IMPORTED_MODULE_3__[\"storage\"].getListName());\n    }\n  }\n\n  function toggleDisabled(selectedOption) {\n    if (selectedOption == \"reEnable\") {\n      menuOptions.forEach((option) => {\n        option.disabled = false;\n        option.style.backgroundColor = \"var(--black)\";\n      });\n    } else {\n      menuOptions.forEach((option, index) => {\n        if (selectedOption !== index) {\n          option.disabled = true;\n        }\n      });\n    }\n  }\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/dropDownMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listDisplay.js */ \"./src/listDisplay.js\");\n/* harmony import */ var _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosDisplay.js */ \"./src/todosDisplay.js\");\n/* harmony import */ var _dropDownMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropDownMenu.js */ \"./src/dropDownMenu.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\n\nconst main = (function () {\n\n  _storage_js__WEBPACK_IMPORTED_MODULE_3__[\"storage\"].onloadGetAllLists();\n  _storage_js__WEBPACK_IMPORTED_MODULE_3__[\"storage\"].onloadGetSelectedList();\n\n  _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].renderMyLists();\n  _listDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].changeListTitle(_storage_js__WEBPACK_IMPORTED_MODULE_3__[\"storage\"].getListName());\n\n  _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos();\n\n  _dropDownMenu_js__WEBPACK_IMPORTED_MODULE_2__[\"dropDownMenu\"];\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listDisplay.js":
/*!****************************!*\
  !*** ./src/listDisplay.js ***!
  \****************************/
/*! exports provided: listDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listDisplay\", function() { return listDisplay; });\n/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ \"./src/updateStorage.js\");\n/* harmony import */ var _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosDisplay.js */ \"./src/todosDisplay.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\nconst listDisplay = (function () {\n  const listContainer = document.querySelector(\"#list-container\");\n  listContainer.addEventListener(\"click\", toggleLists);\n\n  const addListForm = document.querySelector(\"#addList-form\");\n  addListForm.addEventListener(\"submit\", addListController);\n\n  const addListInput = document.querySelector(\"#addList-input\");\n\n  const listTitle = document.querySelector(\"#listTitle\");\n\n  function addListController(e) {\n    e.preventDefault();\n    if (addListInput.value == \"\" || null) {\n      return;\n    }\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].addList(addListInput.value);\n    renderMyLists();\n  }\n\n  function renderMyLists() {\n    listContainer.innerHTML = \"\";\n\n    let allLists = _storage_js__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].getAllLists();\n    allLists.forEach((list) => {\n      const listItem = document.createElement(\"div\");\n      listItem.classList = \"list\";\n      listItem.id = list.id;\n      listItem.textContent = list.name;\n      listContainer.appendChild(listItem);\n    });\n\n    addListInput.value = null;\n\n    refocusPreviousList();\n  }\n\n  function refocusPreviousList() {\n    const previousSelectedList = document.getElementById(_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"storage\"].getSelectedList());\n    previousSelectedList.classList.add(\"listFocus\");\n  }\n\n  function toggleLists(e) {\n    const listItems = document.querySelectorAll(\".list\");\n    listItems.forEach((list) => {\n      list.classList.remove(\"listFocus\");\n    });\n\n    localStorage.setItem(\"selectedList.ID\", e.target.id);\n\n    if (e.target.classList == \"list\") {\n      e.target.classList.add(\"listFocus\");\n    }\n\n    changeListTitle(e.target.textContent);\n    _todosDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"todosDisplay\"].renderTodos();\n  }\n\n  function changeListTitle(name) {\n    listTitle.value = name;\n  }\n\n  return {\n    renderMyLists,\n    changeListTitle,\n    refocusPreviousList,\n  };\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/listDisplay.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n\nconst storage = (function() {\n  const sampleLists = [\n    {\n      name: \"Drawing\",\n      id: \"list0\",\n      todos: [{ info: \"figure drawing\", checked: true }],\n    },\n    { name: \"Programming\", id: \"list1\", todos: [] },\n    {\n      name: \"Stuff to read\",\n      id: \"list2\",\n      todos: [\n        { info: \"mistborn\", checked: false },\n        { info: \"harry potter\", checked: false },\n        { info: \"hobbit\", checked: false },\n      ],\n    },\n  ];\n\n  let allLists;\n  let selectedList;\n\n  function onloadGetAllLists() {\n    if (localStorage.getItem(\"allLists\") === null) {\n      localStorage.setItem(\"allLists\", JSON.stringify(sampleLists));\n    }\n    allLists = JSON.parse(localStorage.getItem(\"allLists\"));\n  }\n\n  function onloadGetSelectedList() {\n    if (localStorage.getItem(\"selectedList.ID\") === null) {\n      localStorage.setItem(\"selectedList.ID\", allLists[0].id);\n    }\n  }\n\n  function getAllLists() {\n    return JSON.parse(localStorage.getItem(\"allLists\"));\n  }\n\n  function getSelectedList() {\n    return localStorage.getItem(\"selectedList.ID\");\n  }\n\n  function getListName() {\n    selectedList = getSelectedList();\n    for (let i = 0; i < allLists.length; i++) {\n      if (allLists[i].id == selectedList) {\n        return allLists[i].name;\n      }\n    }\n\n  }\n \n  function getTodos() {\n    allLists = getAllLists();\n    selectedList = getSelectedList();\n    for (let i = 0; i < allLists.length; i++) {\n      if (allLists[i].id == selectedList) {\n        return allLists[i].todos;\n      }\n    }\n  }\n\n  return {\n    onloadGetAllLists,\n    onloadGetSelectedList,\n    getAllLists,\n    getSelectedList,\n    getTodos,\n    getListName,\n  }\n\n})();\n\n\n\n//nothing\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/todosDisplay.js":
/*!*****************************!*\
  !*** ./src/todosDisplay.js ***!
  \*****************************/
/*! exports provided: todosDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todosDisplay\", function() { return todosDisplay; });\n/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ \"./src/updateStorage.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\nconst todosDisplay = (function () {\n  const todoContainer = document.querySelector(\"#todo-container\");\n  const todoItemTemplate = document.querySelector(\"#todoItem-template\");\n\n  //todo form\n  const addTodoForm = document.querySelector(\"#addTodo-form\");\n  addTodoForm.addEventListener(\"submit\", addTodoAndRender);\n  const addTodoInput = document.querySelector(\"#addTodo-input\");\n\n  function addTodoAndRender(e) {\n    e.preventDefault();\n    if (addTodoInput.value == \"\" || null) {\n      return;\n    }\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].addTodo(addTodoInput.value);\n    renderTodos();\n  }\n\n  function renderTodos() {\n    todoContainer.innerHTML = \"\";\n    let selectedlistTodos = _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].getTodos();\n    if (selectedlistTodos == []) {\n      return;\n    }\n\n    selectedlistTodos.forEach((todo, index) => {\n      const todoElement = document.importNode(todoItemTemplate.content, true);\n\n      const todoFormElement = todoElement.querySelector(\".todo-item\");\n      todoFormElement.id = index;\n\n      const todoCheckbox = todoElement.querySelector(\".todo-checkbox\");\n      todoCheckbox.checked = todo.checked;\n      todoCheckbox.addEventListener(\"click\", editCheckedController);\n\n      const todoText = todoElement.querySelector(\".todo-text\");\n      todoText.value = todo.info;\n\n      todoText.addEventListener(\"change\", editTodoController);\n\n      todoContainer.appendChild(todoElement);\n    });\n\n    addTodoInput.value = null;\n  }\n\n  function editTodoController(e) {\n    e.preventDefault();\n    let newInfo = e.target.value;\n    let todoID = e.target.parentNode.id;\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].editTodo(newInfo, todoID);\n  }\n\n  function editCheckedController(e) {\n    let newCheckedState = e.target.checked;\n    let todoID = e.target.parentNode.id;\n    _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"].editChecked(newCheckedState, todoID);\n  }\n\n  return {\n    renderTodos,\n  };\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/todosDisplay.js?");

/***/ }),

/***/ "./src/updateStorage.js":
/*!******************************!*\
  !*** ./src/updateStorage.js ***!
  \******************************/
/*! exports provided: updateStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStorage\", function() { return updateStorage; });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst updateStorage = (function () {\n\n  let allLists;\n  function createList(name) {\n    return { name: name, id: Date.now(), todos: [] };\n  }\n\n  function createTodoItem(info, checked) {\n    return { info: info, checked: checked };\n  }\n\n  function addList(value) {\n    const newList = createList(value);\n\n    allLists = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].getAllLists();\n    allLists.push(newList);\n    updateStorage();\n  }\n\n  function addTodo(value) {\n    allLists = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].getAllLists();\n\n    const newTodo = createTodoItem(value, false);\n    let i = getListIndex();\n\n    allLists[i].todos.push(newTodo);\n    updateStorage();\n  }\n\n  function updateStorage() {\n    localStorage.setItem(\"allLists\", JSON.stringify(allLists));\n  }\n\n  function editTodo(info, ID) {\n    let i = getListIndex();\n    allLists[i].todos[ID].info = info;\n    updateStorage();\n  }\n\n  function editChecked(checkedState, ID) {\n    allLists = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].getAllLists();\n\n    let i = getListIndex();\n    allLists[i].todos[ID].checked = checkedState;\n    updateStorage();\n  }\n\n  function updateCompleted() {\n    allLists = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].getAllLists();\n\n    let i = getListIndex();\n    let todos = allLists[i].todos;\n    todos.forEach((todo, index) => {\n      if (todo.checked == true) {\n        allLists[i].todos.splice(index, 1);\n      }\n    });\n    updateStorage();\n  }\n\n  function deleteList() {\n    allLists = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].getAllLists();\n    let i = getListIndex();\n    allLists.splice(i, 1);\n    updateStorage();\n    updateSelectedList();\n  }\n\n  function updateSelectedList() {\n    localStorage.setItem(\"selectedList.ID\", allLists[0].id);\n  }\n\n  function getListIndex() {\n    for (let i = 0; i < allLists.length; i++) {\n      if (allLists[i].id == _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].getSelectedList()) {\n        return i;\n      }\n    }\n  }\n\n  return {\n    addList,\n    addTodo,\n    editTodo,\n    editChecked,\n    updateCompleted,\n    updateStorage,\n    deleteList,\n  };\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/updateStorage.js?");

/***/ })

/******/ });