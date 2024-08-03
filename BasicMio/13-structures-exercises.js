/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

let arrayAnimals = ["perro", "gato", "caballo", "vaca", "cabra"]
console.log(arrayAnimals)

// 2. Añade dos más. Uno al principio y otro al final

console.log(arrayAnimals.unshift("cerdo"))
console.log(arrayAnimals.push("oveja"))
console.log(arrayAnimals)

// 3. Elimina el que se encuentra en tercera posición

console.log(arrayAnimals.splice(2, 1))
console.log(arrayAnimals)

// 4. Crea un set que almacene cinco libros

setBooks = new Set(["book1", "book2", "book3", "book4", "book5"])
console.log(setBooks)

// 5. Añade dos más. Uno de ellos repetido

console.log(setBooks.add("book6", "book7")) // no se puede añadir asi
console.log(setBooks.add("book7")) //
console.log(setBooks.add("book7")) // no añade si ya existe

// 6. Elimina uno concreto a tu elección

console.log(setBooks.delete("book2"))
console.log(setBooks)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mapMonths = new Map([
  [1, "Enero"],
  [2, "Febreo"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
])
console.log(mapMonths)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mapMonths.has(5))

if (mapMonths.has(5)) {
  console.log(mapMonths.get(5))
}

mapMonths.has(5) ? console.log(mapMonths.get(5)) : console.log("No existe")

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mapMonths.set("summer", ["junio", "julio", "agosto"])
console.log(mapMonths.get("summer"))

let verano = mapMonths.get("summer")
console.log(typeof verano, verano)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = [1, 2, 3, 4, 5]
console.log(array)
let set = new Set(array)
console.log(set)
let map = new Map([["miSet", set]])
console.log(map)

// Paso 1: Crear un array con algunos elementos
const array2 = [1, 2, 3, 4, 5, 1, 2]

// Paso 2: Transformar el array a un Set para eliminar duplicados
const set2 = new Set(array2)

// Paso 3: Crear un Map y almacenar el Set en el Map con una clave específica
const map2 = new Map()
map2.set("miSet2", set2)

// Imprimir el Map para verificar
console.log(map2)
