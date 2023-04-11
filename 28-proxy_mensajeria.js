class Messages {
    // No debes editar esta clase ❌
    constructor() {
      this.history = [];
    }
  
    sendMessage(text) {
      this.history.push(text);
    }
  
    getHistory() {
      return this.history;
    }
}

class User {
    constructor(name) {
      this.name = name;
      this.isLogged = false;
    }
  
    login() {
      this.isLogged = true;
    }
  
    logout() {
      this.isLogged = false;
    }
  
    isLoggedIn() {
      return this.isLogged;
    }
}

class MessagesProxy {
    constructor(messages, user) {
      this.messages = messages;
      this.user = user;
    }
  
    sendMessage(text) {
      if (this.user.isLoggedIn()) {
        return this.messages.sendMessage(text);
      } else {
        throw new Error("Usuario no registrado");
      }
    }
  
    getHistory() { 
      if (this.user.isLoggedIn()) {
        return this.messages.history;
      } else {
        throw new Error("Usuario no registrado");
      }
    }
}

const user = new User("John");
user.login();
console.log(user.isLoggedIn());

const messages = new Messages();
const messagesProxy = new MessagesProxy(messages, user);
user.login();
messagesProxy.sendMessage("Hola");
console.log(messagesProxy.getHistory());

const user2 = new User("John");
const messages2 = new Messages();
const messagesProxy2 = new MessagesProxy(messages2, user2);
messagesProxy2.sendMessage("Hola");