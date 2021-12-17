/* Función:bloque de código reutilizable

function name(parametros){
    return
}

name(argumentos); */

function procesadorDeFrutas(manzanas,naranjas){
    let jugo="Jugo de "+naranjas +" "+ naranjas;
    return jugo;
}

//procesadorDeFrutas("manzana","naranjas");//LLAMADA O INVOCACIÓN
let jugoDeManzana = procesadorDeFrutas(4,0);
console.log(jugoDeManzana);

let jugoDeNaranja=procesadorDeFrutas(0,5);
console.log(jugoDeNaranja);
