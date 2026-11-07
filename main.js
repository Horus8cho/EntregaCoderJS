
/*
===================================
SIMULADOR DE AVENTURAS MEDIEVALES
Pre-Entrega 2 - JavaScript
===================================
*/

// DATOS DEL CABALLERO

const nombre = prompt("¡Bienvenido, caballero! ¿Cuál es tu nombre?");

let nivel = 1;
let continuar = true;

alert("Bienvenido al reino, " + nombre + "!");
alert("Comenzás tu aventura en el nivel " + nivel);


// BUCLE PRINCIPAL

while (continuar) {

    let mision = prompt(
        "Elegí una misión:\n" +
        "1 - Entrenar con espada\n" +
        "2 - Explorar el bosque\n" +
        "3 - Enfrentar al dragón\n" +
        "4 - Salir del juego"
    );


    // MISIÓN 1: ENTRENAMIENTO

    if (mision === "1") {

        alert("Comenzaste tu entrenamiento con espada.");

        for (let i = 1; i <= 3; i++) {

            console.log("Entrenamiento número " + i);

        }

        nivel++;

        alert("¡Entrenamiento completado! Ahora sos nivel " + nivel);


    // MISIÓN 2: EXPLORACIÓN

    } else if (mision === "2") {

        if (nivel >= 3) {

            alert("Exploraste el bosque y encontraste un tesoro.");

            nivel++;

            alert("¡Subiste al nivel " + nivel + "!");

        } else {

            alert("Necesitás ser nivel 3 para explorar el bosque.");

        }


    // MISIÓN 3: DRAGÓN

    } else if (mision === "3") {

        if (nivel >= 5) {

            alert("¡Derrotaste al dragón y salvaste el reino!");

            console.log(nombre + " derrotó al dragón.");

            continuar = false;

        } else {

            alert("Necesitás ser nivel 5 para enfrentar al dragón.");

        }


    // SALIR DEL JUEGO

    } else if (mision === "4") {

        alert("Abandonaste la aventura. ¡Hasta pronto!");

        continuar = false;


    // OPCIÓN INCORRECTA

    } else {

        alert("Opción incorrecta. Elegí una misión válida.");

    }

}


// FINAL DEL SIMULADOR

console.log("La aventura de " + nombre + " ha terminado.");
console.log("Nivel final: " + nivel);
