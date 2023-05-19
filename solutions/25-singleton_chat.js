class User {
    // Esta clase no debe ser editada ❌
    constructor(name) {
      this.name = name;
      this.messages = [];
    }
  
    receiveMessage(message) {
      this.messages.push(message);
    }
  }

class Chat {
    constructor() {
      if (!Chat.instance) {
        this.users = [];
        Chat.instance = Object.freeze(this);
      }
      return Chat.instance;
    }
  
    sendMessage(message) {
      this.users.forEach(user => user.receiveMessage(message));
    }
  
    addUser(user) {
      if (user instanceof User) {
        this.users.push(user);
      }
    }
  
    removeUser(name) {
      const deletedUser = this.users.findIndex(user => user.name === name);
      this.users.splice(deletedUser, 1);
    }
}

const chat1 = new Chat();
const chat2 = new Chat();
console.log(chat1 === chat2) //true

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages) //["Nunca pares de aprender!"]
console.log(user2.messages) //["Nunca pares de aprender!"]