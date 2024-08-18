// Funciones

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFunctionWithParams(name) {
    console.log(`Hola, ${name}!!`)
}
myFunctionWithParams(`Jeser`)
myFunctionWithParams(`Pepe`)

// Funciones anonimas
// let myFunction = function(name) hay que declararla antes de usarla, asignarla a una variable, se usan para callbacks

const myFunc2 = function (name) {
    console.log(`Hola, ${name}!!`)
}

myFunc2("Jeser, func anonima")

// Arrow functions
// let myFunc3 = (name) => {console.log(`Hola, ${name}!!`)}

const myFunc3 = (name) => {
    console.log(`Hola, ${name}!!`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}!!`)

myFunc3("Jeser, arrow func")
myFunc4("Jeser, arrow func en una sola linea")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)

sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// POr defecto, si no se pasa un valor, se toma el valor por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum((b = 5))

// Retorno de valores

function mult(a, b) {
    return a * b
}

console.log(mult(5, 10))
let result = mult(5, 1)
console.log(result)

// Funciones anidadas (dentro de una función, otra función)

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() // Error. No se puede acceder a la función interna desde fuera de la función externa. EL Scope de la función interna es la función externa y no se puede acceder desde fuera de la función externa a la función interna       rror. No se puede acceder a la función interna desde fuera de la función externa. EL Scope de la función interna es la función externa y no se puede acceder desde fuera de la función externa a la función interna
// extern().intern() //Error: fuera
// extern()() //Error: fuera

// Funciones de orden superior,
// funciones que reciben funciones como argumentos. Anidamos funciones

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "Función de orden superior")

// forEach
// es un método de los arrays que recibe una función como argumento y la aplica a cada uno de los elementos del array

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "Mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "brasimoure@mouredev.com"],
    ["age", 37],
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))

// Mas sobre parametros. Parametros rest y spread

// Parametros rest

function restParams(a, b, ...rest) {
    console.log(a)
    console.log(b)
    console.log(rest)
}

restParams(1, 2, 3, 4, 5, 6, 7)

// Parametros spread

function spreadParams(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

let myArray2 = [1, 2, 3]
spreadParams(...myArray2)
//spreadParams(...myArray2, 4, 5, 6, 7, 8, 9, 10) // se pueden añadir más valores

/* Parametros nombrados en funciones. Se pueden pasar los valores en cualquier orden y se asignan a los parametros por nombre
https://www.youtube.com/watch?v=jmxZrIHPRDg&t=11s */

function namedParams({ a, b, c }) {
    console.log(a)
    console.log(b)
    console.log(c)
}

namedParams({ c: 3, b: 2, a: 1 })

function createGodzilla(color, weight = 200, sound, powers) {
    console.log(color)
    console.log(weight)
    console.log(sound)
    console.log(powers)
}

createGodzilla("green", undefined, "roar", "fire")

function createGodzilla2({ color, weight = 200, sound, material, powers }) {
    console.log(color)
    console.log(weight)
    console.log(sound)
    console.log(powers)
    console.log(material)
}

createGodzilla2({ color: "violeta", sound: "Miau", powers: "rainbown" })

const godzillaParams = {
    color: "azulado",
    sound: "rugido",
    powers: "electrico",
    material: "goma",
}
createGodzilla2(godzillaParams)
createGodzilla(godzillaParams) // mete todo el objeto en el primer parametro
