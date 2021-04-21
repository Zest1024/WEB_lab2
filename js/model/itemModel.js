export default class itemModel {
  constructor(length) {
    this.id = Math.floor(Math.random() * length);
    this.checked = null;
    this.onChangeCallback = null;
    this.scores = 0;
    this.next = false;
    return this.onItemChange();
  }
  check(russianWordID, scores) {
    if (this.id === russianWordID && !this.next) {
      this.checked = true;
      this.scores = scores + 1;
      this.next = !this.next;
      return this.scores;
    } else {
      if (!this.next) {
        this.checked = false;
        this.scores = scores;
        this.next = !this.next;
        return this.scores;
      } else {
        return this.scores;
      }
    }
  }
  onItemChange() {
    let handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.onChangeCallback) this.onChangeCallback();

        if (this.onChangeCallback && prop == "next")
          this.onChangeCallback(this);

        return true;
      },
    };
    return new Proxy(this, handler);
  }
}
