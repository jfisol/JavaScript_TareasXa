const { Logins } = require('../models/login-model');
const  loginService = require('../services/login-service');

async function login(req, res, next) {
    const { name, password } = req.body
  
    try {
      const result = await loginService.login(name, password)
      res.status(200).send(result)
    } catch(error) {
      next(error)
    }
  }

//crear Usuario
async function createUser(req,res){
 
  const us = await Logins.create({
  name: "admin",
  password: "admin"
 }); 
res.status(200).send(us);
}
//Otro metodo para crear varios usuarios 
/**
 //crear Usuario
async function createUser(req,res){
  const usuario = [
    {name:"admin", password:"admin"},
    {name:"root", password:"root"}
  ];

 const Us = await usuario.forEach(usaer => Logins.create(usaer)); 
res.status(200).send(`Usuario creado con exito ${Logins.name}`);
}
  
 */
  module.exports = { login, createUser }
  