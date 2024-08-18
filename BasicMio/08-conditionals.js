// if, else if, else

// if (condition) { (si)

let age = 35

if (age == 37) {
    console.log("La edad es 37")
}

// else if (si no)

if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else (si no, si) - else if siempre en medio de if y else, para comparar más de una condición

if (age == 37) {
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37, ni es menor de edad")
}

//Operador ternario

//age == 37 ? "la edad es 37" : "la edad no es 37"  // si es verdadero, si es falso
const message = age == 37 ? "la edad es 37" : "la edad no es 37" // si es verdadero, si es falso
console.log(message)

// Switch

let day = 3
let dayname

switch (day) {
    case 0:
        dayname = "Lunes"
        break
    case 1:
        dayname = "Martes"
        break
    case 2:
        dayname = "Miércoles"
        break
    case 3:
        dayname = "Jueves"
        break
    case 4:
        dayname = "Viernes"
        break
    case 5:
        dayname = "Sábado"
        break
    case 6:
        dayname = "Domingo"
        break
    default:
        dayname = "Número de día incorrecto"
    // break, no hace falta porque es el último
}

console.log(dayname) // Domingo

/* Otra forma sin usar switch. Sacado de https://www.youtube.com/watch?v=0NlsJuwFsrQ
 */

const dia = "0"

const dias = {
    0: "Lunes",
    1: "Martes",
    2: "Miércoles",
    3: "Jueves",
    4: "Viernes",
    5: "Sábado",
    6: "Domingo",
}

const diaSeleccionado = dias[dia] || "Día no válido"
console.log(diaSeleccionado) // Jueves
console.log(typeof dias) // Jueves
