/**Archivo principal del programa */
//1.Importar express
const express = require('express');
//importar Rutas.
const libraryRouters = require('./src/routes/library-routes')
const bookRouters = require('./src/routes/book-routes')
const loginController = require('./src/controllers/login-controller.js')
//Exportar middleware
const {errorHandlerMiddleware} = require('./src/middlewares/error-handler');//mensaje de error

//2.Inicializamos express
const app = express();
const { initializeAuthentication } = require('./src/auth/auth') //<-----
//3.Asignamos puesto
const PORT = 3000;
//importamos
initializeAuthentication() //inicializar la autenticacion  <-------
//Parsear el cuerpo de las peticiones
app.use(express.json())//para poder parsear bien el cuerpo de las peticiones
app.post('/user',loginController.createUser);
app.use('/library',libraryRouters);//establecer ruta principal de libreria
app.use('/book',bookRouters);
app.post('/login',loginController.login);
app.use(errorHandlerMiddleware);//utilizamos el manejo de error creado como middleware


//4.ponemos en excucha el puerto`
app.listen(PORT,(req,res) => {
    console.log(`API Libreria corriendo en el puerto #${PORT}`);
});