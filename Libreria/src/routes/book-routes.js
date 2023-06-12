
//1.Importar express
const express = require('express');

//importar rutas 
const router = express.Router();


//exportar controlador book
const bookController = require('../controllers/book-controller');
const loginController = require('../controllers/login-controller');
const { isAuthenticated } = require('../middlewares/authentication');

//Definir rutas para libros
router.get('/obtener-libros',bookController.getAllBooks);
router.get('/obtener-libro/:id',bookController.getBookById);
router.post('/crear-libros',isAuthenticated,bookController.createBook);
router.put('/modificar-libro/:id',isAuthenticated,bookController.editBooks);
router.put('/eliminar-libro/:id',isAuthenticated,bookController.deletetBook);
//router.post('/login',loginController.login);
module.exports = router ;
