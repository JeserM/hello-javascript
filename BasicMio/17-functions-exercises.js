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
    if (num / 1 == num && num / num == 1 && num != 1) {
        return true
    } else {
        return false
    }
}
let num = 62
console.log(`Es primo el ${num} : ${esPrimo(num)}`) // true
//! PENSARLO MEJOR, no esta hecho correctamente

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(array1, array2) {
    let arrayComunes = []
    for (let element of array1) {
        if (array2.includes(element)) {
            arrayComunes.push(element)
        }
    }
    return arrayComunes
}

let array1 = [1, 2, 3, 4, 5, "hola", "adios"]
let array2 = [3, 4, 5, 6, 7, "hola", "adios", "saludos"]

console.log(elementosComunes(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaParesArray(array) {
    let suma = 0
    for (let num of array) {
        if (num % 2 == 0) {
            console.log(suma, num)
            suma = suma + num
        }
    }
    return suma
}

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumaParesArray(arrayNum))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrayCuadrado = arrayNum.map((num) => num ** 2)

console.log(arrayCuadrado)

arrayCuadrado2 = arrayNum.map(function (num) {
    return num ** 2
})

console.log(arrayCuadrado2)

//arrayCuadrado =  []

function cuadradoArray(array) {
    let arrayCuadrado = []
    for (let num of array) {
        arrayCuadrado.push(num ** 2)
    }
    return arrayCuadrado
}
console.log(`con funcion: ${cuadradoArray(arrayNum)}`)

arrayCuadrado = cuadradoArray(arrayNum)
console.log(arrayCuadrado)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function inversoString(string) {
    let stringInverso = ""
    for (let i = string.length - 1; i >= 0; i--) {
        stringInverso += string[i]
    }
    return stringInverso
}

function inversoString2(string) {
    let stringInverso = ""
    let nuevoInicio = 0
    for (let i = 0; i < string.length; i++) {
        //console.log("fuera de if ", i, string[i])
        if (string[i] === " ") {
            stringInverso = string.slice(nuevoInicio, i + 1) + stringInverso
            //console.log(`dentro de if `, i, string[i], stringInverso)
            nuevoInicio = i + 1
        } else if (i === string.length - 1) {
            stringInverso = string.slice(nuevoInicio, i + 1) + ` ` + stringInverso
            //console.log(`dentro de if `, i, string[i], stringInverso)
            break
        }
    }
    return stringInverso
}

function inversoString3(string) {
    let array = string.split(" ")
    let arrayInverso = array.reverse()
    let stringInverso = arrayInverso.join(" ")
    return stringInverso
}

mystring = `Hola que tal por aqui`
// console.log(mystring.length)
// console.log(mystring.length - 1)
// console.log(mystring[0], ` `, mystring[mystring.length])
console.log(inversoString(mystring))
console.log(inversoString2(mystring))
console.log(inversoString3(mystring))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num) {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        //factorial = factorial * i
        factorial *= i
    }
    return factorial
}

const factorial2 = (num) => {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    return factorial
}

//const factorial3 = (num) => let factorial = 1; for (let i =1; i<=num; i++){factorial *= i}; return factorial

console.log(factorial(5)) // 120
console.log(factorial(3)) // 6
console.log(factorial(10)) // 3628800

console.log(factorial2(5)) // 120
console.log(factorial2(3)) // 6
console.log(factorial2(10)) // 3628800

console.log(factorial(1)) // 3628800
