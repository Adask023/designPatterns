class NumberModel {
  constructor() {
    this.number = 0;
    this.color = "red";
    this.observers = [];
  }

  increment() {
    // color and number change for object
    const colors = ["orange", "red", "green", "blue"];

    this.number++;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.notifyObservers();
  }

  addObserver(o) {
    this.observers.push(o);
  }

  resetNumber() {
    this.number = 0;
  }

  notifyObservers() {
    // pass this object to observer (with new parameters: color, number)
    for (let o of this.observers) {
      o.update(this);
    }
  }
}


