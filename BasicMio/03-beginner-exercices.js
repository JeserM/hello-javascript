// 1. Escribe un comentario en una línea

// esto es un comentario de una linea

// 2. Escribe un comentario en varias líneas

/* Esto es 
un comentartio
en varias lineas 
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let string = "Jeser"
let string2 = `Jeser2`
let string3 = 'Jeser 3'

let entero =25
let decimal = 1.82

let booleanTrue = true
let booleanFalse = false

let undefinedValue

let nullValue = null

let mySymbol = Symbol("mysymbol")

let myBigInt = BigInt(1111111111111111111111)
let myBigInt2 = 1111111111111111111111n


// 4. Imprime por consola el valor de todas las variables

console.log(string)
console.log(string2)
console.log(string3)
console.log(entero)
console.log(decimal)
console.log(booleanTrue)
console.log(booleanFalse)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)
console.log(myBigInt2)


// 5. Imprime por consola el tipo de todas las variables

console.log(typeof string)
console.log(typeof string2)
console.log(typeof string3)
console.log(typeof entero)
console.log(typeof decimal)
console.log(typeof booleanTrue)
console.log(typeof booleanFalse)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

string = "Jeser2"
string2 = `Jeser3`
string3 = 'Jeser 4'

entero = 50
decimal = 3.14

booleanTrue = false
booleanFalse = true

undefinedValue = "defined"

nullValue = "not null"

mySymbol = Symbol("newSymbol")

myBigInt = BigInt(2222222222222222222222)
myBigInt2 = 2222222222222222222222n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

console.log("Cambio de tipo de dato:")
string = 12
string2 = 23
string3 = 12.3

entero = "50"
decimal = "3.14"

booleanTrue = "hola"
booleanFalse = 3

undefinedValue = 3

nullValue = true

mySymbol = Symbol(323)

myBigInt = "cuadrado"
myBigInt2 = "Triple"
console.log(typeof string)
console.log(typeof string2)
console.log(typeof string3)
console.log(typeof entero)
console.log(typeof decimal)
console.log(typeof booleanTrue)
console.log(typeof booleanFalse)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

console.log("Constantes: ")
const stringConst = "Jeser const"
const enteroconst = 25
const decimalConst = 1.82

const booleanTrueConst = true
const booleanFalseConst = false

const undefinedValueConst = undefined

const nullValueConst = null

const mySymbolConst = Symbol("mysymbolconst")

const myBigIntConst = BigInt(1111111111111111111111)
const myBigInt2Const = 1111111111111111111111n

console.log(stringConst)
console.log(enteroconst)
console.log(decimalConst)
console.log(booleanTrueConst)
console.log(booleanFalseConst)
console.log(undefinedValueConst)
console.log(nullValueConst)
console.log(mySymbolConst)
console.log(myBigIntConst)
console.log(myBigInt2Const)

// 9. A continuación, modifica los valores de las constantes

// console.log("Modificacion de constantes: ")
// stringConst = "Jeser const2"
// enteroconst = 252
// decimalConst =22
// booleanTrueConst = false
// booleanFalseConst = true
// undefinedValueConst = "defined"
// nullValueConst = null
// mySymbolConst = Symbol("mysymbolconst 2")
// myBigIntConst = BigInt(23132312)
// myBigInt2Const = 23123213123213n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser

/* stringConst = "Jeser const2"
            ^

TypeError: Assignment to constant variable. 
NO se puede cambiar valor a una const
*/