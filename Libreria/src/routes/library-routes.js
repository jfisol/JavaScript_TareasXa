//1.Importar express
const express = require('express');

//importar rutas 
const router = express.Router();



//exportar controlador de libreria
const libraryController = require('../controllers/library-controller');
//Definir rutas para librerias
router.get('/obtener-libreria/:id',libraryController.getLibraryById);
router.get('/obtener-librerias',libraryController.getAllLibrary);
router.post('/crear-libreria',libraryController.createLibrery);
router.put('/modificar-libreria/:id',libraryController.editLibrary);
router.put('/eliminar-libreria/:id',libraryController.deletetLibrary);
//falta agregar libro desde libreria

module.exports = router;





//instalar sequelize
/**
 * 1. npm install express
 * 2. npm install --save sequelize
 * 3. npm install --save mysql2
 */