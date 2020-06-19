import { listDisplay } from "./listDisplay.js";
import { todosDisplay } from "./todosDisplay.js";
import { dropDownMenu } from "./dropDownMenu.js";
import { storage } from "./storage.js";
import { updateStorage } from "./updateStorage.js";

const main = (function () {
  storage.checkAllLists();
  storage.checkSelectedList();
  updateStorage.onload();
  listDisplay;
  todosDisplay;
  dropDownMenu;
})();

export { main };

