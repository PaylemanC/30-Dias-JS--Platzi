class Newsletter {
  //OBSERVABLE:
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(email) {
    const removedSubscriber = this.subscribers.findIndex((subscriber) => subscriber.email === email)
    return this.subscribers.splice(removedSubscriber, 1);
  }

  post(article) {
    this.subscribers.forEach(subscriber => {
      subscriber.receive(article);
    });
  }
}

class Subscriber {
  // OBSERVADOR
  constructor(email) {
    this.email = email;
  }

  receive(article) {
    console.log(`El suscriptor ${this.email} ha recibido el artículo: ${article.title}`)
  }
}

const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com");
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");

const article = {
  title: "30 días de js",
  content: "Aprende js en 30 días"
}

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);
/*
"El suscriptor pepe@mail.com ha recibido el artículo: 30 días de js"
"El suscriptor juanito@mail.com ha recibido el artículo: 30 días de js"
"El suscriptor pedro@mail.com ha recibido el artículo: 30 días de js"
*/ 