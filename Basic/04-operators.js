// Operadores   + - * / % ++ --

// Operadores Aritméticos
let a = 5
let b = 10
console.log(a + b) // Suma  
console.log(a - b) // Resta
console.log(a * b) // Multiplicación  
console.log(a / b) // División

console.log(a % b) // Módulo, resto de la división
console.log(a ** b) // Potencia, a elevado a la b, a^b, exponente

// Operadores de Incremento y Decremento
a++// Incremento, a = a + 1   
console.log("hola",a)

b--// Decremento, b = b - 1
console.log(b) 

// Operadores de Asignación, asignan un valor a una variable

let myVariable = 2
console.log(myVariable)
myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable)

myVariable -= 2 
myVariable += 2 
myVariable /= 2 
myVariable %= 2 
myVariable **= 2 

// Operadores de Comparación, comparan dos valores y devuelven un valor booleano
console.log("Ajam, a es:",a)

console.log(a > b) 
console.log(a < b) 
console.log(a >= b) 
console.log(a <= b) 
console.log(a == 6) // Igual por valor
console.log(a == "6") // Igual por valor, javascript comparará el valor sin importar el tipo de dato, por eso da true
// Comprobar el valor y el tipo de dato
console.log(a === a) // Igual por identidad ()
console.log(a === 6)
console.log(a === "6") // Igual por identidad, javascript comparará el valor y el tipo de dato, por eso da false

console.log("A es distinto de 6", a != 6) // Operador de desigualdad. Diferente por valor
console.log(a !== 6) // Operador de desigualdad estricta. Diferente por valor y tipo de dato
console.log(a !== "6") // Operador de desigualdad estricta. Diferente por valor y tipo de dato. TRUE
console.log(0 == false) // true
console.log(1 == false) // false
console.log(2 == false) // false
console.log(0 == "") // true, cadena de texto vacia
console.log(0 == " ") // true
console.log(0 == '') // true
console.log(0 == "Hola") // false
console.log(0 === "") // false, tipos diferentes
console.log(undefined == null) // true
console.log(undefined === null) // false

// Truthy values (valores verdaderos, definidos por el lenguaje)

// Todos los numeros postivos y negativos son verdaderos menos el cero
// Todas las cadenas de texto menos las vacias son verdaderas
// El boolean True es verdadero

//Falsy values (valores falsos)
// 0
// 0n (BigInt)
// null
//undefined
// NaN (not a number)
// cadena de texto vacia
//el boolean False

// Operadores Lógicos, logica booleana. permiten combinar valores booleanos y devuelven un valor booleano 

// AND (&&), solo devuelve verdadero si ambos valores son verdaderos
console.log(`Logica AND`)
console.log(5>10 && 15>20) // false
console.log(5<10 && 15<20)
console.log(5<10 && 15>20)
console.log(5>10 && 15>20 && 30>40)

// OR (||), devuelve verdadero si al menos uno de los valores es verdadero
console.log(`Logica OR`)
console.log(5>10 || 15>20)
console.log(5<10 || 15<20)
console.log(5<10 || 15>20)


// NOT (!), negacion. devuelve el valor contrario
console.log(`Niego True`, !true)
console.log(`Niego False`, !false)


// Operador Ternario, es una forma abreviada de escribir una sentencia if

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

let isRaining2 = true
isRaining2 ? console.log("Esta lloviendo") : console.log("No esta lloviendo")