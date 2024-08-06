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
// let myFunction = function(name) hay que declararla antes de usarla, asignarla a una variable

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
