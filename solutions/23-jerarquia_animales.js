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
/*Animal { 
	name: 'pepe', 
	age: 1, 
	specie: 'bird' 
}*/

const hippo = new Mammal("bartolo", 3, "hippo", false)
console.log(hippo.getInfo()); 
/*Mammal { 
	name: 'bartolo', 
	age: 3, 
	specie: 'hippo' ,
	hasFur: false
}*/

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.bark()); //woof!