const { NotAuthorized, NotFound } = require('../exceptions/user-exceptions');
const { Logins } = require('../models/login-model');
const jwt = require('jsonwebtoken');

async function login(user, password) {
    const log = await Logins.findOne({
      where: {
        name: user,
        password: password
      }
    })
  
    if (!log) {
      throw new NotAuthorized("nombre y/o password incorrectos")
    }
  
    const token = jwt.sign({
      id: log.id,
      name: log.name,
      password: log.password
    }, 'ClaveUltraSecreta')
  
    return {
      accessToken: token
    }
  }
 


  module.exports = { login, }