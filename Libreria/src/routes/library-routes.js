//1.Importar express
const express = require('express');

//importar rutas 
const router = express.Router();



//exportar controlador de libreria
const libraryController = require('../controllers/library-controller');
const { isAuthenticated } = require('../middlewares/authentication');
//Definir rutas para librerias
router.get('/obtener-libreria/:id',libraryController.getLibraryById);
router.get('/obtener-librerias',libraryController.getAllLibrary);
router.post('/crear-libreria',isAuthenticated,libraryController.createLibrery);
router.put('/modificar-libreria/:id',isAuthenticated,libraryController.editLibrary);
router.put('/eliminar-libreria/:id',isAuthenticated,libraryController.deletetLibrary);
//falta agregar libro desde libreria
router.post('/modificar-libreria/:id/agregar-libro',isAuthenticated,libraryController.createBookInLibrery);//<---
module.exports = router 





//instalar sequelize
/**
 * 1. npm install express
 * 2. npm install --save sequelize
 * 3. npm install --save mysql2
 */