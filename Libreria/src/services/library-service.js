//Esta capa contiene logica del negocio
const {Libraries} = require('../models/library-models');
const { Books } = require('../models/book-models');
Libraries.hasMany(Books,{as:"Libros", foreignKey:"Library_id"});
//se anade una clave libreiaId a la tabla libros
//const { Books } = require('../models/book-models');
//obtener librerias
async function getAll(){
    const listLibrery = await Libraries.findAll({
      where: {
        estado: 1
      },
      include:{
        model: Books,
        as: "Libros",
        attributes: ['isbn','titulo','autor','year']
      },
    });
    return listLibrery;
}

//obtener libreria por id
async function getById(id){
  
 const library = await Libraries.findByPk(id,{
  include:{
    model: Books,
    as: "Libros",
    attributes: ['isbn','titulo','autor','year']
  },
 });
 if((library == null) || (Books == null)){
    throw new Error(`Usuario con id #${id} no encontrado`);
 }
 if(library.estado == 0){
  throw new Error(`Libreria ${library.name} no encontrada`);
  
 }
 
 return library;
}

//crear libreria
async function createLibrery(name, location, telefono) {
const librery = new Libraries();
librery.name = name;
librery.location = location;
librery.telefono = telefono;

const libraryCreated = await librery.save();
return libraryCreated;

}
//crear libro en libreria
async function createBookInLibrery(isbn, titulo, autor, year, library_id) {
  const library = await Libraries.findByPk(library_id);
    if((library.estado == 0) || (library == null)){
     return `${library_id} de Libreria no encontrada`;
     }
     else{
  const book = new Books();
  book.isbn = isbn;
    book.titulo = titulo;
    book.autor = autor;
    book.year = year;
    book.Library_id = library_id;
    
 const bookInLibraryCreated = await book.save();
 //const library = await Libraries.getById(library_id);
  return bookInLibraryCreated;
     }
  }

//modificar Libreria
async function editLibrary(id, name, location, telefono, estado){
    const library = await getById(id);
  
    if(name){
    library.name = name
    }
    if(location){
    library.location = location
    }
    if(telefono){
      library.telefono = telefono
    }
    if(estado){
      library.estado= estado
    }
    
    const libreryEdited = await library.save();//metodo para guardar y devuelve promesa
    return libreryEdited;
  }

  //ELIMINAR de forma logica libreria
  async function deleteLibrary(id){
   // const library = await getById(id);
   const library = await Libraries.findByPk(id); 
  // const estado = 0;
    // 0 (que significa inactivo/falso) o 1 (que significa activo/verdadero)
      library.estado = 0;
  
    
    const libreryEdited = await library.save();//metodo para guardar y devuelve promesa
    return libreryEdited;
  }

module.exports = { getAll, getById, createLibrery, editLibrary, deleteLibrary, createBookInLibrery}