import {allLists} from './storage.js';


const updateStorage = (function() {


  function createList(name) {
    return {name: name, id: Date.now(), todos:[]}
  } 
  
  function createTodoItem(info, checked) {
  
    return {info: info, checked: checked};
  }



  function addList(value) {
    const newList = createList(value);
    allLists.push(newList);
    updateStorage();
  }
  
  function addTodo(value) {
    const newTodo = createTodoItem(value, false);
    let index = getListIndex();
    allLists[index].todos.push(newTodo);
    updateStorage();
  }
  
  
  function updateStorage() {
    localStorage.setItem('allLists', JSON.stringify(allLists));
  }
  
  
  
  function editTodo(info, ID) {
    let i = getListIndex();
    allLists[i].todos[ID].info = info;
    updateStorage();
  }
  
  
  function editChecked(checkedState, ID) {
    let i = getListIndex();
    allLists[i].todos[ID].checked = checkedState;
    updateStorage();
  }
  
  
  function updateCompleted() {
    let i = getListIndex();
    let todos = allLists[i].todos;
    todos.forEach((todo, index) => {
      if (todo.checked == true){
        allLists[i].todos.splice(index, 1);
      }
    })
    updateStorage();
  }
  
  function getListIndex() {
    for (let i=0; i<allLists.length; i++) {
      if (allLists[i].id == localStorage.getItem('selectedList.ID')){
        return i;
      }
    }
  }
  
  return {
    addList, addTodo, editTodo, editChecked, updateCompleted, updateStorage,
  }
  

})();






export {updateStorage};