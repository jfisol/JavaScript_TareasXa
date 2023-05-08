/*Realizar una funcion que reciba un numero y escriba una piramide desde 1 
hasta ese numero de la siguiente forma: para valor 6*/
var numeros=[];
function piramide(numero){
    for (let i = 1; i<=numero; i++){
    numeros+=i;
  console.log(numeros);
    }
}

piramide(6);
