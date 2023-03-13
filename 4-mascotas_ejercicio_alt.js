const messagesPerro = [
    "Los cachorros necesitan pequeñas y frecuentes sesiones de juego",
    "Los perros a esta edad necesitan caminatas diarias y sesiones de juego",
    "Los perros viejos necesitan caminatas más cortas"
]
const messagesGato = [
    "Los gatitos necesitan frecuentes sesiones de juego",
    "Los gatos a esta edad necesitan jugar diariamente",
    "Los gatos viejos necesitan sesiones de juego más corta"
]
const messagesAve = [
    "Las aves jóvenes necesitan mucho espacio para volar",
    "Las aves necesitan jugar diariamente y un lugar para volar",
    "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"
]

function getPetExerciseInfo(type, age) {
    let message;    
    switch (type) {
        case "perro":     
          message = age < 1 ? messagesPerro[0] : (age < 7 ? messagesPerro[1] : messagesPerro[2]);
          return message;
          break;
  
        case "gato":     
          message = age < 1 ? messagesGato[0] : (age < 7 ? messagesGato[1] : messagesGato[2]);
          return message;
          break;
            
        case "ave":     
          message = age < 1 ? messagesAve[0] : (age < 7 ? messagesAve[1] : messagesAve[2]);
          return message;
          break;
        
        default:
          return "Tipo de mascota inválida";
          break;
    }
  }
  
  console.log(getPetExerciseInfo("perro", 3)); //Los perros a esta edad necesitan caminatas diarias y frecuentes sesiones de juego
  console.log(getPetExerciseInfo("gato", 8)); //Los gatos viejos necesitan sesiones de juego más cortas
  console.log(getPetExerciseInfo("Mamut", 25)); //Tipo de mascota inválida