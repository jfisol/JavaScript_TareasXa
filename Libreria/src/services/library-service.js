//Esta capa contiene logica del negocio
const {Libraries} = require('../models/library-models');
const { Books } = require('../models/book-models');
//Libraries.hasMany(Books,{ foreignKey:"Library_id"});
//se anade una clave libreiaId a la tabla libros
//Books.belongsTo(Libraries,{as: "Libros"});
//obtener librerias
async function getAll(){
    const listLibrery = await Libraries.findAll({
      where: {
        estado: 1
      },
      include:{
        model: Books,
        attributes: ['isbn','titulo','autor','year']
      },
    });
    return listLibrery;
}

//obtener libreria por id
async function getById(id){
  
 const library = await Libraries.findByPk(id);
 if((library == null)){
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

module.exports = { getAll, getById, createLibrery, editLibrary, deleteLibrary }