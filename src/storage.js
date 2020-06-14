

//constructors
function createList(name) {
  return {name: name, id: Date.now(), todos:[]}
} 

function createTodoItem(info) {

  return {info: info};
}


let sampleLists = [
  {name: 'Drawing', id:'0', todos: [{info: 'figure drawing'}]}, 
  {name: 'Programming', id:'1', todos: []}, 
  {name: 'Stuff to read', id:'2', todos: [{info: 'mistborn'}, {info: 'harry potter'}, {info: 'hobbit'} ]}
];

let allLists = JSON.parse(localStorage.getItem('allLists')) || sampleLists;
console.log(allLists);


export {createList, createTodoItem, allLists};
