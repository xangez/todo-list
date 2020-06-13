

const mainContainer = document.querySelector('#main-container');

//mylists container
const toggleListsContainer = document.querySelector('#togglelists-container');

//adding listform
const addListForm = document.querySelector('#addList-form');
const addListInput = document.querySelector('#addList-input');
addListForm.addEventListener('submit', addList);

//currently openlist
const openListName = document.querySelector('.openList-name');
const openListContainer = document.querySelector('.openList-container');
const todoItemTemplate = document.querySelector('#todoItem-template');

//todo form
const addTodoForm = document.querySelector('#addTodo-form');
const addTodoInput = document.querySelector('#addTodo-input');

addTodoForm.addEventListener('submit', addTodo);


let allLists = [
                {name: 'Drawing', id:'0', todos: [{info: 'figure drawing'}]}, 
                {name: 'Programming', id:'1', todos: []}, 
                {name: 'Stuff to read', id:'2', todos: [{info: 'mistborn'}, {info: 'harry potter'}, {info: 'hobbit'} ]}
              ];

let selectedList = allLists[0].id;

//factories
function createList(name) {
  return {name: name, id: Date.now(), todos:[]}
} 

function createTodoItem(info) {
  return {info: info};
}

//addlists
function addList(e) {
  e.preventDefault();
  let listname = addListInput.value;
  const newList = createList(listname);
  allLists.push(newList);

  removeListContainer();
  renderMyLists();
}

//removelistcontainer
function removeListContainer() {
  const listContainer = document.querySelector('#list-container');
  listContainer.remove();
}

//render all lists
function renderMyLists(focusedList) {
  const listContainer = document.createElement('div');
  listContainer.id = 'list-container';
  

  allLists.forEach(list => {
    const listItem = document.createElement('div');
    listItem.classList = 'list';
    listItem.id = list.id;
    listItem.textContent = list.name;
    listContainer.appendChild(listItem);
  })

  toggleListsContainer.insertBefore(listContainer, addListForm);
  addListInput.value = null;
  listContainer.addEventListener('click', toggleLists);

  //refocus previous selected list
  const previousSelectedList = document.getElementById(selectedList);
  previousSelectedList.classList.add('listFocus');

}

//toggle lists
function toggleLists(e) {
  const listItems = document.querySelectorAll('.list');
  listItems.forEach(list => {
    list.classList.remove('listFocus');
  })

  selectedList = e.target.id;


  if (e.target.classList == 'list') {
    e.target.classList.add('listFocus');
  }

  openListName.textContent = e.target.textContent;
  renderOpenList();
}

//todo items
function addTodo(e) {
  e.preventDefault();
  let todoInfo = addTodoInput.value;
  const newTodo = createTodoItem(todoInfo);
  

}

//render todos of selectedlist

function renderOpenList() {

  removeTodoContainer();

  let selectedlistTodos = getTodos();

  const todoContainer = document.createElement('div');
  todoContainer.id = 'todo-container';


  selectedlistTodos.forEach(todo => {
    const todoElement = document.importNode(todoItemTemplate.content, true);
    const todoText = todoElement.querySelector('#todo-text');
    todoText.value = todo.info;
    todoContainer.appendChild(todoElement);
  });

  openListContainer.insertBefore(todoContainer, addTodoForm);
  addTodoInput.value = null;
}

function removeTodoContainer() {
  const todoContainer = document.querySelector('#todo-container');
  todoContainer.remove();
}

function getTodos() {
  for (let i=0; i<allLists.length; i++) {
    if (allLists[i].id == selectedList) {
       return allLists[i].todos;
    }
  }
}

window.onload = function() {
  renderMyLists();
  const firstList = document.getElementById(selectedList);
  firstList.classList.add('listFocus');
  renderOpenList();
}