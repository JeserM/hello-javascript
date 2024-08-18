//Objects, los objetos son una estructura de datos que nos permite almacenar información de manera estructurada. Un objeto es un conjunto de propiedades, cada propiedad tiene un nombre y un valor. Las propiedades pueden ser de cualquier tipo de dato, incluso otros objetos. Los objetos son una de las estructuras de datos más importantes en JavaScript, ya que nos permiten modelar la información de una manera más compleja que los tipos de datos primitivos.

// Sintaxis

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
}

// Acceso a propiedades

// Notacion de punto, mas recomendada

console.log(person.name)

// Notacion de corchetes

console.log(person["name"])

// Modificacion de propiedades

person.name = "Brais Moure"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age) // 37, he sido capaz de modificar hasta el tipo de dato. Tipado debil, me permite modificar en tiempo de ejcucion
console.log(typeof person.age)

// Eliminacion de propiedades

delete person.age
console.log(person) // { name: 'Brais Moure', alias: 'MoureDev' }

// NUeva propiedad

person.email = "braismoure@mouredev.com"
person["age"] = 37

console.log(person)

// Metodos (funciones dentro de un objeto)

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
}

person2.walk() // La persona camina.

// Anidacion de objetos

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(
                `La persona de ${this.exp} años de experiencia. Tiene ${person3.age} años.`
            )
        },
    },
}

console.log(person3)
// Programador
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
//console.log(person3.job.work)
person3.job.work()

let person4 = {
    name: "Brais Moure",
    age: 37,
    alias: "MoureDev",
    email: `braismoure@mouredev.com`,
}

console.log(person)
console.log(person4)

console.log(person === person4) // false
console.log(person == person4) // false

console.log(person.name == person4.name) // true

// Iteracion de objetos

for (let key in person) {
    console.log(key + ": " + person[key])
}

// Funciones como objects. Es como si fuera un constructor de objetos. Util para crear objetos de un mismo tipo.
// para crear varias instancias de un objeto

function Person(name, age) {
    // Los tres puntits ya nos dice algo, deberia ser una clase. No es una buena practica
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)
