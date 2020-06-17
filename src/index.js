import { listDisplay } from "./listDisplay.js";
import { todosDisplay } from "./todosDisplay.js";
import { dropDownMenu } from "./dropDownMenu.js";
import { storage } from './storage.js'

const main = (function () {

  storage.onloadGetAllLists();
  storage.onloadGetSelectedList();

  listDisplay.renderMyLists();
  listDisplay.changeListTitleDisplay(storage.getListName());

  listDisplay.refocusPreviousList();

  todosDisplay.renderTodos();

  dropDownMenu;
})();

export { main };

