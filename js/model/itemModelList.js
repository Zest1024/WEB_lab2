import itemModel from "./itemModel.js";
export default class itemModelList {
  constructor() {
    this.onChangeCallback = null;
    this.currentItem = null;
    this.engVocabulary = "subway, an inhabitant, a load, garbage, opposite, law, kid, face, history, morning, research, ask, work, look, want, go, important, social".split(
      ", "
    );
    this.rusVocabulary = "метро, житель, груз, мусор, напротив, закон, ребенок, лицо, история, утро, исследование, спросить, работа, смотри, хочу, иди, важно, социальный".split(
      ", "
    );

    this.scores = 0;
  }
  setOnChangeCallback(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }

  setItem(item) {
    this.currentItem = item;
    this.currentItem.scores = this.scores;
    this.currentItem.onChangeCallback = this.onChangeCallback;
  }
  deleteWord(id) {
    this.engVocabulary.splice(id, 1);
    this.rusVocabulary.splice(id, 1);
  }
  check(input) {
    const index = this.rusVocabulary.findIndex((item) => item == input);
    this.scores = this.currentItem.check(index, this.scores);
    console.table(this.rusVocabulary);
  }
}
