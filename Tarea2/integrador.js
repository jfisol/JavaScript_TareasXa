// Cada producto que vende el super es creado con esta clase
class Producto {
    sku;            // Identificador único del producto
    nombre;         // Su nombre
    categoria;      // Categoría a la que pertenece este producto
    precio;         // Su precio
    stock;          // Cantidad disponible en stock

    constructor(sku, nombre, precio, categoria, stock) {
        this.sku = sku;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;

        // Si no me definen stock, pongo 10 por default
        if (stock) {
            this.stock = stock;
        } else {
            this.stock = 10;
        }
    }

}


// Creo todos los productos que vende mi super
const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);

const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];


// Cada cliente que venga a mi super va a crear un carrito
class Carrito {
    productos;      // Lista de productos agregados
    categorias;     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal;    // Lo que voy a pagar al finalizar mi compra
    totalCancelar = [];
    totalEliminado=[];
    // Al crear un carrito, empieza vació
    constructor() {
        this.precioTotal = 0;
        this.productos = [];
        this.categorias = [];
        
    }

    /**
     * función que agrega @{cantidad} de productos con @{sku} al carrito
     */
    async agregarProducto(sku, cantidad) {
        console.log(`Agregando ${cantidad} ${sku}`);
            try {
                const producto = await findProductBySku(sku);//await espera a que este proceso asincrono se concrete para seguir con el codigo síncrono
                console.log("Producto encontrado", producto);
                //Identifica si existen productos
                const almacenProducto = await BusquedaProdArray(this.productos,this.categorias,this.totalCancelar,this.precioTotal,cantidad,producto,sku);
                //imprimir costo
                this.precioTotal= await calculartotal_pagar(this.totalCancelar);
            // mostrar mensaje
            //console.log('Trae el costo => '+this.precioTotal)
               // const mostrarMess = await mostrarMensaje(this.productos,this.categorias,this.precioTotal);
            

            } catch (error) {
                console.log(error);
            }      
    }



    eliminar(sku,cantidad){
        setTimeout(() => {

            EliminarProducto(sku,cantidad,this.productos,this.totalEliminado,this.precioTotal).then(respuesta =>{
                console.log(respuesta);
               }).catch(valorNegativo => {
                console.log(valorNegativo);
               })
              
     
        },3000);//6000);
        
        
    }
    

  async Historial(){
   

        setTimeout(() =>{
            
               
                const mostrarMess =  mostrarMensaje(this.productos,this.categorias,this.precioTotal,this.totalEliminado);
            
               
        },4000);//1500);
        }

}

// Cada producto que se agrega al carrito es creado con esta clase
class ProductoEnCarrito {
    sku;       // Identificador único del producto
    nombre;    // Su nombre
    cantidad;  // Cantidad de este producto en el carrito

    constructor(sku, nombre, cantidad) {
        this.sku = sku;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

}

// Función que busca un producto por su sku en "la base de datos"
function findProductBySku(sku) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
            } else {
                reject(`Product ${sku} not found`);
            }
        }, 1500);
    });
}

//Funcion que busca un producto por su sku en lista de productos agregados 'arreglo de carrito'
function BusquedaProdArray(productos,categorias,totalCancelar,precioTotal,cantidad,findProducto,sku){
return new Promise((resolve) => {
    setTimeout(() => {
        const BusquedaProd = productos.find(prodArray =>prodArray.sku ===sku);
        if(productos.includes(BusquedaProd)){
           BusquedaProd.cantidad+=cantidad;
            precioTotal = precioTotal + (findProducto.precio * cantidad);
            totalCancelar.push(precioTotal);
          resolve ( console.log("Agregando producto existente"));
        }
        else{
            const nuevoProducto = new ProductoEnCarrito(sku, findProducto.nombre, cantidad);
            productos.push(nuevoProducto);
            precioTotal = precioTotal + (findProducto.precio * cantidad);
            categorias.push(findProducto.categoria);
            totalCancelar.push(precioTotal);
          console.log('Agregando nuevo producto');
        }
        
    },1500);
});
}//fin Busqueda ProdArray

//funcion para mostrar el precio
 function mostrarMensaje(productos,categorias,costo,totalEliminado){
    return new Promise((resolve) =>{
    
        setTimeout(() => {
          const quiter_Costo =  totalEliminado.reduce((acc,cur) => acc + cur);
          let total = costo - quiter_Costo;
        if(productos != null){
          resolve(  
            console.log("Ver Producto"),
            console.log(productos),
            console.log("Costo a cancelar: ["+total+"]"),//["+costo +"]"
            console.log(""),
            console.log("caregorias: [ " + categorias+" ]"),
            );

        }
    },500)
    });
 }
// Funcion para calcular precio
function calculartotal_pagar(array){
    return new Promise((resolve,reject) => {
      setTimeout(() =>{
            const totalPrecio = array.reduce((acc,cur) => acc + cur);
            if(totalPrecio > 0){
                resolve(totalPrecio);
            }
            else{
                reject(0);
            }
        },100)
    });
}

/**Creacion de Promesa para eliminar producto*/
function EliminarProducto(sku, cantidad,produ,totalEliminado,precioTotal){
return new Promise((resolve,reject) =>{
 setTimeout(() => {
   // const carritoCompras = new Carrito();
   const foundProduct = productosDelSuper.find(product => product.sku === sku);
    const BusquedaProdArray = produ.find(prodArray =>prodArray.sku ===sku);
    if(produ.includes(BusquedaProdArray)){
        let index = produ.indexOf(BusquedaProdArray);
        if(cantidad < BusquedaProdArray.cantidad){
           let calculo_total = produ[index].cantidad -= cantidad;
           precioTotal = precioTotal + (foundProduct.precio * cantidad);
           totalEliminado.push(precioTotal);
          resolve(`Restando producto ${sku} cantidad ${cantidad}` );
        }else if(cantidad >= BusquedaProdArray.cantidad){
         produ.splice(index,1);
         precioTotal = precioTotal + (foundProduct.precio * BusquedaProdArray.cantidad);
        totalEliminado.push(precioTotal);
        resolve(`Producto eliminado ${sku}`)
       }
    
    }
    else{
        reject('Producto no existe en el carrito');
    }

 },1000);

});
}

 /********  Probando el Sistema********/

const carrito = new Carrito();
carrito.agregarProducto('KS944RUR',10);
carrito.agregarProducto('FN312PPE',2);
carrito.agregarProducto('KS944RUR',1);
carrito.agregarProducto('XX92LKI',1);
carrito.agregarProducto('XX92LKI',6);
carrito.eliminar('XX92LKI',20);
carrito.eliminar('KS944RUR',110);

carrito.Historial();