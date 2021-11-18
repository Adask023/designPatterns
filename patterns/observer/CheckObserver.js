class CheckObserver {
  constructor() {

  }

  update(model) {
    if (model.color === "red"){
      console.log('--- RED TRIGGER --- NUMBER RESET ---')
      model.resetNumber()
    }
  }
}