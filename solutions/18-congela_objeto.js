function protectDog(dog) {
    const clonedDog = Object.assign({}, dog);
    for (let prop in clonedDog) {
        if (typeof clonedDog[prop] === 'object') {
            Object.freeze(clonedDog[prop]);
        }
    }
    return Object.freeze(clonedDog);
}

let protectedDog = protectDog({
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
});

protectedDog.name = "Toro";
console.log(protectedDog.name); // "Romeo"