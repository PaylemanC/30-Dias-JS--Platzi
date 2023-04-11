class Animal {
	constructor(name, age, specie) {
	  this.name = name;
	  this.age = age;
	  this.specie = specie;
	}
  
	getInfo() {
	  return this;
	}
}
  
class Mammal extends Animal {
	constructor(name, age, specie, hasFur) {
	  super(name, age, specie);
	  this.hasFur = hasFur;
	}
	getInfo() {
	  return this;
	}
  
}
  
class Dog extends Mammal {
	constructor(name, age, breed, hasFur, specie = "dog") {
	  super(name, age, specie, hasFur);
	  this.breed = breed;
	}
	getInfo() {
	  return this;
	}
	bark() {
	  return ("woof!");
	}
}

const bird = new Animal("pepe", 1, "bird")
console.log(bird.getInfo());

const hippo = new Mammal("bartolo", 3, "hippo", false)
console.log(hippo.getInfo());

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.getInfo());