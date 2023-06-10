/**Archivo principal del programa */

//1.Importar express
const express = require('express');
//2.Inicializamos express
const app = express();
//importar asociaciones
//require('./src/db/asociations');
//3.Asignamos puesto
const PORT = 3000;


//Exportar middleware
const {errorHandlerMiddleware} = require('./src/middlewares/error-handler');//mensaje de error

//importar Rutas.
const libraryRouters = require('./src/routes/library-routes');
const bookRouters = require('./src/routes/book-routes');

//Parsear el cuerpo de las peticiones
app.use(express.json());//para poder parsear bien el cuerpo de las peticiones
app.use(errorHandlerMiddleware);//utilizamos el manejo de error creado como middleware

app.use('/library',libraryRouters);//establecer ruta principal de libreria
app.use('/book',bookRouters);






//4.ponemos en excucha el puerto
app.listen(PORT,(req,res) => {
    console.log(`API Libreria corriendo en el puerto #${PORT}`)

});