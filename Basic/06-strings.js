//strings

//conmcatenación de strings
let myName = "Jeser"
let greeting = "Hola, " + myName + "!"//saludo
console.log(greeting)
console.log(typeof greeting)

// Longitud de un string
console.log(greeting.length)

//accder a un caracter de un string
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[12])
console.log(greeting[11])


// Métodos de strings, comunes
console.log(greeting.toUpperCase()) // Convierte a mayúsculas
console.log(greeting.toLowerCase()) // Convierte a minúsculas
console.log(greeting.indexOf("Hola")) // Devuelve la posición de la primera ocurrencia de un valor especificado en una cadena 
console.log(greeting.indexOf("Jeser")) // Devuelve la posición de la primera ocurrencia de un valor especificado en una cadena 
console.log(greeting.indexOf("Martin"))
console.log(greeting.includes("Hola")) // Devuelve true si la cadena contiene el valor especificado, y false si no 
console.log(greeting.includes("Jeser"))
console.log(greeting.includes("Martin"))
console.log(greeting.slice(0, 10)) // Extrae una parte de una cadena y devuelve una nueva cadena
console.log(greeting.replace("Jeser", "Martin")) // Busca un valor en una cadena y devuelve una nueva cadena donde el valor especificado se reemplaza por otro valor    

//Template literals (plantillas de cadena de texto)
let message = `Hola, este 
es mi
curso de 
javascript`

console.log(message)

console.log(`Hola, ${myName}!`) // Interpolación de variables   con acento invertido
console.log("Hola, ${myName}!") // No vale con comillas dobles
