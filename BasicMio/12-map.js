// Map es una estructura de datos que almacena pares clave-valor

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
  ["name", "Brais"],
  ["email", "brasimoure@mouredev.com"],
  ["age", 37],
])

console.log(myMap)

// Métodos y propiedades

// set - añadir un par clave-valor o actualizarlo

myMap.set("alias", "Mouredev") // añade un nuevo par clave-valor
myMap.set("name", "Brais Moure") // actualiza el valor de una clave existente

console.log(myMap)

// get - obtener un valor a partir de la clave

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has - comprobar si existe una clave

console.log(myMap.has("surname")) // false, no existe la clave
console.log(myMap.has("age")) // true, existe la clave

// delete - eliminar un par clave-valor

myMap.delete("email")

console.log(myMap)

// keys, values y entries - obtener todas las claves o valores

console.log(myMap.keys()) // devuelve un objeto iterable, un listado, no un array.
console.log(myMap.values()) // values devuelve los valores,
console.log(myMap.entries()) // entries devuelve los pares clave-valor

//size - obtener el número de pares clave-valor

console.log(myMap.size)

// clear - eliminar todos los pares clave-valor

myMap.clear()

console.log(myMap)
