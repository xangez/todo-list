
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

  function checkAllLists() {
    if (localStorage.getItem("allLists") === null) {
      localStorage.setItem("allLists", JSON.stringify(sampleLists));
    }

  }

  function checkSelectedList() {
    if (localStorage.getItem("selectedList.ID") === null) {
      localStorage.setItem("selectedList.ID", sampleLists[0].id);
    }
  }

  return {
    checkAllLists,
    checkSelectedList,
  }

})();

export { storage }

