class Reservation {
  constructor(flight, passenger) {
    this.flight = flight;
    this.passenger = passenger;
  }

  reservationDetails() {
    return {
      "origin": this.flight.origin,
      "destination": this.flight.destination,
      "date": this.flight.date,
      "reservedBy": this.passenger.fullName
    }
  }
} 

class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      let reservation = new Reservation(this, passenger);
      this.passengers.push({
        fullName: passenger.fullName,
        age: passenger.age
      });
      passenger.addFlight(this);
      this.capacity--;
      return reservation;
    }
  }
}

class Passenger {
  constructor(name, lastName, age) {
    this.fullName = name + " " + lastName;
    this.age = age;
    this.flights = [];
  }

  addFlight(flight) {
    this.flights.push(
      {
        'origin': flight.origin,
        'destination': flight.destination,
        'date': flight.date,
        'price': flight.price
      })
  }
}

class EconomicFlight extends Flight {
  sellTicket(passenger) {
    if (passenger.age < 18 || passenger.age > 65) {
      this.price *= 0.80
    }
    return super.sellTicket(passenger);
  }
}

class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price);
    this.price += specialService;
  }

  sellTicket(passenger) {
    return super.sellTicket(passenger);
  }
}