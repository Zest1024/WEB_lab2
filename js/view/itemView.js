import itemModelList from "../model/itemModelList.js";

export default class itemView {
  constructor(itemModelList) {
    this.itemModelList = itemModelList;
    this.show = document.querySelector(".main-word");
    this.input = document.querySelector(".main-translate");
    this.scores = document.querySelector(".score-count");
    document.querySelector(".check-button").addEventListener("click", () => {
      this.itemModelList.check(this.input.value.toLowerCase());
      setTimeout(() => {
        console.log("end");
      }, 2000);
    });
  }
  toHtml() {
    if (this.itemModelList.engVocabulary.length > 0) {
      this.show.value = this.itemModelList.engVocabulary[
        this.itemModelList.currentItem.id
      ];
      let color;
      if (this.itemModelList.currentItem.checked == true) {
        color = "green";
      } else if (this.itemModelList.currentItem.checked == false) {
        color = "red";
      }
      if (color) this.input.style = `background-color:${color}`;
      else this.input.style = `background-color:white`;

      this.scores.innerHTML = this.itemModelList.currentItem.scores;
    } else {
      this.show.innerHTML = "Game Over=)";
    }
  }
  clearInput() {
    this.input.value = "";
  }
}
