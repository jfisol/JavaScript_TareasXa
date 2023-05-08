/*
Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true]


Metoto at
Accede a la posicion de el eelemento
array.at(1);


*/ 

//Ejemplo 1
var Array1= ['rojo', 'azul', 'amarillo']
var Array2= ['blanco', 'negro', 'rojo']
var Array3=[];
//Resultado: ['rojo']


//Ejemplo 2
ArrayA=[4, 3, true, 'manzana']
ArrayB= ['pera', 3, false, true, 3, true]
//Resultado: [3, true]

//Función que crea un nuevo arreglo con los datos comunes de dos arrays
function ArregloUnion(Array1,Array2){
for(let i=0; i<=Array1.length-1; i++){
    for(let j=0; j<=Array2.length-1; j++){
            if(Array1[i] === Array2[j]){
                //console.log("----" + Array1[i] +"--" + Array2[j])
                Array3.push(Array1[i]);
                //console.log(Array3);

            }
    }
 
}
let arregloNew=[...new Set(Array3)];//Eliminar duplicados de un arreglo
return arregloNew;
}
console.log(ArregloUnion(Array1,Array2));
console.log(ArregloUnion(ArrayA,ArrayB));