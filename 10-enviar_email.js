//*Si corres en local, recuerda cambiar: window.setTimeout(...) --> setTimeout(...)
function sendEmail(email, subject, body) {
    const promise = new Promise((resolve, reject) => {
      if (email && subject && body) {
        window.setTimeout(() => {
          const fullEmail = { email, subject, body };
          resolve(fullEmail);
        }, 2000)
      } else {
        window.setTimeout(() => {
          reject(new Error('Error: Hacen falta campos para enviar el email'));
        }, 2000)
      }
    });
    return promise;
}

console.log(
  sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Únete a los 30 días de JS"
  )
  .then(result => console.log(result))
)

console.log(
  sendEmail(
    "test@mail.com",
    "",
    "Únete a los 30 días de JS"
  )
  .then(result => console.log(result))
  .catch(error => console.log(error))
)

