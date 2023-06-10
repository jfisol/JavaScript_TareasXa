
//1.Importar express
const express = require('express');

//importar rutas 
const router = express.Router();


//exportar controlador book
const bookController = require('../controllers/book-controller');
//Definir rutas para libros
router.get('/obtener-libros',bookController.getAllBooks);
router.get('/obtener-libro/:id',bookController.getBookById);
router.post('/crear-libros',bookController.createBook);
router.put('/modificar-libro/:id',bookController.editBooks);
router.put('/eliminar-libro/:id',bookController.deletetBook);
module.exports = router;
