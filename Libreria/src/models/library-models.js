const {Model, DataTypes} = require('sequelize');
const {dbInstance} = require('../db/sequelize-config');

class Libraries extends Model{

};

Libraries.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notNull:{
                msg: 'El nombre no puede ser valor nulo'
            },
          /* isAlpha: {
                args:true,
              msg:'El nombre solo puede contener letras'
            },*/
            len: {
                args: [3, 98],
                msg: "El nombre tiene que ser entre 3 y 98 caracteres"
            }
        }
    },
    location:{
        type: DataTypes.STRING,
        validate:{
            len: {
                args: [3, 98],
                msg: "La dirección tiene que ser entre 3 y 249 caracteres"
            }
        }
    },
    telefono:{
        type: DataTypes.INTEGER,
        validate: {
            isInt: {
                args: true,
                msg: "Solo se deben agregar números en el campo teléfono"
            }
        }   
    },
    estado: {
        type: DataTypes.TINYINT,
        
    }
},{
    sequelize: dbInstance,
    modelName: 'Libraries',
    createdAt:false,//significa creado a tal hora
    updatedAt: false//actualizado a tal hora
});


//Exportamos 
module.exports = { Libraries }