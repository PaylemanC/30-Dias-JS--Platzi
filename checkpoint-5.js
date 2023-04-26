//Con patrón OBSERVER -- Observador: 
class User {
    constructor(name) {
      this.name = name;
    }

    notify(task) {
      console.log(`La tarea ${task.id} fue completada con éxito.`)
    }
}

//Con patrón OBSERVER -- Observable: 
class Task{
    constructor(id, description){
      this.id = id;
      this.description = description;
      this.completed = false;
      this.users = [];
    }
 
    assignUser(user) {
       if (user instanceof User) {
          this.users.push(user);
       } else {
          throw new Error("Usuario no encontrado.")
       }
    }
 
    completeTask() {
       this.completed = true;
       this.notifyUsers();
    }
 
    notifyUsers() {
      this.users.forEach(user => user.notify(this));
    }
}

//Con patrón SINGLETON:
class TaskManager {
    constructor() {}
 
    static getInstance() {
       if (!TaskManager.instance) {
          this.tasks = [];
          TaskManager.instance = new TaskManager();
       }
       return TaskManager.instance;
    }
 
    addTask(task){
       if (task instanceof Task) {
          TaskManager.tasks.push(task);
       } else {
          throw new Error("Tarea inválida.")
       }
    }
 
    getTasks(){
       return TaskManager.tasks;
    }
 
    getTaskById(id) {
       return TaskManager.tasks.find(task => task.id === id) || null
    }
}

//Con BUILDER PATTERN:
class TaskBuilder {
    constructor() {
       this.task = new Task(0, "")
    }
 
    setId(id) {
       this.task.id = id;
       return this;
    }
 
    setDescription(description) {
       this.task.description = description;
       return this;
    }
 
    setCompleted(completed) {
       this.task.completed = completed;
       return this;
    }
 
    setUsers(users) {
       this.task.users.push(...users);
       return this;
    }
 
    setDeadline(deadline) {
       this.task.deadline = deadline;
       return this;
    }
 
    setPriority(priority) {
       this.task.priority = priority;
       return this;
    }
 
    build() {
       return this.task;
    }
}

//Con DECORATOR PATTERN:
class TaskDecorator {
    constructor(task, options) {
       this.task = task;
       this.deadline = options.deadline;
       this.priority = options.priority;
    }
 
    assignUser(user) {
       this.task.assignUser(user);
    }
 
    completeTask() {
       this.task.completeTask();
    }
 
    notifyUsers() {
       this.task.notifyUsers(this);
    }
}

//Con patrón PROXY:
class Authorization {
    checkAuthorization(user, task) {
      if (task.users.includes(user)) {
        return true;
      } else {
        throw new Error("No autorizado.")
      }
    }
}