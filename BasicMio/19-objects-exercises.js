/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades

let bicicleta = {
    marca: "Comencal",
    tipo: "enduro",
    color: "blanca",
    rodar: function () {
        console.log("La bicicleta rueda.")
    },
}

// 2. Accede y muestra su valor

console.log(`marca: ${bicicleta.marca}`)
console.log(bicicleta.tipo)
console.log(bicicleta.color)

console.log(bicicleta["marca"])
console.log(bicicleta["tipo"])
console.log(bicicleta["color"])

// 3. Agrega una nueva propiedad

bicicleta.modelo = "Meta AM 29"

// 4. Elimina una de las 3 primeras propiedades

delete bicicleta.color

console.log(bicicleta)

// 5. Agrega una función e invócala

bicicleta.rodar()

// 6. Itera las propiedades del objeto

for (let key in bicicleta) {
    //console.log(key)
    //console.log(bicicleta[key])
    console.log(key + ": " + bicicleta[key])
    //console.log(`hola ${key}: ${bicicleta[key]}`)
}

// 7. Crea un objeto anidado

let bicicleta2 = {
    marca: "specialized",
    tipo: "trail",
    color: "negra",
    modelo: "stumpjumper EVO",
    rodar: function () {
        console.log("La bicicleta rueda.")
    },
    ruedas: {
        tipo: "mullet",
        delantera: "29",
        trasera: "27.5",
    },
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(bicicleta2.ruedas.tipo)
console.log(bicicleta2.ruedas.delantera)
console.log(bicicleta2.ruedas.trasera)

// 9. Comprueba si los dos objetos creados son iguales

console.log(bicicleta === bicicleta2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(bicicleta.marca === bicicleta2.marca)
