const passportJwt = require('passport-jwt')
const { Logins } = require('../models/login-model');

const ExctractJwt = passportJwt.ExtractJwt
const StrategyJwt = passportJwt.Strategy

const PassportStrategy = new StrategyJwt({
  jwtFromRequest: ExctractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'ClaveUltraSecreta'
}, async (jwtPayload, next) => {
  
  const login = await Logins.findByPk(jwtPayload.id)

  if (login) {
    next(false, login, null)
  } else {
    next(true, null, null)
  }

})

module.exports = PassportStrategy 