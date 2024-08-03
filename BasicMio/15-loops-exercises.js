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

let texto = "Hola cara cola"
let contador = 0

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
