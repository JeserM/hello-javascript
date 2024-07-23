// 1. Concatena dos cadenas de texto
let string1 = "Hola"
let string2 = "Mundo"
let string3 = string1 + " " + string2
console.log(string3)

// 2. Muestra la longitud de una cadena de texto
console.log(string3.length)

// 3. Muestra el primer y último carácter de un string
console.log(string3[0]," y ",string3[9])
console.log(string3[0]," y ", string3[string3.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(string3.toUpperCase())
console.log(string3.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let message = `Este 
es un 
mensaje 
en varias 
lineas`
console.log(message)
console.log(typeof message)

// 6. Interpola el valor de una variable en un string
console.log(`Hola, ${message}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(string3.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(string3.includes("ola"))

// 9. Comprueba si dos strings son iguales
let stringA = "Hola"
let stringB = "Hola"
console.log(stringA === stringB)
console.log(stringA == stringB)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(stringA.length === stringB.length)
console.log(stringA.length == stringB.length)