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

/***/ "./src/DOMrendering.js":
/*!*****************************!*\
  !*** ./src/DOMrendering.js ***!
  \*****************************/
/*! exports provided: listDisplay, todosDisplay, selectedList, dropDownMenuController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listDisplay\", function() { return listDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todosDisplay\", function() { return todosDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedList\", function() { return selectedList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropDownMenuController\", function() { return dropDownMenuController; });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateStorage.js */ \"./src/updateStorage.js\");\n\n\n\nlet selectedList = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][0].id;\n\n\nconst listDisplay = (function() {\n\n  const listContainer = document.querySelector('#list-container');\n  listContainer.addEventListener('click', toggleLists);\n  \n  const addListForm = document.querySelector('#addList-form');\n  addListForm.addEventListener('submit', addListAndRender);\n  \n  const addListInput = document.querySelector('#addList-input');\n\n  const openListName = document.querySelector('.openList-name');\n\n\n  function addListAndRender(e) {\n    e.preventDefault();\n    if (addListInput.value == '' || null){\n      return;\n    }\n    Object(_updateStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])(addListInput.value);\n    renderMyLists();\n  }\n\n  function renderMyLists() {\n    listContainer.innerHTML = '';  \n  \n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].forEach(list => {\n      const listItem = document.createElement('div');\n      listItem.classList = 'list';\n      listItem.id = list.id;\n      listItem.textContent = list.name;\n      listContainer.appendChild(listItem);\n    })\n  \n    addListInput.value = null;\n  \n    //refocus previous selected list\n    const previousSelectedList = document.getElementById(selectedList);\n    previousSelectedList.classList.add('listFocus');\n  \n  }\n\n\n  function toggleLists(e) {\n    const listItems = document.querySelectorAll('.list');\n    listItems.forEach(list => {\n      list.classList.remove('listFocus');\n    });\n  \n    selectedList = e.target.id;\n  \n  \n    if (e.target.classList == 'list') {\n      e.target.classList.add('listFocus');\n    }\n  \n    openListName.textContent = e.target.textContent;\n    todosDisplay.renderTodos();\n  }\n\n  return {\n    renderMyLists\n  }\n\n})();\n\n\n\n\nconst todosDisplay = (function() {\n\n  const todoContainer = document.querySelector('#todo-container');  \n  const todoItemTemplate = document.querySelector('#todoItem-template');\n  \n  //todo form\n  const addTodoForm = document.querySelector('#addTodo-form');\n  addTodoForm.addEventListener('submit', addTodoAndRender)\n  const addTodoInput = document.querySelector('#addTodo-input');\n\n  function addTodoAndRender(e) {\n    e.preventDefault();\n    if (addTodoInput.value == '' || null){\n      return;\n    }\n    Object(_updateStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"addTodo\"])(addTodoInput.value);\n    renderTodos();\n  }\n  \n  \n  function renderTodos() {\n    todoContainer.innerHTML = '';\n    let selectedlistTodos = getTodos();\n  \n    selectedlistTodos.forEach((todo, index) => {\n      const todoElement = document.importNode(todoItemTemplate.content, true);\n  \n      const todoFormElement = todoElement.querySelector('.todo-item');\n      todoFormElement.id = index;\n\n      const todoCheckbox = todoElement.querySelector('.todo-checkbox');\n      todoCheckbox.checked = todo.checked;\n      todoCheckbox.addEventListener('click', editCheckedController)\n  \n      const todoText = todoElement.querySelector('.todo-text');\n      todoText.value = todo.info;\n\n      todoText.addEventListener('change', editTodoController);\n  \n      todoContainer.appendChild(todoElement);\n    });\n  \n    addTodoInput.value = null;\n  }\n  \n  \n  function getTodos() {\n    for (let i=0; i<_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].length; i++) {\n      if (_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].id == selectedList) {\n         return _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].todos;\n      }\n    }\n  }\n    \n\n  function editTodoController(e){\n    e.preventDefault();\n      let newInfo = e.target.value;\n      let todoID = e.target.parentNode.id;\n      Object(_updateStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"editTodo\"])(newInfo, todoID);\n  }\n\n  function editCheckedController(e) {\n    let newCheckedState = e.target.checked;\n    let todoID = e.target.parentNode.id;\n    Object(_updateStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"editChecked\"])(newCheckedState, todoID);\n  }\n\n\n  return {\n    renderTodos,\n  }\n  \n})();\n\nconst dropDownMenuController = (function() {\n  const dropDownBtn = document.querySelector('#dropDownBtn');\n  dropDownBtn.addEventListener('click', toggleMenu);\n  const menuOptions = document.querySelectorAll('.menuOption');\n\n\n  const dropDownMenu = document.querySelector('#dropDownMenu');\n\n  let menuDisplay = 'none';\n  let currentState = 1;\n\n\n  function toggleMenu() {\n    if (menuDisplay == 'none'){\n      dropDownMenu.style.display = 'grid';\n      menuDisplay = 'grid';\n\n      toggleDisabled('reEnable')\n      refreshOptions();\n      addMenuOptionEvents();\n    }\n    else {\n\n      dropDownMenu.style.display = 'none';\n      menuDisplay = 'none';\n    }\n  }\n\n  function refreshOptions() {\n    currentState = 1;\n    menuOptions[0].textContent = 'Clear Completed';\n    menuOptions[1].textContent = 'Rename List';\n    menuOptions[2].textContent = 'Delete List';\n\n  }\n\n  function addMenuOptionEvents() {\n\n    menuOptions[0].addEventListener('click', clearCompletedControl);\n    menuOptions[1].addEventListener('click', renameList);\n    menuOptions[2].addEventListener('click', deleteList);\n  }\n\n  function clearCompletedControl() {\n    if (currentState == 1){\n      menuOptions[0].textContent = 'Confirm?'\n      menuOptions[0].style.backgroundColor = 'var(--blue)'\n      toggleDisabled(0);\n      currentState = 2;\n    }\n    else {\n      toggleMenu();\n      Object(_updateStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"updateCompleted\"])();\n      todosDisplay.renderTodos();\n    }\n  }\n\n  function renameList() {\n    menuOptions[1].textContent = 'Confirm?'\n  }\n\n  function deleteList() {\n    menuOptions[2].textContent = 'Confirm?'\n  }\n\n\n  function toggleDisabled(selectedOption) {\n    if (selectedOption == 'reEnable') {\n      menuOptions.forEach(option => {\n        option.disabled = false;\n        option.style.backgroundColor = 'transparent';\n       });\n    }\n    else {\n      menuOptions.forEach((option, index) => {\n        if (selectedOption !== index) {\n          option.disabled = true;\n        }\n      });\n    }\n\n  }\n\n  function toggleColor(color) {\n\n  }\n  \n\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/DOMrendering.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMrendering_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMrendering.js */ \"./src/DOMrendering.js\");\n\n\n\n(function() {\n\n  _DOMrendering_js__WEBPACK_IMPORTED_MODULE_0__[\"listDisplay\"].renderMyLists();\n\n  const firstList = document.getElementById(_DOMrendering_js__WEBPACK_IMPORTED_MODULE_0__[\"selectedList\"]);\n  firstList.classList.add('listFocus');\n\n  _DOMrendering_js__WEBPACK_IMPORTED_MODULE_0__[\"todosDisplay\"].renderTodos();\n\n  \n})();\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: createList, createTodoItem, allLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createList\", function() { return createList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodoItem\", function() { return createTodoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allLists\", function() { return allLists; });\n\n\n//constructors\nfunction createList(name) {\n  return {name: name, id: Date.now(), todos:[]}\n} \n\nfunction createTodoItem(info, checked) {\n\n  return {info: info, checked: checked};\n}\n\n\nlet sampleLists = [\n  {name: 'Drawing', id:'list0', todos: [{info: 'figure drawing', checked: true}]}, \n  {name: 'Programming', id:'list1', todos: []}, \n  {name: 'Stuff to read', id:'list2', todos: [{info: 'mistborn', checked: false}, {info: 'harry potter', checked: false}, {info: 'hobbit', checked: false} ]}\n];\n\nlet allLists = JSON.parse(localStorage.getItem('allLists')) || sampleLists;\nconsole.log(allLists);\n\n\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/updateStorage.js":
/*!******************************!*\
  !*** ./src/updateStorage.js ***!
  \******************************/
