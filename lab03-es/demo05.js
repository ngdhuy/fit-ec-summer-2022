/**
 * Object
 */

class Animal {
  // use constructor to define attribute
  constructor(val, name = 'no-name') {
    // define attribute for class
    this.value = val;
    this.name = name;
  }

  show() {
    console.log(`Value of class is: ${this.value} and name is ${this.name}`);
  }
}

class Dog extends Animal {
  constructor() {
    super(99, 'Dog');
  }
}

let dog = new Dog();
dog.show();