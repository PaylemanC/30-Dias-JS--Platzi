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

const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
const passenger = new Passenger("Juan", "Perez", 30);
const reservation = flight.sellTicket(passenger);
console.log(passenger.flights);
/*[
  {
    origin: "CDMX",
    destination: "Guadalajara",
    date: "2022-01-01",
    price: 1000,
  },
]*/
console.log(flight.passengers);
/*[
  {
    fullName: "Juan Perez",
    age: 30,
  },
]*/

const economicFlight = new EconomicFlight(
  "New York",
  "Paris",
  "2023-12-25",
  100,
  200
);
const passenger2 = new Passenger("Pedro", "Gutierrez", 17);
const reservation2 = economicFlight.sellTicket(passenger2);
console.log(reservation2.flight.price); //160