

//factories
function createList(name) {
  return {name: name, id: Date.now(), todos:[]}
} 

function createTodoItem(info) {
  return {info: info};
}

let allLists = [
  {name: 'Drawing', id:'0', todos: [{info: 'figure drawing'}]}, 
  {name: 'Programming', id:'1', todos: []}, 
  {name: 'Stuff to read', id:'2', todos: [{info: 'mistborn'}, {info: 'harry potter'}, {info: 'hobbit'} ]}
];


export {createList, createTodoItem, allLists};
