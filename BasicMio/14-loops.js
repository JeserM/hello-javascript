// Loops o bucles

// for
// bucle for - bucle determinado - bucle con un número determinado de iteraciones

for (let i = 0; i < 5; i++) {
  //console.log("Hola ${i}")
  console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento: ${numbers[i]}`)
}

// while
// bucle while - bucle indeterminado - bucle con un número indeterminado de iteraciones. Se evaluara la condición antes de ejecutar el bucle

let i = 0
while (i < 5) {
  console.log(`Hola ${i}`)
  i++
}

// Bucle infinito
// while(true) {
// }

// do while
// bucle indeterminado - bucle con un número indeterminado de iteraciones. Se ejecutara el bucle al menos una vez y luego evaluara la condición

i = 6
do {
  console.log(`Hola ${i}`)
  i++
} while (i < 5)

// for of
//bucle for of - bucle determinado - bucle con un número determinado de iteraciones. Se utiliza para recorrer iterables (arrays, strings, maps, sets, etc.)

myArray = [1, 2, 3, 4]

mySet = new Set([
  "Brais",
  "Moure",
  "Mouredev",
  37,
  true,
  "braismoure@mouredev.com",
])

myMap = new Map([
  ["name", "Brais"],
  ["email", "brasimoure@mouredev.com"],
  ["age", 37],
])

myString = "¡Hola JavaScript!"

for (let valor of myArray) {
  // recorre el array, en cada iteracion, valor sera el valor del elemento.
  console.log(valor)
}

for (let valor of mySet) {
  // recorre el array, en cada iteracion, valor sera el valor del elemento.
  console.log(valor)
}

for (let valor of myMap) {
  console.log(valor)
}

for (let valor of myString) {
  console.log(valor)
}

// break y continue

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue // salta a la siguiente iteración, no ejecuta el resto del bucle
  } else if (i == 7) {
    break // sale del bucle
  }
  console.log(`Hola ${i}`)
}
