/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
    return a + b
}

console.log(sum(5, 10))

const sumArrow = (a, b) => {
    suma = a + b
    return suma
}
console.log(sumArrow(5, 10))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function numMayor(array) {
    let mayor = 0
    for (let num of array) {
        if (num > mayor) {
            mayor = num
        }
    }
    return mayor
}

myArray = [1, 2, 25, 4, -1, 5, 6, 7, 8, 9, 10]
console.log(`El mayor es: ${numMayor(myArray)}`)

const numMayorArrow = (array) => {
    let mayor = 0
    for (let num of array) {
        if (num > mayor) {
            mayor = num
        }
    }
    return mayor
}
console.log(`El mayor es: ${numMayor(myArray)}`)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numVocales(string) {
    let vocales = 0
    for (let letra of string) {
        if (
            letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u"
        ) {
            vocales++
        }
    }
    return vocales
}

let mystring = "Hola que tal por aqui"
let vocales = numVocales(mystring)
console.log(`El número de vocales es: ${vocales}`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function strinToMayus(array) {
    let arrayMayus = []
    for (let string of array) {
        arrayMayus.push(string.toUpperCase())
    }
    return arrayMayus
}

myArray = ["Saludos", "Hola", "Adios", "Hasta luego"]
console.log(strinToMayus(myArray))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
    if (num / 2 == 0) {
        return false
    } else {
        return true
    }
}
let num = 2
console.log(`Es primo el ${num} : ${esPrimo(num)}`) // true

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado
