// Factory function to create animal objects
function animal(noOfLegs, vegetarian) {
  return {
    noOfLegs,
    vegetarian,
    eat() {
      return "eating...";
    },
    greet() {
      return `Hi, I have ${this.noOfLegs} legs.`;
    }
  };
}

// Example usage
let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.
// Constructor function to create animal objects
function AnimalCF(noOfLegs, vegetarian) {
  this.noOfLegs = noOfLegs;
  this.vegetarian = vegetarian;
}

AnimalCF.prototype.eat = function() {
  return "eating...";
};

AnimalCF.prototype.greet = function() {
  return `Hi, I have ${this.noOfLegs} legs.`;
};

// Example usage
let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.
// ES6 class to create animal objects
class AnimalES6 {
  constructor(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  }

  eat() {
    return "eating...";
  }

  greet() {
    return `Hi, I have ${this.noOfLegs} legs.`;
  }
}

// Example usage
let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
// Constructor function to create animal objects
function AnimalCF(noOfLegs, vegetarian) {
  this.noOfLegs = noOfLegs;
  this.vegetarian = vegetarian;
}

AnimalCF.prototype.eat = function() {
  return "eating...";
};

AnimalCF.prototype.greet = function() {
  return `Hi, I have ${this.noOfLegs} legs.`;
};

// Using .call() to create an animal object
let animalObj = {};
AnimalCF.call(animalObj, 4, true);

// Example usage
console.log(animalObj.noOfLegs); // 4
console.log(animalObj.vegetarian); // true
console.log(animalObj.eat()); // eating...
console.log(animalObj.greet()); // Hi, I have 4 legs.
