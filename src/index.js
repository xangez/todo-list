import {listDisplay} from './listDisplay.js';
import {todosDisplay} from './todosDisplay.js';

const main = (function() {

  const sampleLists = [
    {name: 'Drawing', id:'list0', todos: [{info: 'figure drawing', checked: true}]}, 
    {name: 'Programming', id:'list1', todos: []}, 
    {name: 'Stuff to read', id:'list2', todos: [{info: 'mistborn', checked: false}, {info: 'harry potter', checked: false}, {info: 'hobbit', checked: false} ]}
  ];
  
  let allLists;
  function getAllLists() {
    if (localStorage.getItem("allLists") === null){
      localStorage.setItem("allLists", JSON.stringify(sampleLists))
    }
    allLists = JSON.parse(localStorage.getItem("allLists"));
  }

  getAllLists();
  console.log(allLists);

  if (localStorage.getItem("selectedList.ID") === null) {
    localStorage.setItem("selectedList.ID", allLists[1].id);
  }

  let selectedList = localStorage.getItem("selectedList.ID");

  console.log(selectedList);

  listDisplay.renderMyLists();


  const listElement = document.getElementById(selectedList);
  listElement.classList.add('listFocus');


  todosDisplay.renderTodos();

  
})();


export {main}








