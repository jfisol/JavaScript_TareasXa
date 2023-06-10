const Libraries  = require('../models/library-models');
const Books  = require('../models/book-models');

//uno a muchos 
//se anade una clave libreriaId a la tabla de libros
Libraries.hasMany(Books );//, {as:"librerias", foreignKey:"libreria_id"});

//se anade una clave libreiaId a la tabla libros
Books.belongsTo(Libraries);//, {as:"libreria"});
