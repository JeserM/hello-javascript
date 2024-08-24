/* Desestructuracion. Spread Operator, nos permite extraer propiedades de un objeto y almacenarlas en variables independientes. 
También nos permite combinar objetos de una manera muy sencilla.
*/

myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración - Destructuring

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores por defecto. Si no encuentra el valor, asigna el valor por defecto

// [myValue0=0, myValue1, myValue2, myValue3, myValue4= 9] = myArray  Da error porque porque ya existina de antes

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 9] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos de un array. Se puede hacer con comas, pero no es recomendable.

let [myValue10, , , myValue13] = myArray
console.log(`Ignoro posicion 2 y 3, ${myValue10}`, myValue10)
console.log(`Ignoro posicion 2 y 3, ${myValue13}`, myValue13)

// Sintaxis objetos

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objetos con valores por defecto. No tiene mucho sentido, porque si no encuentra el valor, no asigna nada.
// Y da igual el orden en el que se pongan las variables, porque se asignan por el nombre de la propiedad.
// esas variables no existen, por lo que no se pueden asignar valores por defecto.

let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // No existe
console.log(age2) // No existe
console.log(alias2) // No existe
console.log(email)

// Sintaxis objetos con nuevos nombres de variables
// el orden no importa, lo que importa es el nombre de la propiedad.

let { name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

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

// let {name: name4,job: { name: jobName }} = person3
let {
    name: name4,
    job: { name: jobName },
} = person3
console.log(`de person3: `, name4)
console.log(`de person3.job: `, jobName)

// Propagación (...) - Spread Operator

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6] // Añade elementos
console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]
console.log(myArray3)

// Combinacion de arrays

let myArray4 = [...myArray, ...myArray2]

console.log(myArray4)

// Sintaxis objetos

let person4 = { ...person, email: "braismoure@mouredev.com" }

console.log(person4)

//copia de objetos

let person5 = { ...person }

console.log(person5)
