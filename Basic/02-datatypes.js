//Datos primitivos, son basico e inmutables y representan un solo valor. Hay 7 tipos de datos primitivos en JavaScript

// String (cadena de texto)
let name = "Jeser"
let alias = 'Azabache'
let mail = `jmg@gmail.com`

// Number (número) 64 bits
let age = 25 // Entero
let height = 1.82 // Decimal

// Boolean (valor lógico)
let isStudent = false
let isTeacher = true

// Undefined (valor no definido)
let undefinedValue
console.log(undefinedValue)

// Null (valor nulo)
let nullValue = null

// Symbol (valor único)
let mySymbol = Symbol("mysymbol")

//BigInt (entero de longitud arbitraria)

let myBigInt = BigInt(9007199254740991)
let myBigInt2 = 9007199254740991n 

//Mostramos los tipos de datos
console.log(typeof name)
console.log(typeof alias)
console.log(typeof mail)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log(typeof undefinedValue)

console.log(typeof nullValue) //la variable en si es un objeto, pero el valor es null un dato primitivo

console.log(typeof mySymbol) 

console.log(typeof myBigInt)
console.log(typeof myBigInt2)
