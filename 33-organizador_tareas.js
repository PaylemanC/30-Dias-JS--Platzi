function taskManager() {
    let tasks = new Map();
  
    function addTask(task, tags) {
      let duplicatedTask = task.toLowerCase();
      if (!tasks.has(duplicatedTask)) {
        tasks.set(duplicatedTask, new Set(tags));
      } else {
        tags.forEach(tag => tasks.get(duplicatedTask).add(tag));
      }
    }
    
    function printTasks() {
      return tasks; 
    }
    return { addTask, printTasks }
}

const myTaskManager = taskManager(); 
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);
console.log(myTaskManager.printTasks()); 
/*Map(3) {
  'comprar leche' => Set(2) { 'compras', 'urgente' },
  'sacar al perro' => Set(1) { 'mascotas' },
  'hacer ejercicio' => Set(1) { 'salud' }
}*/
myTaskManager.addTask("Comprar leche", ["lácteos"]);
console.log(myTaskManager.printTasks());
/*Map(3) {
  'comprar leche' => Set(3) { 'compras', 'urgente', 'lácteos' },
  'sacar al perro' => Set(1) { 'mascotas' },
  'hacer ejercicio' => Set(1) { 'salud' }
}*/