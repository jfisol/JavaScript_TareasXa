/*
3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
*/


class Carrito{
    montoTotal =0;
    productos = [];

  agregarProducto(nombre,unidades,precio) {
     this.montoTotal +=precio * unidades;
     this.productos.push(nombre);
  }

}

/*

3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}
*/
var carrito = new Carrito();
carrito.agregarProducto('Azucar',5,2);
carrito.agregarProducto('Pan',10,2);

console.log(carrito);
/*
Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}

*/
/**
 * 3.3)Agregar al ejercicio anterior una validación para no permitir 
 * duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
 */

