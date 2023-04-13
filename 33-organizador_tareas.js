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

const myTaskManager = taskManager()
addTask("Comprar leche", ["compras", "urgente"]);
addTask("Sacar al perro", ["mascotas"]);
addTask("Hacer ejercicio", ["salud"]);
addTask("Comprar leche", ["lácteos"]);

printTasks();