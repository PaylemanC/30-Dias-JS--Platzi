function hotelSystem(rooms) {
    let reservations = [];
  
    function dateToNumber(dateString) {
        return parseInt(dateString.split("/").reverse().join(""));
    }
  
    function getBookedRooms(checkIn, checkOut, roomNumber) {
        const checkInInt = dateToNumber(checkIn);
        const checkOutInt = dateToNumber(checkOut);
  
        return reservations.find(res => {
            const resCheckIn = dateToNumber(res.checkIn);
            const resCheckOut = dateToNumber(res.checkOut);
            return res.roomNumber == roomNumber && ((resCheckIn <= checkInInt && checkInInt <= resCheckOut) || (resCheckOut <= checkOutInt && checkOutInt <= resCheckOut))
        })
    }

    const searchReservation = (id) => {
        const result = reservations.find(reservation => reservation.id == id);
        if (!result) {
          throw new Error("La reservación no fue encontrada.")
        }
        return result
    }

    const getSortReservations = () => reservations.sort((a, b) => dateToNumber(a.checkIn) - dateToNumber(b.checkIn));
  
    const addReservation = ({ id, name, checkIn, checkOut, roomNumber }) => {
        if (getBookedRooms(checkIn, checkOut, roomNumber)) {
            throw new Error("La habitación no está disponible");
        } else if (roomNumber > rooms) {
            return "La habitación no existe.";
        } else if (reservations.some(res => res.id === id)) {
            return "Ya existe una habitación con el id: " + id;
        }
        reservations.push({ id, name, checkIn, checkOut, roomNumber });
        return "La habitación fue reservada con éxito.";
    }

    const removeReservation = (id) => {
        const index = reservations.findIndex(res => res.id === id);
        if (index >= 0) {
          return reservations.splice(index, 1)[0];
        } else {
          throw new Error("No existe una habitacion con el id: " + id);
        }
    }

    const getReservations = () => reservations;

    const getAvailableRooms = (checkIn, checkOut) => {
        const availableRooms = [];
        for (let i = 1; i <= rooms; i++) {
          if (!getBookedRooms(checkIn, checkOut, i)) {
            availableRooms.push(i);
          }
        }
        return availableRooms;
    }

    return { searchReservation, getSortReservations, addReservation, removeReservation, getReservations, getAvailableRooms }
}

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

console.log(hotel.getReservations());
/*[
  {
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  }
]*/

hotel.addReservation({
    id: 2,
    name: "Pepe Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 7,
});

console.log(hotel.searchReservation(2));
/*{
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
}*/

console.log(hotel.getAvailableRooms("01/01", "05/01")); //[2, 3, 4, 5, 6, 7, 8, 10]