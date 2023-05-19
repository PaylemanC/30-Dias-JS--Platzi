class Car {
    constructor(
      brand,
      model,
      year,
      mileage = 0,
      state = false
    ) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
      this.state = state;
    }
  
    turnOn() {
      this.state = true;
    }
  
    turnOff() {
      this.state = false;
    }

    drive(kilometers) {
      if (!this.state) {
        throw new Error("El auto está apagado")
      } else {
        this.mileage += kilometers;
        return this.mileage;
      }
    }
}

const toyota = new Car ("Toyota", "Corolla", 2020, 0);
console.log(toyota.state); //false
toyota.turnOn();
console.log(toyota.state); //true
toyota.drive(100);
console.log(toyota.mileage); //100
toyota.turnOff();
toyota.drive(100); //Error: El auto está apagado