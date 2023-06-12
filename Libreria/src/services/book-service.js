//Esta capa contiene logica del negocio
const {Libraries} = require('../models/library-models');
const {Books} = require('../models/book-models');

//obtener todos los libros
async function getAll(){
    const listLibros = await Books.findAll({
        where: {
            estado: 1
          }, 
    });
    return listLibros;
}

//obtener book por id
async function getById(id){
  
    const book = await Books.findByPk(id);
    if((book == null)){
       throw new Error(`Usuario con id #${id} no encontrado`);
    }
    if(book.estado == 0){
     throw new Error(`Libro ${book.titulo} no encontrado`);
     
    }
    
    return book;
   }
//crear  libros
async function createBook(isbn, titulo, autor, year, library_id) {
    const book = new Books();
    book.isbn = isbn;
    book.titulo = titulo;
    book.autor = autor;
    book.year = year;
    book.Library_id = library_id;
    const bookCreated = await book.save();
    return bookCreated;
    
    }

    //modificar libros
async function editBook(id, isbn, titulo, autor, year, estado, library_id){
    const book = await getById(id);
  
    if(isbn){
        book.isbn = isbn
    }
    if(titulo){
     book.titulo = titulo
    }
    if(autor){
      book.autor = autor
    }
    if(year){
        book.year = year
    }
    if(estado){
      library.estado= estado
    }
    if( library_id){
        book.Library_id = library_id
    }
    const bookEdited = await book.save();//metodo para guardar y devuelve promesa
    return bookEdited;
  }

    //ELIMINAR de forma logica libros
async function deleteBooks(id){
    const book = await Books.findByPk(id); 
    // 0 (que significa inactivo/falso) o 1 (que significa activo/verdadero)
    book.estado = 0;
   
     
     const bookEdited = await book.save();//metodo para guardar y devuelve promesa
     return bookEdited;
   }
module.exports = { getAll, getById, createBook, editBook, deleteBooks }