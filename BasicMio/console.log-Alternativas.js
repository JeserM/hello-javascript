/* Alternativas a console.log */

console.log("¡Hola, consola!")

// Nivel de log
console.info("Información")
console.warn("Advertencia")
console.error("Error")
console.debug("Depuración")

// Lista interactiva

const data = {
    name: "Brais",
    surname: "Moure",
    age: 37,
    job: {
        title: "Developer",
        company: "MoureDev",
    },
}
console.dir(data)

// Pila de llamadas

console.trace("Traza ejecución")

// Formato tabla

console.table({ name: "Brais", surname: "Moure", alias: "Mouredev" })

// Grupos

console.group("Datos personales")
console.log("Brais")
console.log("Moure")
console.groupEnd()
console.group("Datos laborales")
console.log("Programador")
console.log("braismoure.dev")
console.groupEnd()

// Metricas

console.time("Ejecución 1")
console.timeEnd("Ejecución 1")
