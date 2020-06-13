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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nconst mainContainer = document.querySelector('#main-container');\n\n//mylists\nconst toggleListsContainer = document.querySelector('#togglelists-container');\n\n//listform\nconst addListForm = document.querySelector('#addList-form');\nconst addListInput = document.querySelector('#addList-input');\naddListForm.addEventListener('submit', addList);\n\n//openlist\nconst openListName = document.querySelector('.openList-name');\nconst openListContainer = document.querySelector('.openList-container');\nconst todoItemTemplate = document.querySelector('#todoItem-template');\n\n//todo form\nconst addTodoForm = document.querySelector('#addTodo-form');\nconst addTodoInput = document.querySelector('#addTodo-input');\n\naddTodoForm.addEventListener('submit', addTodo);\n\nlet allLists = [{name: 'Drawing', todos: []}, {name: 'Programming', todos: []}, \n                  { name: 'Stuff to read', todos: [{info: 'mistborn'}, {info: 'harry potter'}, {info: 'hobbit'} ]}];\n\n//factories\nfunction createList(name) {\n  return {name: name, todos:[]}\n} \n\nfunction createTodoItem(info) {\n  return {info: info};\n}\n\n//add\nfunction addList(e) {\n  e.preventDefault();\n  let listname = addListInput.value;\n  const newList = createList(listname);\n  allLists.push(newList);\n\n  removeListContainer();\n  renderMyLists();\n}\n\nfunction removeListContainer() {\n  const listContainer = document.querySelector('#list-container');\n  listContainer.remove();\n}\n\nfunction renderMyLists() {\n  const listContainer = document.createElement('div');\n  listContainer.id = 'list-container';\n  \n  for (let i=0; i<allLists.length; i++) {\n    const listItem = document.createElement('div');\n    listItem.classList = 'list';\n    listItem.textContent = allLists[i].name;\n    listContainer.appendChild(listItem);\n  }\n\n  toggleListsContainer.insertBefore(listContainer, addListForm);\n  addListInput.value = null;\n  listContainer.addEventListener('click', toggleLists);\n\n}\n\nfunction toggleLists(e) {\n  const listItems = document.querySelectorAll('.list');\n  listItems.forEach(list => {\n    list.classList.remove('listFocus');\n  })\n\n  let selectedList = e.target.textContent;\n\n  if (e.target.classList == 'list') {\n    e.target.classList.add('listFocus');\n  }\n\n  renderOpenList(selectedList);\n}\n\n\n//todo items\nfunction addTodo(e) {\n  e.preventDefault();\n}\n\nfunction renderOpenList(selectedList) {\n\n  removeTodoContainer();\n\n  let selectedlistTodos = getTodos(selectedList);\n\n  const todoContainer = document.createElement('div');\n  todoContainer.id = 'todo-container';\n\n\n  selectedlistTodos.forEach(todo => {\n    const todoElement = document.importNode(todoItemTemplate.content, true);\n    const todoText = todoElement.querySelector('#todo-text');\n    todoText.value = todo.info;\n    todoContainer.appendChild(todoElement);\n  });\n\n  openListContainer.insertBefore(todoContainer, addTodoForm);\n  addTodoInput.value = null;\n\n}\n\nfunction removeTodoContainer() {\n  const todoContainer = document.querySelector('#todo-container');\n  todoContainer.remove();\n}\n\nfunction getTodos(selectedList) {\n  for (let i=0; i<allLists.length; i++) {\n    if (allLists[i].name == selectedList) {\n       return allLists[i].todos;\n    }\n  }\n}\n\nrenderMyLists();\n\n \n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });