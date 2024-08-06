/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i
}
console.log(suma)

suma = 0
let i = 1
while (i <= 100) {
    suma += i
    i++
}
console.log(suma)

i = 1
suma = 0
do {
    suma += i
    i++
} while (i <= 100)
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

let stringPar = ""
let stringImpar = ""
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        stringPar = stringPar + i + ","
    } else {
        stringImpar = stringImpar + i + ","
    }
}
console.log(`Los pares son: ${stringPar}`)
console.log(`Los impares son: ${stringImpar}`)

let setPar = new Set()
let setImpar = new Set()
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        setPar.add(i)
    } else {
        setImpar.add(i)
    }
}
console.log(`Los pares son`, setPar) // No se puede hacer un console.log de un set directamente
console.log(`Los impares son`, setImpar)
console.log(`Los pares son: ${setPar}`) // Object Set
console.log(`Los impares son: ${setImpar}`) // Object Set
console.log(`Los pares son: ${[...setPar]} - CONVERTIDO CON UN SPREAD`) // Spread operator, convierte un set en un array de elementos porque el console.log no puede imprimir un set
// lo convierto a array
arrayPar = Array.from(setPar)
console.log(`Los pares son: ${arrayPar} - CONVERTIDO CON Array.from`) // Spread operator, convierte un set en un array de elementos porque el console.log no puede imprimir un set
arrayImpar = Array.from(setImpar)
console.log(`Los impares son: ${arrayImpar} - CONVERTIDO CON Array.from`)

// Solo con un set
console.log("Solo con un set")
let mapParImpar = new Map()
let j = ""
let k = ""
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        j = j.concat(i, ",")
        mapParImpar.set("Par", j)
    } else {
        k = k.concat(i, ",")
        mapParImpar.set("Impar", k)
    }
}
console.log(`Los pares son ${mapParImpar.get("Par")}`)
console.log(`Los impares son: ${mapParImpar.get("Impar")}`)

// El mejor método, meto en dos arrays los pares e impares y luego se lo meto a los value del map

console.log("El mejor método")
arrayPar = []
arrayImpar = []
mapParImpar = new Map()
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        arrayPar.push(i)
    } else {
        arrayImpar.push(i)
    }
}
mapParImpar.set("Par", arrayPar)
mapParImpar.set("Impar", arrayImpar)
console.log(`Los pares son ${mapParImpar.get("Par")}`)
console.log(`Los impares son: ${mapParImpar.get("Impar")}`)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

arrayNames = ["Jose", "Maria", "Pedro", "Juan", "Ana"]

for (i = 0; i < arrayNames.length; i++) {
    console.log(`Con for: ${arrayNames[i]}`, arrayNames[i])
}

for (let nombres of arrayNames) {
    console.log(`Con for of, ${nombres}`, nombres)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "Hola carA colA"
let contador = 0
texto = texto.toLowerCase()
for (let letra of texto) {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        contador++
    }
}
console.log(`El número de vocales es: ${contador}`)

const vocales = new Set(["a", "e", "i", "o", "u"])
contador = 0
texto = texto.toLowerCase()
for (let letra of texto) {
    if (vocales.has(letra)) {
        contador++
    }
}
console.log(`El número de vocales es: ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumbers = [1, 2, 3, 4, 5]
let product = 1
for (let number of arrayNumbers) {
    product *= number
}
console.log(`El producto de los números es: ${product}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
    console.log(`5 x ${i} = `, 5 * i)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena = "Hola Cara Cola"
let cadenaInvertida = ""
for (let letra of cadena) {
    cadenaInvertida = letra + cadenaInvertida
}
console.log(cadenaInvertida)

cadenaInvertida = ""
for (let i = 0; i <= cadena.length - 1; i++) {
    cadenaInvertida = cadena[i] + cadenaInvertida
}
console.log(cadenaInvertida)

cadenaInvertida = ""
for (let i = cadena.length - 1; i >= 0; i--) {
    //cadenaInvertida = cadenaInvertida + cadena[i]
    cadenaInvertida += cadena[i]
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ==>

let fibo = 0
let a = 0
let b = 1
for (let i = 0; i < 10; i++) {
    fibo += a
    a = b
    b = fibo
    console.log(`Pasadaaa ${i} - Fibo: `, fibo)
}

let numA = 0
let numB = 1
fibo = 0
for (let i = 0; i < 10; i++) {
    console.log(`Fibo ${i} : ${fibo}`)
    numA = numB
    numB = fibo
    fibo = fibo + numA
}

fibo = 0
a = 0
b = 1
stringfibo = ""
for (let i = 0; i < 10; i++) {
    fibo += a
    a = b
    b = fibo
    stringfibo = stringfibo + fibo + ","
}
console.log(`Fibo: ${stringfibo}`)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arraynumber = [
    1, 2, 300, 40, 50, 66, 4, 65, 33, 22, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
]
let arraynumbermayor10 = []

for (let number of arraynumber) {
    if (number > 10) {
        arraynumbermayor10.push(number)
    }
}
console.log(arraynumbermayor10)
