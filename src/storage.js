

const sampleLists = [
  {name: 'Drawing', id:'list0', todos: [{info: 'figure drawing', checked: true}]}, 
  {name: 'Programming', id:'list1', todos: []}, 
  {name: 'Stuff to read', id:'list2', todos: [{info: 'mistborn', checked: false}, {info: 'harry potter', checked: false}, {info: 'hobbit', checked: false} ]}
];

let allLists = JSON.parse(localStorage.getItem('allLists')) || sampleLists;
console.log(allLists);

let selectedListID = localStorage.getItem('selectedList.ID');
console.log(selectedListID);

export {allLists};
