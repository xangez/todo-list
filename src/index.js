

const mainContainer = document.querySelector('#main-container');

//mylists
const toggleListsContainer = document.querySelector('#togglelists-container');

//listform
const addListForm = document.querySelector('#addList-form');
const addListInput = document.querySelector('#addList-input');
addListForm.addEventListener('submit', addList);

//openlist
const openListName = document.querySelector('.openList-name');
const openListContainer = document.querySelector('.openList-container');
const todoItemTemplate = document.querySelector('#todoItem-template');

//todo form
const addTodoForm = document.querySelector('#addTodo-form');
const addTodoInput = document.querySelector('#addTodo-input');

addTodoForm.addEventListener('submit', addTodo);

let allLists = [{name: 'Drawing', todos: []}, {name: 'Programming', todos: []}, 
                  { name: 'Stuff to read', todos: [{info: 'mistborn'}, {info: 'harry potter'}, {info: 'hobbit'} ]}];

//factories
function createList(name) {
  return {name: name, todos:[]}
} 

function createTodoItem(info) {
  return {info: info};
}

//add
function addList(e) {
  e.preventDefault();
  let listname = addListInput.value;
  const newList = createList(listname);
  allLists.push(newList);

  removeListContainer();
  renderMyLists();
}

function removeListContainer() {
  const listContainer = document.querySelector('#list-container');
  listContainer.remove();
}

function renderMyLists() {
  const listContainer = document.createElement('div');
  listContainer.id = 'list-container';
  
  for (let i=0; i<allLists.length; i++) {
    const listItem = document.createElement('div');
    listItem.classList = 'list';
    listItem.textContent = allLists[i].name;
    listContainer.appendChild(listItem);
  }

  toggleListsContainer.insertBefore(listContainer, addListForm);
  addListInput.value = null;
  listContainer.addEventListener('click', toggleLists);

}

function toggleLists(e) {
  const listItems = document.querySelectorAll('.list');
  listItems.forEach(list => {
    list.classList.remove('listFocus');
  })

  let selectedList = e.target.textContent;

  if (e.target.classList == 'list') {
    e.target.classList.add('listFocus');
  }

  renderOpenList(selectedList);
}


//todo items
function addTodo(e) {
  e.preventDefault();
}

function renderOpenList(selectedList) {

  removeTodoContainer();

  let selectedlistTodos = getTodos(selectedList);

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

function getTodos(selectedList) {
  for (let i=0; i<allLists.length; i++) {
    if (allLists[i].name == selectedList) {
       return allLists[i].todos;
    }
  }
}

renderMyLists();

 





