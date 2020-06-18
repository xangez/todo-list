import { listDisplay } from "./listDisplay.js";
import { todosDisplay } from "./todosDisplay.js";
import { dropDownMenu } from "./dropDownMenu.js";
import { storage } from "./storage.js";
import { updateStorage } from "./updateStorage.js";

const main = (function () {

  let allLists = storage.onloadGetAllLists();
  storage.onloadGetSelectedList();

  listDisplay.renderMyLists(allLists);
  listDisplay.changeListTitle(updateStorage.getListName());

  todosDisplay.renderTodos(updateStorage.getTodos());

  dropDownMenu;
})();

export { main };

