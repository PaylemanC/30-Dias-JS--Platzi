const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
}
  
const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

function validateForm(formData, registeredUsers) {
    const requiredData = ['name', 'lastname', 'email', 'password'];
    if (!requiredData.every((data) => formData[data])) {
        throw new Error(`Faltan los siguientes campos: 
        ${requiredData.filter((data) => !formData[data]).join(', ')}`);
    } else if (registeredUsers.some(user => user.email === formData.email)) {
        throw new Error (`El usuario con el email asociado ${formData.email} ya existe.`)
    } else {
        registeredUsers.push({
            name: formData.name, 
            lastname: formData.lastname, 
            email: formData.email
        });
        return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`; 
    }
}

validateForm(formData, registeredUsers);