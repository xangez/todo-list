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
/*! exports provided: renderMyLists, renderTodos, selectedList, removeListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMyLists\", function() { return renderMyLists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodos\", function() { return renderTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedList\", function() { return selectedList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeListContainer\", function() { return removeListContainer; });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _formControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formControllers */ \"./src/formControllers.js\");\n\n\n\nconst toggleListsContainer = document.querySelector('#togglelists-container');\n\n//adding listform\nconst addListInput = document.querySelector('#addList-input');\nconst addListForm = document.querySelector('#addList-form');\naddListForm.addEventListener('submit', _formControllers__WEBPACK_IMPORTED_MODULE_1__[\"addList\"]);\n\n//currently openlist\nconst openListName = document.querySelector('.openList-name');\nconst openListContainer = document.querySelector('.openList-container');\nconst todoItemTemplate = document.querySelector('#todoItem-template');\n\n//todo form\nconst addTodoForm = document.querySelector('#addTodo-form');\nconst addTodoInput = document.querySelector('#addTodo-input');\n\nlet selectedList = _factories__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][0].id;\n\n\n//lists\nfunction renderMyLists() {\n\n  const listContainer = document.createElement('div');\n  listContainer.id = 'list-container';\n  \n\n  _factories__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].forEach(list => {\n    const listItem = document.createElement('div');\n    listItem.classList = 'list';\n    listItem.id = list.id;\n    listItem.textContent = list.name;\n    listContainer.appendChild(listItem);\n  })\n\n  toggleListsContainer.insertBefore(listContainer, addListForm);\n  addListInput.value = null;\n  listContainer.addEventListener('click', toggleLists);\n\n  //refocus previous selected list\n  const previousSelectedList = document.getElementById(selectedList);\n  previousSelectedList.classList.add('listFocus');\n\n}\n\nfunction removeListContainer() {\n  const listContainer = document.querySelector('#list-container');\n  listContainer.remove();\n}\n\n//todos\n\nfunction renderTodos() {\n\n  removeTodoContainer();\n\n  let selectedlistTodos = getTodos();\n\n  const todoContainer = document.createElement('div');\n  todoContainer.id = 'todo-container';\n\n\n  selectedlistTodos.forEach(todo => {\n    const todoElement = document.importNode(todoItemTemplate.content, true);\n    const todoText = todoElement.querySelector('#todo-text');\n    todoText.value = todo.info;\n    todoContainer.appendChild(todoElement);\n  });\n\n  openListContainer.insertBefore(todoContainer, addTodoForm);\n  addTodoInput.value = null;\n  \n}\n\n\nfunction removeTodoContainer() {\n  const todoContainer = document.querySelector('#todo-container');\n  todoContainer.remove();\n}\n\n\nfunction getTodos() {\n  for (let i=0; i<_factories__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].length; i++) {\n    if (_factories__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].id == selectedList) {\n       return _factories__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"][i].todos;\n    }\n  }\n}\n\n//toggling\n\nfunction toggleLists(e) {\n  const listItems = document.querySelectorAll('.list');\n  listItems.forEach(list => {\n    list.classList.remove('listFocus');\n  })\n\n  selectedList = e.target.id;\n\n\n  if (e.target.classList == 'list') {\n    e.target.classList.add('listFocus');\n  }\n\n  openListName.textContent = e.target.textContent;\n  renderTodos();\n}\n\n\n\n//# sourceURL=webpack:///./src/DOMrendering.js?");

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/*! exports provided: createList, createTodoItem, allLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createList\", function() { return createList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodoItem\", function() { return createTodoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allLists\", function() { return allLists; });\n\n\n//factories\nfunction createList(name) {\n  return {name: name, id: Date.now(), todos:[]}\n} \n\nfunction createTodoItem(info) {\n  return {info: info};\n}\n\nlet allLists = [\n  {name: 'Drawing', id:'0', todos: [{info: 'figure drawing'}]}, \n  {name: 'Programming', id:'1', todos: []}, \n  {name: 'Stuff to read', id:'2', todos: [{info: 'mistborn'}, {info: 'harry potter'}, {info: 'hobbit'} ]}\n];\n\n\n\n\n\n//# sourceURL=webpack:///./src/factories.js?");

/***/ }),

/***/ "./src/formControllers.js":
/*!********************************!*\
  !*** ./src/formControllers.js ***!
  \********************************/
/*! exports provided: addList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\n/* harmony import */ var _factories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories.js */ \"./src/factories.js\");\n/* harmony import */ var _DOMrendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMrendering */ \"./src/DOMrendering.js\");\n\n\n\n\n\n//adding listform\nconst addListForm = document.querySelector('#addList-form');\nconst addListInput = document.querySelector('#addList-input');\naddListForm.addEventListener('submit', addList);\n\n//todo form\n// const addTodoForm = document.querySelector('#addTodo-form');\n// addTodoForm.addEventListener('submit', addTodo);\n\n\nfunction addList(e) {\n  e.preventDefault();\n  let listname = addListInput.value;\n  const newList = Object(_factories_js__WEBPACK_IMPORTED_MODULE_0__[\"createList\"])(listname);\n  _factories_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].push(newList);\n\n  Object(_DOMrendering__WEBPACK_IMPORTED_MODULE_1__[\"removeListContainer\"])();\n  Object(_DOMrendering__WEBPACK_IMPORTED_MODULE_1__[\"renderMyLists\"])();\n}\n\n\n//todo items\n// function addTodo(e) {\n//   e.preventDefault();\n//   let todoInfo = addTodoInput.value;\n//   const newTodo = createTodoItem(todoInfo);\n// }\n\n\n//# sourceURL=webpack:///./src/formControllers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMrendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMrendering */ \"./src/DOMrendering.js\");\n\n\n\n(function() {\n  Object(_DOMrendering__WEBPACK_IMPORTED_MODULE_0__[\"renderMyLists\"])();\n  const firstList = document.getElementById(_DOMrendering__WEBPACK_IMPORTED_MODULE_0__[\"selectedList\"]);\n  firstList.classList.add('listFocus');\n  Object(_DOMrendering__WEBPACK_IMPORTED_MODULE_0__[\"renderTodos\"])();\n\n\n  \n})();\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });