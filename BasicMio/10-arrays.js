//array

// Declaración de un array

let myArray = [] // mejor usar esta forma
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Initialización de un array

myArray = [3]
myArray2 = new Array(3) // asi no asigna, lo que hace es reservar huecos de memoria

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4) //asi si asigtna valores

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "Mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "Mouredev", 37, true) //asi si asigtna valores

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3) // posisicon 0,1 y 2
myArray2[2] = "Brais"
//myArray2[0] = "Moure"
myArray2[1] = "Mouredev"
myArray2[4] = "Mouredev" // aunque no haya espacio reservado, lo añade

console.log(myArray2)

myArray = [] // va añadiendo espacio la array dinamicamente
myArray[2] = "Brais"
//myArray[0] = "Moure"
myArray[1] = "Mouredev"

console.log(myArray)

// Metodos comunes de los arrays

myArray = []

// push y pop - añadir y quitar elementos al final del array

myArray.push("Brais")
myArray.push("Moure")
myArray.push("Mouredev")
myArray.push("37")

console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo y lo devuelve si lo muestro, o se lo puedo asignar a una variable
let prueba = myArray.pop()
console.log(prueba)

console.log(myArray) // quita el ultimo elemento

// unshift y shift - añadir y quitar elementos al principio del array

console.log(myArray.shift()) // quita el primer elemento
console.log(myArray)

myArray.unshift("Brais", "mouredev") // añade al principio, hay que pasarle los datos como argumentos
console.log(myArray)

//length - longitud del array. Es una propiedad, no un método

console.log(myArray.length)

// clear

myArray = [] // inicializas a vacio
myArray.length = 0 // asi vacias el array. Alternativa menos buena
console.log(myArray)

// slice - extraer una parte del array

myArray.push("Brais", "Moure", "Mouredev", 37, true)

let myNewArray = myArray.slice(1, 3) // extrae desde la posicion 1 hasta la 2, sin incluir la 3

console.log(myArray)
console.log(myNewArray)

//splice - añadir o quitar elementos de un array

myArray.splice(1, 3) // quita desde la posicion 1, 3 elementos
console.log(myArray)

myArray = ["Brais", "Moure", "Mouredev", 37, true]
myArray.splice(1, 2, "Nueva entrada") // quita desde la posicion 1, 2 elementos y añade "Nueva entrada"
console.log(myArray)
