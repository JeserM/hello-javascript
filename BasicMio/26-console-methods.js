// console

// log

console.log("¡Hola, javascript!")

// error

console.error("¡Este es un mensjae de error!")
console.error("¡Error al conectarse a la base de datos!", new Error("Conexion fallida"))

// warn

console.warn("¡Este es un mensaje de advertencia!")

// info

console.info("¡Este es un mensaje de información adicional!")

// table

let data = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 21 },
    { name: "Maria", age: 25 },
]

console.table(data)

// group,

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()

console.group("Usuario fuera del grupo:")

// time

console.time("Tiempo de ejecución")

for (let i = 0; i < 10000; i++) {
    // console.log(i)
}

console.timeEnd("Tiempo de ejecución") // Hay que poner el mismo texto que al inicio. Si nmo cierro el grupo, no se muestra el tiempo.

// assert

let age = 17
console.assert(age >= 18, "Tienes que ser mayor de edad para poder acceder a esta página") // Si la condición es falsa, muestra el mensaje de error.

// count. Cuenta cuantas veces se ha llamado a una etiqueta específica.

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace, muestra la pila de llamadas de una función.

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()

// clear

// console.clear() // Limpia la consola.
