// Cat Class
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

// Dog Class
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

// Bird Class (Corrected)
class Bird {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    if (this.species.toLowerCase() === 'parrot') {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}




