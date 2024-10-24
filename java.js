 let array = ["dato1", 1, Boolean];
 console.log(array.length);
 array.push("Nuevo Valor");
 console.log(array[1]);
 console.log("nuevo tamaño",array.length);
 console.log(array[2]);

//tabla del 5 hasta el 6 y fin del arreglo al final y  y lenght

let resultados = [];
for ( var i=0; i<10; i++){
    producto=5*(i+1);
    //console.log(producto);
    if (producto<=30){
        resultados.push(producto);
    }
}
for ( var j=0; j<resultados.length; j++){
console.log(resultados[j]);
}
console.log("Fin del arreglo ultima posicion: "+ resultados[resultados.length-1]);
console.log("Tamaño del arreglo: "+ resultados.length);
