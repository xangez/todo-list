
const storage = (function() {
  const sampleLists = [
    {
      name: "Drawing",
      id: "list0",
      todos: [{ info: "figure drawing", checked: true }],
    },
    { name: "Programming", id: "list1", todos: [] },
    {
      name: "Stuff to read",
      id: "list2",
      todos: [
        { info: "mistborn", checked: false },
        { info: "harry potter", checked: false },
        { info: "hobbit", checked: false },
      ],
    },
  ];

  let allLists;
  let selectedList;

  function onloadGetAllLists() {
    if (localStorage.getItem("allLists") === null) {
      localStorage.setItem("allLists", JSON.stringify(sampleLists));
    }
    allLists = JSON.parse(localStorage.getItem("allLists"));
  }

  function onloadGetSelectedList() {
    if (localStorage.getItem("selectedList.ID") === null) {
      localStorage.setItem("selectedList.ID", allLists[0].id);
    }
  }

  function getAllLists() {
    return JSON.parse(localStorage.getItem("allLists"));
  }

  function getSelectedList() {
    return localStorage.getItem("selectedList.ID");
  }

  function getListName() {
    selectedList = getSelectedList();
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == selectedList) {
        return allLists[i].name;
      }
    }

  }
 
  function getTodos() {
    allLists = getAllLists();
    selectedList = getSelectedList();
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == selectedList) {
        return allLists[i].todos;
      }
    }
  }

  return {
    onloadGetAllLists,
    onloadGetSelectedList,
    getAllLists,
    getSelectedList,
    getTodos,
    getListName,
  }

})();

export { storage }

//nothing