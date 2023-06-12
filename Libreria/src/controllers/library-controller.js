const { Error } = require('sequelize');
const libraryService  = require('../services/library-service');
const bookService = require('../services/book-service');
//controlador para procesar la informacion y enviar todas las librerias
async function getAllLibrary(req,res){
   const library = await libraryService.getAll();
   res.status(200).send(library);
}

//controlador para procesar la informacion y enviar librerias por id
async function getLibraryById(req,res,next){
   const { id } = req.params;
   try {
      const library = await libraryService.getById(id);
      res.status(200).send(library);   
   } catch (error) {
      next(error);
   }
   
}
//crear Libreria
async function createLibrery(req,res){
   const {name, location, telefono } = req.body;
  const library = await libraryService.createLibrery(name,location,telefono);
res.status(200).send(library);
}

//crear libro en Libreria
async function createBookInLibrery(req,res,next){
   const { id } = req.params;
   try {
   const { isbn, titulo, autor, year } = req.body;
   const book = await libraryService.createBookInLibrery(isbn, titulo, autor, year,id);
   const library = await libraryService.getById(id);
   res.status(200).send(library);
   } catch (error) {
      next(error);
   }
}

//Modificar Libreria
async function editLibrary(req,res){
   const { id } = req.params;
   const { name, location, telefono , estado} = req.body;
   const library = await libraryService.editLibrary(id,name,location,telefono, estado);
    
   res.status(201).send(library);//se envia la lista de usuarios

}  
//Eliminar Libreria de forma logica
async function deletetLibrary(req,res){
   const { id } = req.params;
   const { name, location, telefono,estado } = req.body;
   const library = await libraryService.deleteLibrary(id, name,location,telefono,estado );
    
   res.status(201).send(`Libreria ${library.name} se ha eliminado ${library.estado}`);//se envia la lista de usuarios

}
//crear Usuario
async function createLibrery(req,res){
   const {name, location, telefono } = req.body;
  const library = await libraryService.createLibrery(name,location,telefono);
res.status(200).send(library);
}

module.exports = { getAllLibrary, getLibraryById, createLibrery, editLibrary, deletetLibrary,createBookInLibrery}