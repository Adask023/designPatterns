class HistoryObserver {
  constructor() {
    this.colorHistory = [];
  }

  update(model) {
    this.colorHistory.unshift(model.color[0].toUpperCase());

    let msg = "History(5): ";
    for (let i = 0; i < 5; i++) {
      if (this.colorHistory[i]) {
        msg += this.colorHistory[i] + " ";
      }
    }
    console.log(msg);
    console.log(this.colorHistory)

    this.colorHistory.forEach((color, index) => {
      try {
        if (this.colorHistory.length > 1) {
          if (color === this.colorHistory[index + 1]) {
            console.log(`Two ${color} in a row!!`)
          }
        }
      } catch (e) {
        console.log("check out of range");
      }
    });
  }
}
