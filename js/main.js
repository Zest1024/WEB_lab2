import itemView from "./view/itemView.js";
import Controller from "./controller/controller.js";
import itemModelList from "./model/itemModelList.js";

const ItemModelList = new itemModelList();
const ItemView = new itemView(ItemModelList);

const controller = new Controller(ItemModelList, ItemView);

controller.start();
