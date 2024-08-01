// set

// Declaración

let mySet = new Set()
//! let mySet2 = {} no es un set, es un objeto

console.log(mySet)

// Inicialización

mySet = new Set(
  "Brais",
  "Moure",
  "Mouredev",
  37,
  true,
  "braismoure@mouredev.com"
)
// no se puede hacer asi, solo se puede hacer con un array. TIENE QUE IR ENTRE CORCHETES

console.log(mySet)
mySet = new Set([
  "Brais",
  "Moure",
  "Mouredev",
  37,
  true,
  "braismoure@mouredev.com",
])
// asi si

console.log(mySet)

// Metodos comunes de los sets

// add y delete - añadir y quitar elementos

mySet.add("https://moure.dev")
console.log(mySet)

mySet.delete(6) // no se puede hacer asi, hay que pasarle el valor
mySet.delete("https://moure.dev") // si no existe, no pasa nada
console.log(mySet)

console.log(mySet.delete("Brais")) // devuelve true si lo ha eliminado, false si no lo ha eliminado. Lo elimina y retorna true
console.log(mySet.delete(4))
console.log(mySet)

// has - comprobar si existe un elemento

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size - tamaño del set. Es una propiedad, no un metodo

console.log(mySet.size)

// Convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a un set

mySet = new Set(myArray)
console.log(mySet)

/* No admite elementos duplicados. Tanto arrays como sets son iterables, son listas ordenadas de elementos. 
Pero los sets no admiten duplicados, los arrays si. Los sets no tienen indices, los arrays si. 
Los sets no tienen propiedades, los arrays si. Los sets no tienen metodos, los arrays si. 
Los sets no tienen longitud, los arrays si. Los sets no tienen orden
*/

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)

// limipiar un set
mySet.clear()
console.log(mySet)
