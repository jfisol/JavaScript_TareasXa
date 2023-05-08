console.log(" ");
console.log("Ejercicio 3.2");
class Carrito{
    productos = [];
    unidad = [];
    montoTotal =0;
    
           
  agregarProducto(nombre,unidades,precio) {
    let p = this.productos.indexOf(nombre),//variable para ver indice de arreglo producto
    u = (this.productos.indexOf(nombre));//variable para ver el indice de arreglo unidad
    if(this.productos.includes(nombre)){
     console.log("Ya existe " + this.productos[p] +
     " con " + this.unidad[u] + " Unidades");
     
    }
    else{
        this.productos.push(nombre);
        this.unidad.push(unidades);
        this.montoTotal +=precio * unidades;
        
    }
  }

}

var carrito = new Carrito();
carrito.agregarProducto('Azucar',2,2); 
carrito.agregarProducto('Pan',6,2);
carrito.agregarProducto('Azucar',5,2);
carrito.agregarProducto('Pan',3,2);
carrito.agregarProducto('Azucar',1,2);
carrito.agregarProducto('carne',20,1);
carrito.agregarProducto('carne',100,1);
console.log(carrito);