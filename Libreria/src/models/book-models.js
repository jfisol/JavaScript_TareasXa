const {Model, DataTypes} = require('sequelize');
const {dbInstance} = require('../db/sequelize-config');


class Books extends Model{

};

Books.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    isbn:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notNull:{
                msg: 'El isbn no puede ser valor nulo'
            },
            isInt: {
                args: true,
                msg: "Solo se deben agregar números [#libro + version + ano]"
            }
        }
    },
    titulo:{
        type: DataTypes.STRING,
    },
    autor :{
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.STRING,
        validate : {
            len: {
                args: [2, 4],
                msg: "El ano solo debe de se 23 / 2023"
            }
        }
    },
    estado: {
        type: DataTypes.TINYINT
    },
    Library_id: {
        type: DataTypes.TINYINT,
        
    },
    
},{
    sequelize: dbInstance,
    modelName: 'Books',
    createdAt:false,//significa creado a tal hora
    updatedAt: false//actualizado a tal hora
});


//Exportamos 
module.exports = { Books }