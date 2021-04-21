import itemModel from "../model/itemModel.js";

export default class Controller {
  constructor(itemModelList, itemView) {
    this.itemModelList = itemModelList;
    this.itemView = itemView;
    this.itemModelList.setOnChangeCallback((item) =>
      this.onChangeCallback(item)
    );
  }
  onChangeCallback(item) {
    if (
      item &&
      item.next == true &&
      this.itemModelList.engVocabulary.length > 0
    ) {
      if (item.checked == true) {
        this.itemModelList.deleteWord(item.id);
      }
      setTimeout(this.next.bind(this), 2000);
      setTimeout(() => {
        this.itemView.clearInput();
      }, 2000);
    } else {
      this.itemView.toHtml();
    }
  }
  start() {
    this.itemModelList.scores = 0;
    const item = new itemModel(this.itemModelList.engVocabulary.length);
    this.itemModelList.setItem(item);
  }
  next() {
    const item = new itemModel(this.itemModelList.engVocabulary.length);
    this.itemModelList.setItem(item);
  }
}
