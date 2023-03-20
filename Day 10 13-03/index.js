class Stack {
  #maxSize;
  #container = [];
  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  push(element) {
    if (this.#container.length < this.#maxSize) this.#container.queue(element);
  }
  Pop() {
    this.#container.pop();
  }
  show() {
    console.log(this.#container);
  }
}

const fruits = ["apel", "pisang", "semangka", "salak", "apel"];
const newfruits = new Set(fruits);
console.log(newfruits);
