

//constructors
function createList(name) {
  return {name: name, id: Date.now(), todos:[]}
} 

function createTodoItem(info, checked) {

  return {info: info, checked: checked};
}


let sampleLists = [
  {name: 'Drawing', id:'list0', todos: [{info: 'figure drawing', checked: true}]}, 
  {name: 'Programming', id:'list1', todos: []}, 
  {name: 'Stuff to read', id:'list2', todos: [{info: 'mistborn', checked: false}, {info: 'harry potter', checked: false}, {info: 'hobbit', checked: false} ]}
];

let allLists = JSON.parse(localStorage.getItem('allLists')) || sampleLists;
console.log(allLists);


export {createList, createTodoItem, allLists};
