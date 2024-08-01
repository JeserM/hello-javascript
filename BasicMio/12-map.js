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

myMap.set("alias", "Mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get - obtener un valor a partir de la clave

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has - comprobar si existe una clave

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete - eliminar un par clave-valor

myMap.delete("email")

console.log(myMap)

// keys, values y entries - obtener todas las claves o valores

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//size - obtener el número de pares clave-valor

console.log(myMap.size)

// clear - eliminar todos los pares clave-valor

myMap.clear()

console.log(myMap)