/*! exports provided: addList, addTodo, selectedList, editTodo, editChecked, updateCompleted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTodo\", function() { return editTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editChecked\", function() { return editChecked; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateCompleted\", function() { return updateCompleted; });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _DOMrendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMrendering */ \"./src/DOMrendering.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectedList\", function() { return _DOMrendering__WEBPACK_IMPORTED_MODULE_1__[\"selectedList\"]; });\n\n\n\n\n\n\nfunction addList(value) {\n  const newList = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"createList\"])(value);\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].push(newList);\n  updateStorage();\n}\n\nfunction addTodo(value) {\n  const newTodo = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodoItem\"])(value, false);\n  let index = getListIndex();\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][index].todos.push(newTodo);\n  updateStorage();\n}\n\n\nfunction updateStorage() {\n  localStorage.setItem('allLists', JSON.stringify(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"]))\n}\n\n\n\nfunction editTodo(info, ID) {\n  let i = getListIndex();\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].todos[ID].info = info;\n  updateStorage();\n}\n\n\nfunction editChecked(checkedState, ID) {\n  let i = getListIndex();\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].todos[ID].checked = checkedState;\n  updateStorage();\n}\n\n\nfunction updateCompleted() {\n  let i = getListIndex();\n  let todos = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].todos;\n  todos.forEach((todo, index) => {\n    if (todo.checked == true){\n      _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].todos.splice(index, 1);\n    }\n  })\n  updateStorage();\n}\n\nfunction getListIndex() {\n  for (let i=0; i<_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].length; i++) {\n    if (_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].id == _DOMrendering__WEBPACK_IMPORTED_MODULE_1__[\"selectedList\"]){\n      return i;\n    }\n  }\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/updateStorage.js?");

/***/ })

/******/ });