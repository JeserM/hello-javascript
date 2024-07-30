// 1. Crea una variable para cada operación aritmética
let a =1 , b=2
console.log("a:",a,"y b:", b)
let suma = (a + b)
let resta =a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let potencia = a ** b
console.log("ori", a)
a++
let incremento = a
//Otra froma de hacerlo
// let incremento2 = ++a, se pone el ++ antes de la variable, se incrementa antes de hacer la operacion
// let incremento2 = a++, se pone el ++ despues de la variable, se incrementa despues de hacer la operacion de asignacion
a-- //se decrementa despues de hacer la operacion de asignacion
let decremento = a--
console.log("tras --", a)
console.log(decremento)
console.log("Suma:", suma)
console.log("resta:", resta)
console.log("multi:", multiplicacion)
console.log("divi:", division)
console.log("modulo/resto:", modulo)
console.log("potencia", potencia)
console.log("incremento a:", incremento)
console.log("decremento a", decremento)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

a = 4
console.log("a:",a)
a+=1    
console.log("a:",a)
a-=1
console.log("a:",a)
a*=3
console.log("a:",a)
a/=2
console.log("a:",a)
a%=2
console.log("a:",a)
a**=2
console.log("a:",a)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(5>3)
console.log(5<10)
console.log(5>=5)
console.log(5<=5)
console.log(5==5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5>10)
console.log(5<3)
console.log(5>=10)
console.log(5<=3)
console.log(5==10)

// 5. Utiliza el operador lógico and
console.log("And ´&&´")
console.log(5>3 && 5<10)

// 6. Utiliza el operador lógico or
console.log("Or ´||´")
console.log(5>10 || 5<3)
console.log(5>10 || 5>3)
console.log(5<10 || 5<3)
console.log(5<10 || 5>3)

// 7. Combina ambos operadores lógicos
console.log("And y Or")
console.log(5>10 && 5<3 || 5>10)
console.log((5>10 && 5<3) || 5<10)
console.log((5>10 && 5<3) || 5>10)
console.log(5<10 || 5<3 && 5>10)

// 8. Añade alguna negación
console.log("Negacion")
console.log(!true)

// 9. Utiliza el operador ternario
let llueve = true
llueve ? console.log("Llueve") : console.log("No llueve")

// 10. Combina operadores aritméticos, de comparáción y lógicas
a = 10
b = 5
c = 15

let esMayor = (a > b) // true
let esIgual = (a === c) // false

let resultado = (esMayor && !esIgual) // true && true = true

let combinacion = (a + b) * c > (a * b) && (a - b) < c; // (15 * 15) > 50 && 5 < 15 = true && true = true

console.log("Resultado de la combinación:", combinacion); // true