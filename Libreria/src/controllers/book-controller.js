const { Error } = require('sequelize');
const BookService  = require('../services/book-service');

//controlador para procesar la informacion y enviar todos los libros
async function getAllBooks(req,res){
   const library = await BookService.getAll();
   res.status(200).send(library);
}

//obtener por id
async function getBookById(req,res,next){
    const { id } = req.params;
    try {
    const books = await BookService.getById(id);
    res.status(200).send(books);//se envia la lista de usuarios
    } catch (error) {
       next(error);
              
    }
}

 //create book
 async function createBook(req,res){
    const { isbn, titulo, autor, year, estado,  Library_id } = req.body;
    const book = await BookService.createBook(isbn, titulo, autor, year, estado, Library_id);
     
    res.status(201).send(book);//se envia la lista de usuarios

}  
//Modificar Libro
async function editBooks(req,res){
    const { id } = req.params;
    const { isbn, titulo, autor, year, estado,Library_id} = req.body;
    const book = await BookService.editBook(id, isbn, titulo, autor, year, estado,Library_id);
     
    res.status(201).send(book);//se envia la lista de usuarios
 
 }  
//Eliminar book de forma logica
async function deletetBook(req,res){
    const { id } = req.params;
    const {isbn, titulo, autor, year, estado } = req.body;
    const book = await BookService.deleteBooks(id, isbn, titulo, autor, year, estado );
     
    res.status(201).send(`Libro ${book.titulo} se ha eliminado ${book.estado}`);//se envia la lista de usuarios
 
 }
module.exports = { getAllBooks, getBookById, createBook, editBooks, deletetBook }