/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Pepa"
if (name === "Jeser") {
  console.log(name)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Jeser"
let password = "12345"

if (user === "Jeser" && password === "1234") {
  console.log("Usuario y contraseña correctos")
} else {
  console.log("Usuario o contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 1
if (number === 0) {
  console.log("El número es 0")
} else if (number > 0) {
  console.log("El número es positivo")
} else {
  console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 17
if (age >= 18) {
  console.log("Puede votar")
} else {
  console.log(`No puede votar, le faltan ${18 - age} años`)
}

if (age >= 18) {
  console.log("Puede votar")
} else {
  //let years = 18 - age
  //console.log("No puede votar, le fatan:"+ years + " años")
  console.log(`No puede votar, le faltan ${18 - age} años`)
}

let canVote =
  age >= 18
    ? "Puede votar PLUS"
    : `No puede votar, le faltan ${18 - age} años PLUS`
console.log(canVote)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let adult = age >= 18 ? "Si es adulto" : "No es adulto"
console.log("Es adulto:", adult)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = "Febrero"
month = month.toLowerCase()
console.log(month)
if (month == "enero" || month == "febrero" || month == "diciembre") {
  console.log("Es invierno")
} else if (month == "abril" || month == "mayo" || month == "marzo") {
  console.log("Es primavera")
} else if (month == "julio" || month == "agosto" || month == "junio") {
  console.log("Es verano")
} else if (
  month == "octubre" ||
  month == "noviembre" ||
  month == "septiembre"
) {
  console.log("Es otoño")
} else {
  console.log("Mes incorrecto")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (
  month == "enero" ||
  month == "marzo" ||
  month == "mayo" ||
  month == "julio" ||
  month == "agosto" ||
  month == "octubre" ||
  month == "diciembre"
) {
  console.log("El mes tiene 31 días")
} else if (
  month == "abril" ||
  month == "junio" ||
  month == "septiembre" ||
  month == "noviembre"
) {
  console.log("El mes tiene 30 días")
} else if (month == "febrero") {
  console.log("El mes tiene 28 o 29 días")
} else {
  console.log("Mes incorrecto")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let lang = "fr"
switch (lang) {
  case "es":
    console.log("Hola")
    break
  case "en":
    console.log("Hello")
    break
  case "fr":
    console.log("Bonjour")
    break
  default:
    console.log("Idioma no soportado")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

month = "abril"
month = month.toLowerCase()
console.log(month)
switch (month) {
  case "enero":
  case "febrero":
  case "diciembre":
    console.log("Es invierno")
    break
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Es primavera")
    break
  case "junio":
  case "julio":
  case "agosto":
    console.log("Es verano")
    break
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Es otoño")
    break
  default:
    console.log("Mes incorrecto")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (month) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log("El mes tiene 31 días")
    break
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("El mes tiene 30 días")
    break
  case "febrero":
    console.log("El mes tiene 28 o 29 días")
    break
  default:
    console.log("Mes incorrecto") // no hace falta break porque es el último
}

/* Cosas varias



*/

//let initialCounter = 0;
let initialCounter = null
// let initialCounter = null;
// let initialCounter;
0 // --> falsy

//initialCounter = initialCounter ?? 25
/* En el fragmento de código proporcionado, se está utilizando el operador de asignación de nulish (??=) para manejar el valor de la variable initialCounter.

Primero, se aplica el operador de asignación de nulish:

El operador ??= asigna el valor a la derecha (25 en este caso) a initialCounter solo si initialCounter es null o undefined. 
Esto es útil para establecer un valor predeterminado solo cuando la variable no tiene un valor definido.
*/
console.log(`Con operador falsy ?? `, initialCounter)

initialCounter ??= 25
console.log(initialCounter)

//initialCounter = initialCounter || 25;
initialCounter = 1
// let initialCounter = null;
// let initialCounter;
/* se utiliza el operador de asignación lógica ||=:

Este operador asigna el valor a la derecha (25 en este caso) a initialCounter solo si initialCounter es falsy (es decir, null, undefined, 0, false, NaN, o una cadena vacía ""). 
Dado que initialCounter es null, que es un valor falsy, se le asignará el valor 25.

En resumen, este código inicializa initialCounter a null, lo imprime, y luego le asigna 25 porque su valor inicial era falsy. */
console.log(`COn operador OR ${initialCounter}`)

initialCounter ||= 25
console.log(initialCounter)
